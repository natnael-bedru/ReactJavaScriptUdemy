import { useState, useEffect, useCallback } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");

  const fetchProducts = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  }, [url]);

  useEffect(() => {
    fetchProducts();
    console.log("-");
  }, [fetchProducts]);
  /*
  ``
  const fetchProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
    console.log("-");
  }, [fetchProducts]);
  ``

  Why we can't set dependency as function, list, arrays, objects

  Two functions, list, arrays, obects will always be different 
  because their memory reference is different at the time of comparison 
  When re-evaluation occurs their memory address will be different hence the programme will be stuck in infinite loop
  */

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:8000/products")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
        >
          In Stock Only
        </button>
      </div>

      {products.map((product) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>${product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>
              {product.in_stock ? "In Stock" : "Unavailable"}{" "}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
};
