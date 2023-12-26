import React from "react";
import ProductCard from "./components/ProductCard";
import Data from "./Data.json";
function App() {
  return (
    <div className="App">
      {Data.map((item) => (
        <ProductCard
          productImage={item.img}
          title={item.cardTitle}
          brandName={item.shoes}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default App;
