import Navbar from "./Navbar";
import Intro from "./Intro";
import ProductsSection from "./ProductsSection";
import products from "../Products";
import IntroImage from "../Images/intro.jpg";
import IntroImage1 from "../Images/intro1.jpg";
import Footer from "./Footer";

function Home() {
  const topProducts = products.filter((item) => item.status === "top");
  const saleProducts = products.filter((item) => item.status === "sale");

  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <Intro
        Image={IntroImage}
        header="Always Perfect"
        text="Love black outfits how about taking a tour"
        color="black"
      />
      <ProductsSection header="Top Sellings Products" products={topProducts} />
      <Intro
        Image={IntroImage1}
        header="Timeless tailoring"
        text="Love white outfits We got you covered"
        color="white"
      />
=======
      <Intro Image={IntroImage} header="Always Perfect" text="Love black outfits how about taking a tour" />
      <ProductsSection header="Top Sellings Products" products={topProducts} />
      <Intro Image={IntroImage1} header="Timeless tailoring" text="Love white outfits We got you covered" />
>>>>>>> 8803ec88858910c3960e4723c31c75dade88755b
      <ProductsSection header="Products On Sales" products={saleProducts} />
      <Footer />
    </div>
  );
}

export default Home;
