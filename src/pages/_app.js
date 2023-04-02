import NavBar from "@/components/NavBar";
import "tailwindcss/tailwind.css";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import SideBar from "@/components/sidebar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <SideBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
