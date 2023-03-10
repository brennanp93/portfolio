import { Link } from "react-router-dom"
import "./Header.css"
export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/projects">
            <h5 id="test">Projects</h5>
          </Link>
          <Link to="/skills">
            <h5>Skills</h5>
          </Link>
          <Link to="/contact">
            <h5>Contact</h5>
          </Link>
          <Link to="/">
            <h5>Home</h5>
          </Link>
        </nav>
        {/* <h5>File</h5>
        <h5>Edit</h5>
        <h5>View</h5>
        <h5>special</h5> */}
      </header>
    </>
  )
}
