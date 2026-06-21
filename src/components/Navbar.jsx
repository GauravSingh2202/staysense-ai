import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        flexWrap: "wrap",
        background: darkMode ? "#2563eb" : "#93c5fd",
        color: darkMode ? "white" : "black",
      }}
    >
      <h2>StaySense AI</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/"
          style={{ color: darkMode ? "white" : "black" }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{ color: darkMode ? "white" : "black" }}
        >
          About
        </Link>

        <Link
          to="/dashboard"
          style={{ color: darkMode ? "white" : "black" }}
        >
          Dashboard
        </Link>

        <Link
          to="/login"
          style={{ color: darkMode ? "white" : "black" }}
        >
          Login
        </Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;