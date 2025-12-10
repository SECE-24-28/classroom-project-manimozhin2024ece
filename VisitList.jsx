import React from "react";

export default function VisitList({ visited, onClearVisited }) {
  return (
    <div>
      <h2>Visited Items</h2>

      {visited.length === 0 ? (
        <p>No visited items yet.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {visited.map((v, idx) => (
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
                  src={v.image} 
                  alt={v.name} 
                  style={{ width: 70, height: 70, borderRadius: 6 }}
                />
                <div>
                  {v.name} — ₹{v.price}
                </div>
              </li>
            ))}
          </ul>

          <button onClick={onClearVisited}>Clear visited</button>
        </>
      )}
    </div>
  );
}
