import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import background from "../assets/squeezy-background-opt.jpg";
import Nav from '../components/Nav/index.js';
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container">
      <Nav/>
      <div className="background" style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: '',
        height: '100vh'
      }}>
      </div>
      <div className="transition"></div>
      <div id="scrollspyHeading1" className="container-products">
        <CategoryMenu />
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
