import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import syslab from "../../Assets/Projects/syslab.png";
import redstore from "../../Assets/Projects/redstore.png";
import textCraft from "../../Assets/Projects/textCraft.png";
import devDay from "../../Assets/Projects/devDay.png";
import newsApp from "../../Assets/Projects/newsApp.png";
import blogApp from "../../Assets/Projects/blogApp.png";
import fitsRight from "../../Assets/Projects/fitsRight.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={syslab}
              isBlog={false}
              title="Syslab.ai Main Website"
              description="During my internship at Syslab.ai, I designed and developed their main website using HTML, CSS, JavaScript, and CSS animation libraries. The site features a modern, responsive design that ensures optimal viewing on all devices. I implemented interactive elements and engaging animations to create a dynamic user experience. The website is optimized for fast load times and smooth performance, maintaining visual consistency with Syslab.ai’s branding. This project showcases my ability to merge creative design with technical expertise, delivering a frontend that enhances Syslab.ai's online presence."
              // ghLink=""
              // demoLink="https://chatify-49.web.app/"
              webLink="https://owaisrafiqsyslab.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redstore} // replace with the path to your Passporttastic app image
              isBlog={false}
              title="Red Store Ecommerce Website"
              description="Passporttastic is a unique mobile application that allows users to create digital passports. After a successful sign-up with authentic information, users can select the country they wish to travel to and create a corresponding digital passport. The app offers features such as viewing the passport profile, purchasing passport stamps for travel, and adding pages to the passport. Users can also customize their passport with stamps for the countries they plan to travel to. The primary purpose of Passporttastic is to facilitate the creation and management of digital passports."
            ghLink="https://github.com/owaisrafiq05/RedStore-Ecommerce-Web" // replace with the link to your GitHub repository
            webLink="https://redstoresecommerce.netlify.app/" // replace with the link to your demo if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devDay} // replace with the path to your Yulo app image
              isBlog={false}
              title="ACM Dev Day Website"
              description="Yulo is a clone of TikTok that I contributed to. I worked on solving a number of issues and added new features, making them well-optimized. The main problem I solved was an issue with video uploads not working properly. This issue has been resolved and the app is now functioning correctly. The app will soon be uploaded to the Google Play Store and the App Store."
               ghLink="https://github.com/hatifmujahid/Dev-Day-2024-website" // replace with the link to your GitHub repository
              webLink="https://www.acmdevday.com/" // replace with the link to your app on the Play Store when available
            // appStoreLink="https://apps.apple.com/app/idYourAppId" // replace with the link to your app on the App Store when available
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textCraft} // replace with the path to your Deliver Client app image
              isBlog={false}
              title="Text Craft Pro - Text Editor"
              description="Deliver Client is an app that allows users to book rides for the delivery of parcels and couriers. I made significant contributions to this app, including adding new features and solving issues. The app allows users to book a ride, and the available delivery partner can accept the delivery offer and start the ride. Once the parcel is delivered, users can leave reviews and use many other features."
              ghLink="https://github.com/owaisrafiq05/TextCraft-Pro" 
              webLink="https://textcraft-pro.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsApp} 
              isBlog={false}
              title="React News App using Free News API"
              description="Deliver Partner is the companion app to Deliver Client. It allows delivery partners to accept delivery offers and start rides. I also made significant contributions to this app, including adding new features and solving issues. Once the delivery partner has delivered the parcel, they can mark the delivery as completed."
              ghLink="https://github.com/owaisrafiq05/React-News-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogApp} 
              isBlog={false}
              title="Blog Application using Firebase DB"
              description="Vazra is a clone of WhatsApp that I contributed to. I worked on implementing Firebase Notifications, push notifications for calls and messages, and user blocking functionality. I also worked on reporting messages and overall performance optimization."
              ghLink=" https://github.com/owaisrafiq05/Syslab-Blogs" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
