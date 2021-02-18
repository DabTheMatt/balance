import React, { Component } from "react";
import HelpForm from "../HelpForm/HelpForm"

export class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
      
      return (
    <div>
    <div className="container ">
      <div className="aboutHeaderContainer">
        
        
        <h2 >
         <div className="aboutHeader">Welcome to the </div> 
          
          <div className="aboutHeader aboutTitle">Balance Project</div>
        </h2>
      </div>

      <div className="aboutParagraph">
          <p>
            the project to create an application that will change the world. The
            idea for Balance was born out of the search for an answer to the
            question of how much are our everyday decisions worth? How much are
            our purchases worth? How much is a new chair, a pair of trousers, a
            video game worth?{" "}
          </p>

          <p>
            Balance was created during conversations about consumerism, about
            respect for the environment, and about increasing our awareness as
            consumers.
          </p>

          <p>
            The Balance App aims not only to change the world globally, but also
            to change the lives of our immediate community by raising awareness
            of global issues, challenging our consumerism and informing our
            decisions.{" "}
          </p>

          <p>
            (more information at our GitHub repozitory page{" "}
            <a
              className="ainvert"
              style={{ fontSize: "1.4em" }}
              target="blank"
              href="https://github.com/DabTheMatt/balance"
            >
              here
            </a>{" "}
            - will open in a new tab)
          </p>

          <p>
            Balance is a simple application that compares the value of an item
            with the value of supporting organisations dealing with humanitarian
            aid, human rights problems, heritage conservation and grassroots initiatives.
          </p>

          <p>
            Balance gives the consumer the opportunity to learn about
            organizations and programs that help others and care for the natural
            environment.
          </p>

          <p>
            The Balance App project is a Non Profit project, however we are
            looking for patrons of change who might be willing to donate funds
            for the development of the app.
          </p>

          

          <p>idea, programming, design: Maciej Dąbrowski</p>
          <p>database of values: Beata Kwiecińska</p>
          <p>graphics: Edyta Stajniak</p>
          <p>
            email:{" "}
            <a
              className="ainvert"
              style={{ fontSize: "1.2em", textDecoration: "none" }}
              href="mailto:dabrowskimaciej@protonmail.com"
            >
              dabrowskimaciej@protonmail.com
            </a>
          </p>
        </div>
        

        <div style={{ marginBottom: "4em" }}>
          <a
            className="checkinvert"
            style={{ marginTop: "6em", fontSize: "1.5em" }}
            href="../balance/#/"
          >
            Home
          </a>
        </div>
        <p>v0.2-alpha</p>
      </div>
      
    </div>
  );
}
}

export default About;
