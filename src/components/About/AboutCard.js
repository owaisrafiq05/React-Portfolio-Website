import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Owais Rafiq </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            I am currently making <span className="purple">Server Application</span> from Home
            <br />
            I am currently studying <span className="purple">BSCS</span> from <span className="purple">FAST NUCES</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Open World PC Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn New Technologies and Tech Stack
            </li>
            <li className="about-activity">
              <ImPointRight /> Improve Problem Solving Skill by using <span className="purple">LeetCode</span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work hard until your bank acc. looks like a phone number"{" "}
          </p>
          <footer className="blockquote-footer">Owais Rafiq</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
