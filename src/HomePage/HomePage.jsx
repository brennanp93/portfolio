import { Link } from "react-router-dom"
import "./HomePage.css"
export default function HomePage() {
  return (
    <>

      <div className="main-box">
        <div className="narrow-box"> Home Page</div>
        <Link to="/overview">
          <div className="file">
            <img src="/folder.png" alt="" />
            <h4>Brennan Perez</h4>
          </div>
        </Link>
      </div>
    </>
  )
}