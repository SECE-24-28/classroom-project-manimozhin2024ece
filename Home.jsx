import React from "react";

export default function Home({ products, onAddToCart, onVisit }) {
  return (
    <div>
      <h2>Home — Products</h2>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {products.map((p) => (
          <div 
            key={p.id} 
            style={{ 
              padding: 12, 
              border: "1px solid #ddd", 
              borderRadius: 6,
              width: 150,
              textAlign: "center"
            }}
          >
            <img 
              src={p.image} 
              alt={p.name} 
              style={{ width: "100%", borderRadius: 6 }}
            />

            <h4>{p.name}</h4>
            <p>₹{p.price}</p>

            <button onClick={() => onAddToCart(p)} style={{ marginRight: 6 }}>
              Add to cart
            </button>

            <button onClick={() => onVisit(p)}>Visit</button>
          </div>
        ))}
      </div>
    </div>
  );
}
