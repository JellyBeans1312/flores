import './Nav.css'

export default function Navbar() {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Flores Landscaping
      </a>
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}