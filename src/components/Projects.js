import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>

Project: Online Shopping App (Study Program)

During my academic journey, I actively contributed to the development of an innovative online shopping app, showcasing my dedication to applying theoretical knowledge in practical settings.

Key Contributions:
- Full-Stack Development: Engaged in end-to-end development, from conceptualization to implementation, honing skills in both front-end and back-end technologies.
  
- User Interface Design: Crafted intuitive and visually appealing user interfaces, prioritizing user experience through responsive and user-friendly design principles.

- Collaborative Problem-Solving: Collaborated with a diverse team, participating in brainstorming sessions and contributing solutions to address challenges in real-time.

- Technologies Utilized: Applied [list relevant technologies, languages, and frameworks] to build a robust and scalable platform, gaining hands-on experience in industry-standard tools.

Project Outcomes:
- Enhanced Functionality: Implemented features that elevated the app's functionality, such as [mention specific features], optimizing the user journey.

- Performance Optimization: Worked on performance optimization, ensuring swift loading times and a seamless browsing experience for users.

Learning Highlights:
- Adaptability: Successfully balanced academic demands with project commitments, demonstrating adaptability and time management skills.

- Problem-Solving: Overcame coding challenges and learned to troubleshoot effectively, fostering a proactive problem-solving mindset.

- Team Collaboration: Thrived in a collaborative environment, contributing ideas, and learning from peers, fostering a team-centric approach.

This project not only expanded my technical proficiency but also cultivated a deep appreciation for the collaborative nature of software development. As I embark on my career, I bring a passion for continuous learning and a solid foundation gained from hands-on experiences like this.
</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}