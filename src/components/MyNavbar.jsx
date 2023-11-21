import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-scroll";

function MyNavbar({aboutRef}) {
  // const about = useRef(null)

  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:"smooth"
    })
  }
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `bg-${
    scrolled ? "white" : "transparent"
  } position-fixed z-3 w-100 py-3`;
  const brandTextColor = scrolled ? "text-dark" : "text-light";

 
  return (
    <Navbar expand="lg" className={navbarClass}>
      <Container>
        <Navbar.Brand href="#home">
          <h2 className={`fs-1 text-uppercase fw-bold ${brandTextColor}`}>
            FilterFilm
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-capitalize text-light nav-elements">
            {/* <Nav.Link href="#">Home</Nav.Link> */}
            {/* <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link> */}
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="about" onClick={()=>scrollToSection(aboutRef)}>about</Nav.Link>
            <Nav.Link href="#services">services</Nav.Link>
            <Nav.Link href="#portfolio">portfolio</Nav.Link>
            <Nav.Link href="#testimonials">testimonials</Nav.Link>
            <Nav.Link href="#contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
