import { useEffect, useRef } from 'react';
import axios from 'axios';
import crypto from 'crypto-js';

interface RazorpayProps {
  razorpayId: string;
  orderId: string;
  keyId: string;
  keySecret: string;
  currency: string;
  amount: number;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  modal: {
    confirm_close: boolean;
    ondismiss: (reason: any) => void;
  };
  retry: {
    enabled: boolean;
  };
  timeout: number;
  theme: {
    color: string;
  };
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const loadScript = (src: string) =>
  new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      console.log('razorpay loaded successfully');
      resolve(true);
    };
    script.onerror = () => {
      console.log('error in loading razorpay');
      resolve(false);
    };
    document.body.appendChild(script);
  });

const RenderRazorpay = ({
  razorpayId,
  orderId,
  keyId,
  keySecret,
  currency,
  amount,
}: RazorpayProps) => {
  const paymentId = useRef<string | null>(null);
  const paymentMethod = useRef<string | null>(null);

  const handlePayment = async (status: any, orderDetails = {}) => {
    await axios.post('http://localhost:3100/api/v1/order/verifypayment', {
      status,
      orderDetails,
    });
  };

  const displayRazorpay = async (options: RazorpayOptions) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      console.log('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const rzp1 = new window.Razorpay(options);

    rzp1.on('payment.submit', (response: { method: string }) => {
      paymentMethod.current = response.method;
    });

    rzp1.on(
      'payment.failed',
      (response: { error: { metadata: { payment_id: string } } }) => {
        paymentId.current = response.error.metadata.payment_id;
      },
    );

    rzp1.open();
  };

  useEffect(() => {
    console.log('in razorpay');
    const options: RazorpayOptions = {
      key: keyId,
      amount,
      currency,
      name: 'Eazy Eats',
      order_id: razorpayId,
      handler: (response: {
        razorpay_payment_id: string | null;
        razorpay_signature: string;
      }) => {
        console.log('succeeded');
        console.log(response);
        paymentId.current = response.razorpay_payment_id;

        const succeeded =
          crypto
            .HmacSHA256(`${razorpayId}|${response.razorpay_payment_id}`, keySecret)
            .toString() === response.razorpay_signature;

        if (succeeded) {
          handlePayment('succeeded', {
            razorpayId,
            orderId,
            paymentId: paymentId.current,
            signature: response.razorpay_signature,
          });
        } else {
          handlePayment('failed', {
            orderId,
            razorpayId,
            paymentId: response.razorpay_payment_id,
          });
        }
      },
      modal: {
        confirm_close: true,
        ondismiss: async (reason: any) => {
          if (reason === undefined) {
            console.log('cancelled');
            handlePayment('cancelled', {
              orderId,
            });
          } else if (reason === 'timeout') {
            console.log('timedout');
            handlePayment('timedout', {
              orderId,
            });
          } else {
            console.log('failed');
            handlePayment('failed', {
              orderId,
            });
          }
        },
      },
      retry: {
        enabled: false,
      },
      timeout: 900,
      theme: {
        color: '',
      },
      description: '',
    };
    displayRazorpay(options);
  }, [razorpayId, keyId, keySecret, currency, amount]);

  return null;
};

export default RenderRazorpay;
