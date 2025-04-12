import React from "react";
import Layout from "../layouts/Layout";

export function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('https://static8.depositphotos.com/1010546/909/i/450/depositphotos_9092923-stock-photo-woman-hands-in-water.jpg')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1
        style={{
          fontSize: '4rem', color: 'rgba(138, 72, 72, 0.97)',fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
      >
        Welcome to Home
      </h1>
      <p
        style={{
          fontSize: '1.5rem', 
          color: 'rgba(138, 123, 72, 0.97)', 
          fontWeight: '400',
         
        }}
      >
        Explore the content here.
      </p>
    </div>
  );
}
