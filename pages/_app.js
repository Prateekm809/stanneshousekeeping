import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'photoswipe/dist/photoswipe.css'
import '../styles/sass/style.scss'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>St. Anne&#039;s Housekeeping | Professional Housekeepers in London</title>
        <link rel="icon" href="https://stanneshousekeeping.com/wp-content/uploads/2018/01/stannes-favicon-pink.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="https://stanneshousekeeping.com/wp-content/uploads/2018/01/stannes-favicon-pink.png" />
        <meta name="msapplication-TileImage" content="https://stanneshousekeeping.com/wp-content/uploads/2018/01/stannes-favicon-pink.png" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </div>

  )
}

export default MyApp
