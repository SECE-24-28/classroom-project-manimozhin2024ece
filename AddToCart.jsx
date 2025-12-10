import React from "react";

export default function AddToCart({ cart, onRemoveFromCart, onClearCart }) {
  const total = cart.reduce((s, i) => s + i.price, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((c, idx) => (
              <li 
                key={idx} 
                style={{ 
                  marginBottom: 12, 
                  display: "flex", 
                  alignItems: "center",
                  gap: 10 
                }}
              >
                <img 
                  src={c.image} 
                  alt={c.name} 
                  style={{ width: 70, height: 70, borderRadius: 6 }}
                />

                <div style={{ flex: 1 }}>
                  {c.name} — ₹{c.price}
                </div>

                <button onClick={() => onRemoveFromCart(idx)}>Remove</button>
              </li>
            ))}
          </ul>

          <strong>Total: ₹{total}</strong>
          <br /><br />
          <button onClick={onClearCart}>Clear cart</button>
        </>
      )}
    </div>
  );
}
