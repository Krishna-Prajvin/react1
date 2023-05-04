import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/4818015/pexels-photo-4818015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="About Us"
      />
    </>
  );
}

export default About;
