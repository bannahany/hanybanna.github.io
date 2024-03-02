import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link, animateScroll as scroll } from 'react-scroll';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Development", "Web Applications", "Mobile Applications" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
  {({ isVisible }) =>
    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
      <span className="tagline">Welcome to my Page</span>
      <h1>{`Hi! I'm Hany`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1><br/>
      <p>🚀 Welcome to Hany's Digital Realm 🌐<br/>
Embark on a journey where ideas seamlessly transform into digital marvels! 
I am Hany Banna, a seasoned Web Application, Mobile Application, 
and Web Developer dedicated to crafting extraordinary online experiences.</p>
<p>🌟 Why Collaborate with Me?<br/>
At the heart of my mission is a passion for bringing your vision to life through cutting-edge development. 
With a proven track record in HTML, CSS, JavaScript and React.js, MVC ASP.NET Core, and many more... 
I specialize in creating robust, user-friendly applications that transcend expectations.</p>
<p>🌐 Client-Centric Approach<br/>

Your satisfaction is paramount. I am dedicated to understanding your needs intimately,
 ensuring that every line of code and pixel serves a purpose aligned with your business objectives. 
 Let's embark on a collaborative journey towards success.<br/><br/>
Ready to elevate your digital presence? Explore my portfolio to witness the synergy of innovation and expertise. 
I invite you to reach out, let's discuss how we can turn your ideas into reality.<br/><br/>

Let's create the future together!</p>
      <button className="vvd" onClick={() => scroll.scrollTo("connect")}>
  <Link to="connect" spy={true} smooth={true} duration={500} offset={-100}>
    Let’s Connect <ArrowRightCircle size={25} />
  </Link>
</button>

    </div>}
</TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}