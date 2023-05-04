import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/2342400/pexels-photo-2342400.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Welcome To IDEA"
        buttonText="Explore Events"
        url="/"
        btnClass="show"
      />
      <Footer />
    </>
  );
}

export default Home;
