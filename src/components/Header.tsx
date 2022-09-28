import React from 'react';

export function Header() {
  return (
    <div
      style={{
        padding: "1rem",
        marginTop: "30vh",
        fontSize: "8vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ opacity: "0.3" }}>Welcome to</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>Tae Yoon Kim</div>
        <div style={{ opacity: "0.3" }}>'s</div>
      </div>
      <div style={{ opacity: "0.3" }}>Portfolio.</div>
    </div>
  );
}
