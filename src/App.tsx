import '@fortawesome/fontawesome-free/css/all.min.css';

import axios from 'axios';

import Pages from '@/pages';

export default function App() {
  axios.defaults.withCredentials = true;
  return (
    <>
      <Pages />
    </>
  );
}
