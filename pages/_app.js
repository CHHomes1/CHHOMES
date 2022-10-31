import "../styles/globals.css";
import CTA from "../components/Home/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import Navbar from "../components/Navbar/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <div className="w-[100vw] overflow-x-hidden aa">
      <CTA />
      {/* <Navbar /> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
