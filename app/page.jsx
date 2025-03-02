import AboutUs from "@/components/AboutUs";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularProducts from "@/components/PopularProducts";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularProducts />
      <AboutUs />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </>
  );
}
