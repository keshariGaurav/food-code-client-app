import '@fortawesome/fontawesome-free/css/all.min.css';
import Pages from '../src/pages';
import axios from 'axios';

export default function App() {
  axios.defaults.withCredentials = true;
  return (
    <>
      <Pages />
    </>
  );
}
