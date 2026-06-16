import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>About StaySense AI</h1>

        <p>
          StaySense AI helps homestay owners understand guest feedback using AI.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;