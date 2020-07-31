import React, {useEffect, useRef} from "react";
import "./App.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import {Jumbotron} from 'react-bootstrap';
import men from "./images/men.jpg";
import ment from "./images/ment.png";

function App() {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8});
  
  useEffect(() => {
    // Images Vars
    const image1 = images.firstElementChild; // or children[0]
    const image2 = images.lastElementChild;
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];

    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    //Images Animation
    tl.from(image1, 1.2, {y: 1280, ease: Power3.easeOut},'Start')
    .from(image1.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(image2, 1.4, {y: 1280, ease: Power3.easeOut}, .2)
    .from(image2.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)

  }, [tl])



  return (
    <Jumbotron fluid>
      <div className="row">
        <div className="col-md">
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">To be healthy as a</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">whole,your mental health</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">plays a vital role.</div>
                </div>
              </h1>
              <p>
              Mental health is the level of psychological well-being or an absence of mental illness. It is the state of someone who is "functioning at a satisfactory level of emotional and behavioral adjustment".[1] From the perspectives of positive psychology or of holism, mental health may include an individual's ability to enjoy life and to create a balance between life activities and efforts to achieve psychological resilience.[2] According to the World Health Organization (WHO), mental health includes "subjective well-being, perceived self-efficacy, autonomy, competence, inter-generational dependence, and self-actualization of one's intellectual and emotional potential, among others".[3] The WHO further states that the well-being of an individual is encompassed in the realization of their abilities, coping with normal stresses of life, productive work, and contribution to their community.
              </p>
          
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => images = el}  className="hero-images-inner">
              <div className="hero-image men">
                <img src={men} alt="men" />
              </div>
              <div className="hero-image ment">
                <img src={ment} alt="ment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </Jumbotron>
  );
}

export default App;
