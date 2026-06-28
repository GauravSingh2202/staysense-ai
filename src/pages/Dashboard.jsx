import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard({ darkMode, setDarkMode }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div
        style={{
          padding: "40px",
          minHeight: "70vh",
        }}
      >
        <h1
          style={{
            color: darkMode ? "white" : "black",
          }}
        >
          Dashboard
        </h1>

        <p
          style={{
            color: darkMode ? "#d1d5db" : "#374151",
            marginBottom: "30px",
          }}
        >
          Live reviews fetched from backend API.
        </p>

        {reviews.map((review) => (
          <div
            key={review.id}
            style={{
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            <h3>{review.review}</h3>

            <p>
              <strong>Sentiment:</strong> {review.sentiment}
            </p>

            <p>
              <strong>Theme:</strong> {review.theme}
            </p>

            <p>
              <strong>Response:</strong> {review.response}
            </p>
          </div>
        ))}
      </div>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default Dashboard;