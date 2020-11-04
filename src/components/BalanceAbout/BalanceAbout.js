import React, { Component } from "react";
import {
    HashRouter as Router,
    Link,
    NavLink,
    Route,
    Switch,
  } from "react-router-dom";

export class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="allWhite">
        <div className=" whiteBackground">
        <div className="whiteBackground">
            
              <div className="whiteBackground " style={{textAlign: "center", fontSize: "2em", marginTop: "2em" }}>
              <h1 className="aboutTitle">Welcome to the
              
              Balance Project</h1> 
              </div>
            
          </div>

          <div
            className=" balanceAboutParagraph whiteBackground" 
          >
            <p className="balanceJustify">
              the project to create an application that will change the world.
              The idea for Balance was born out of the search for an answer to
              the question of how much are our everyday decisions worth? How
              much are our purchases worth? How much is a new chair, a pair of
              trousers, a video game worth?{" "}
            </p>

            <p className="balanceJustify">
              {" "}
              Balance was created during conversations about consumerism, about
              respect for the environment, and about increasing our awareness as
              consumers.
            </p>

            <p className="balanceJustify">
              {" "}
              The Balance App aims not only to change the world globally, but
              also to change the lives of our immediate community by raising
              awareness of global issues, challenging our consumerism and
              informing our decisions.{" "}
            </p>

            <p className="balanceJustify">
              {" "}
              We are looking for people who want to get involved in this life
              changing project and who can offer their time, experience and
              expertise.{" "}
            </p>
            <p className="balanceJustify">
              We are currently looking for help to develop the application from
              the following people: <strong>developers, researchers, sociologists, NGO
              employees, user interface specialists.</strong>
            </p>

            <p className="balanceJustify">
              (more information at our GitHub repozitory page{" "}
              <a
                
                style={{ fontSize: "1.2em" }}
                target="blank"
                href="https://github.com/DabTheMatt/balance"
              >
                here
              </a>{" "}
              - will open in a new tab)
            </p>

            <p className="balanceJustify">
              Balance is a simple application that compares the value of an item
              with the value of supporting organisations dealing with
              humanitarian aid, human rights problems, heritage conservation and
              grassroots initiatives.
            </p>

            <p className="balanceJustify">
              Balance gives the consumer the opportunity to learn about
              organizations and programs that help others and care for the
              natural environment.
            </p>

            <p className="balanceJustify">
              The Balance App project is a Non Profit project, however we are
              looking for patrons of change who might be willing to donate funds
              for the development of the app.
            </p>

            <p className="balanceJustify">
              We hope that the development of the application will not only
              bring about a change in our spending habits, social awareness and
              community spirit, but will also help in the development of the
              social startup "INSPIRO UP". In the future “INSPIRO UP” will
              financially support the construction of an independent community
              center in Poland, where INSPIRO has operated for many years.
              Inspiro created a community centre that was a safe haven for
              people from all walks of life focusing on education, self
              development, socializing, culture, art and building a civil
              society.
            </p>

            <p className="balanceJustify">
              We dream about INSPIRO being able to exist again and we believe
              that the development of the Balance App and work on this project
              will help us make this dream come true.
            </p>

            <p className="balanceJustify">
              To make our vision a reality and build a social startup that
              creates applications to change the world, we learned the basics of
              programming, and now we are putting that knowledge into action.
            </p>

            <p className="balanceJustify">
              Change is difficult but it does not have to be impossible, and we
              hope it will be possible with you.
            </p>

            <p className="balanceJustify">
              We invite you to collaborate with us{" "}
            </p>

            <p className="balanceJustify">
              
            </p>
            <p className="balanceJustify">
              email:{" "}
              <a
                className="ainvert"
                style={{ fontSize: "1.0em", textDecoration: "none" }}
                href="mailto:biuro@inspiro.org"
              >
                biuro@inspiro.org
              </a>
            </p>
            <Link className="balanceButtonT " style={{fontSize: "2em"}} to="/Balance">
                <span className={this.state.isEnterClassName}>{`<<`}</span> home
              </Link>
              <p className="balanceVersion" style={{color: "black", fontSize: "0.5em"}}>v0.4-alpha-lightning</p>

          </div>
          <br></br>
              <br></br>
              
          <div>
              
            </div>
            <div className="" id="">
              
            </div>
        </div>
      </div>
    );
  }
}

export default About;
