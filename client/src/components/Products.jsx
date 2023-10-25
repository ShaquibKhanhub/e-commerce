//import popularProducts from data.js;
import { popularProducts } from "../data";
//import styled-components;
import styled from "styled-components";
import SingleProductPage from "./SingleProductPage";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  //for categories
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  //for filter
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((ele) =>
          Object.entries(filters).every(([key, value]) =>
            ele[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  //sorting
  useEffect(() => {
    if ((sort = "newest")) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => (
            <SingleProductPage key={item._id} {...item} />
          ))
        : products.slice(0,8).map((item) => (
            <SingleProductPage key={item._id} {...item} />
          ))}
    </Container>
  );
};

export default Products;
