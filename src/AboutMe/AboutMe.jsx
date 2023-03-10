import { Link } from "react-router-dom"
import ContactMe from "../Components/ContactMe/ContactMe"
import "./AboutMe.css"
export default function AboutMe() {
  const currentDate = new Date().toLocaleDateString()
  console.log(currentDate);
  return (
    <>
      <div className="aboutMeBox">
        <div className="information">
          <address>
            Name: Brennan Perez <br />
            Location: Orange County, CA <br />
            Occupation: Software Engineer <br />
          </address>
        </div>
        <div className="date">
          <p>{currentDate}</p>
        </div>
        <div className="aboutMeInfo">
          <h1>Brennan Perez</h1>
          <br />
          <p>Thank you for visitng my portfolio! A little bit about me:
            <br />
            <br />
            I'm an experienced professional with a background in consumer banking and team leadership with Disney. I've got a real passion for creating systems that work smoothly and efficiently, and throughout my career, I've been fortunate enough to achieve some really great results. Here are just a few of my accomplishments:
          </p>
          <br />
          <ul>
            <li>Created a Quality Assurance program that brought increased compliance, improved practices, and alignment across all branches.</li>
            <li>Identified security gaps and rewrote procedures to improve security practices.</li>
            <li>Authored policies and procedures that continue to guide an entire organization.</li>
            <li>Managed and conducted audits for 10 branches and their employees.</li>
            <li>Presented research, collaborated, and shared knowledge with leadership teams at all levels.</li>
          </ul>
          <br />
          <p>
          In addition to my experience in banking and team leadership, I've also got a deep knowledge of modern web technologies and experience using popular open-source tools and software. I'm currently seeking opportunities as a skilled software engineer, and I'm always happy to connect and chat about potential opportunities. Thanks for taking the time to read my profile!
          </p>
        </div>
        <ContactMe/>
      </div>
    </>
  )
}