import About from "../../components/About/About";
import BasicFilter from "../../components/BasicFilter/BasicFilter";
import FlatRent from "../../components/FlatRent/FlatRent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import SearchFlat from "../../components/SearchFlat/SearchFlat";

function MainPage() {
  return (
    <>
      <Header />
      <BasicFilter />
      <Products />
      <FlatRent />
      <SearchFlat />
      <About />
      <Footer />
    </>
  );
}

export default MainPage;
