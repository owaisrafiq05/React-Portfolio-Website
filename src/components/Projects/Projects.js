import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import redstore from "../../Assets/Projects/redstore.png";
import textCraft from "../../Assets/Projects/textCraft.png";
import devDay from "../../Assets/Projects/devDay.png";
import newsApp from "../../Assets/Projects/newsApp.png";
import blogApp from "../../Assets/Projects/blogApp.png";
import taskForges from "../../Assets/Projects/taskforges.png";
import socialMedia from "../../Assets/Projects/socialMedia.png";

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
              imgPath={taskForges}
              isBlog={false}
              title="TaskForges MERN Web Application"
              description="Introducing TaskForges - a sophisticated Task Management System developed using the MERN stack. It features robust CRUD operations for seamless task management and OTP-based authentication via Node Mailer for enhanced security. The React-powered frontend offers an intuitive user interface, while the Node.js and Express backend ensures reliable performance. MongoDB provides scalable and flexible data storage. TaskForges showcases the full potential of the MERN stack in creating comprehensive and secure web applications."
              ghLink="https://github.com/owaisrafiq05/TaskForge-MERN-App"
              webLink="https://taskforges.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMedia}
              isBlog={false}
              title="Content Management Social Media MERN Web App"
              description="Introducing our Content Management Social Media Web App, developed using the MERN stack. It features two portals: one for Content Creators to manage posts, images, and videos via Multer and Cloudinary, and another for Users to subscribe to creators and access exclusive content. Strict authentication with JSON Web Tokens in cookies ensures security, while the robust database handles post management efficiently. This project showcases the power of the MERN stack in building a secure, scalable, and user-friendly social media platform."
              ghLink="https://github.com/owaisrafiq05/Social-Media-Backend"
              webLink="https://github.com/owaisrafiq05/social-media-MERN-App-Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devDay}
              isBlog={false}
              title="ACM Dev Day Website"
              description="I contributed to the official ACM Dev Day Website, FAST NUCES's flagship event, by designing the frontend using React JS, Tailwind CSS, and Uiverse.io. As part of the web development team, I created key components including the footer, registration page, about page, and parts of the home page. This dynamic project, which spanned a month, was sponsored by multinational companies like Systems Limited, Folio3, E Ocean, and various other IT industries, highlighting its significance and scale. My work ensured a seamless, responsive user experience, showcasing my frontend development skills in a high-stakes environment."
              ghLink="https://github.com/hatifmujahid/Dev-Day-2024-website"
              webLink="https://www.acmdevday.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redstore}
              isBlog={false}
              title="Red Store Ecommerce Website"
              description="The Red Store Ecommerce Web Application is a meticulously crafted frontend project designed to provide a seamless shopping experience. It features multiple pages, including Home, Product Section, Cart, and Login/Sign-Up pages. Built using HTML, CSS, JavaScript, and various CSS frameworks, the application boasts a modern and responsive design. The Home page highlights featured products and promotions, the Product Section offers detailed views of items, the Cart page facilitates easy checkout, and the Login/Sign-Up page ensures secure user authentication. This project showcases my expertise in frontend development, emphasizing user experience and design quality."
              ghLink="https://github.com/owaisrafiq05/RedStore-Ecommerce-Web"
              webLink="https://redstoresecommerce.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textCraft}
              isBlog={false}
              title="Text Craft Pro - Text Editor"
              description="TextCraft Pro is a versatile text editor application designed to empower users with a wide array of powerful and user-friendly features. Whether you're a writer, student, or professional, TextCraft Pro is your go-to tool for refining and optimizing your textual content effortlessly. I developed this dynamic application using React JS and core CSS, leveraging React's core hooks for a seamless user experience. TextCraft Pro offers multiple text editing features, including converting text to uppercase or lowercase, reversing text, copying to clipboard, removing extra spaces, and generating voice aloud through built-in AI. This project demonstrates my proficiency in frontend development and dynamic application design."
              ghLink="https://github.com/owaisrafiq05/TextCraft-Pro"
              webLink="https://textcraft-pro.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsApp}
              isBlog={false}
              title="React News App using Free News API"
              description="React-News-App is a dynamic news reading application I developed using React and a Free News API. Leveraging React Hooks such as useState, useEffect, and useNavigate, I created a seamless user experience with efficient state management and navigation. By handling React Routing, the application avoids reloads, ensuring a smoother experience. I meticulously categorized news into separate sections like Technology, Science, and Politics, and transformed JSON data into visually appealing news cards. This project highlights my skills in React, API integration, and creating user-friendly, dynamic web applications."
              ghLink="https://github.com/owaisrafiq05/React-News-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogApp}
              isBlog={false}
              title="Blog Application using Firebase DB"
              description="During my learning journey, I developed a dynamic full-stack application named 'Blog Application.' This project was built using HTML, CSS, JavaScript, and Firebase as the database. The application supports complete CRUD operations for blogs, with each blog having its own dedicated page accessible via URL parameters. Additionally, it features login and signup functionality, integrating Google Authentication and a private authentication system for other emails through Firebase Database. This project is one of my most successful real-time applications, showcasing my ability to design and implement a comprehensive, user-friendly blogging platform independently."
              ghLink="https://github.com/owaisrafiq05/Syslab-Blogs"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
