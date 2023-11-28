import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-scroll";

function MyNavbar({aboutRef}) {
  // const about = useRef(null)

 
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
  const menuIconStyle = {
    // backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hbGlnbi1yaWdodCI+PGxpbmUgeDE9IjIxIiB4Mj0iMyIgeTE9IjYiIHkyPSI2Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iOSIgeTE9IjEyIiB5Mj0iMTIiLz48bGluZSB4MT0iMjEiIHgyPSI3IiB5MT0iMTgiIHkyPSIxOCIvPjwvc3ZnPg==')`,
    filter: `brightness(${scrolled ? 0 : 1})` // Adjust the brightness when scrolled
  };

 
  return (
    <Navbar expand="lg" className={navbarClass}>
      <Container>
        <Navbar.Brand href="#home">
          <h2 className={`fs-1 text-uppercase fw-bold ${brandTextColor}`}>
            FilterFilm
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={menuIconStyle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-capitalize text-light nav-elements ps-3 ps-lg-0">
           
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
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
