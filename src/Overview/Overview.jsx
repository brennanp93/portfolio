import { Link } from "react-router-dom"
import "./Overview.css"
export default function Overview() {
  return(
    <>
      <div className="overview-box">
        <div className="narrow-box"> Brennan Perez</div>
        <Link to="/about">
          <div className="file">
            <img src="/file.png" alt="" />
            <h4>About Brennan Perez</h4>
          </div>
        </Link>
        <Link to="/skills">
          <div className="file">
            <img src="/file.png" alt="" />
            <h4>Skills</h4>
          </div>
        </Link>
        <Link to="/projects">
          <div className="file">
            <img src="/folder.png" alt="" />
            <h4>Projects</h4>
          </div>
        </Link>
        <a href="https://drive.google.com/file/d/1k5ugrGK2hKcaB5ouXhnhiNJMT_E3nBdF/view?usp=share_link" target="_blank">
          <div className="file">
            <img src="/file.png" alt="" />
            <h4>Resume</h4>
          </div>
        </a>
      </div>
    </>
  )
}