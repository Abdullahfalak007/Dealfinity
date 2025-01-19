import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} has been added to the cart!`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-solid rounded-full border-t-transparent border-blue-500"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          // <div
          //   key={product.id}
          //   className="border p-4 rounded-lg shadow text-center"
          // >
          //   <Link to={`/product/${product.id}`}>
          //     <img
          //       src={product.image}
          //       alt={product.title}
          //       className="h-32 object-contain mb-2 mx-auto"
          //     />
          //     <h2 className="text-lg font-semibold">{product.title}</h2>
          //     <p className="text-gray-700">${product.price}</p>
          //   </Link>
          //   <button
          //     onClick={() => handleAddToCart(product)}
          //     className="mt-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          //   >
          //     Add to Cart
          //   </button>
          // </div>
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow text-center flex flex-col justify-between"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="h-32 object-contain mb-2 mx-auto"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-700">${product.price}</p>
            </Link>
            {/* <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full w-full"
            > */}
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full w-full hover:bg-gradient-to-l hover:from-blue-600 hover:to-indigo-700 transition-all"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
