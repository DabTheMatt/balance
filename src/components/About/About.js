import React from "react";

function About() {
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
            We are looking for people who want to get involved in this life
            changing project and who can offer their time, experience and
            expertise.{" "}
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
            aid, heritage conservation and grassroots initiatives.
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

          <p>
            We hope that the development of the application will not only bring
            about a change in our spending habits, social awareness and
            community spirit, but will also help in the development of the
            social startup "INSPIRO UP". In the future “INSPIRO UP” will
            financially support the construction of an independent community
            center in Poland, where INSPIRO has operated for many years. Inspiro
            created a community centre that was a safe haven for people from all
            walks of life focusing on education, self development, socializing,
            culture, art and building a civil society.
          </p>

          <p>
            We dream about INSPIRO being able to exist again and we believe that
            the development of the Balance App and work on this project will
            help us make this dream come true.
          </p>

          <p>
            To make our vision a reality and build a social startup that creates
            applications to change the world, we learned the basics of
            programming, and now we are putting that knowledge into action.
          </p>

          <p>
            Change is difficult but it does not have to be impossible, and we
            hope it will be possible with you.
          </p>

          <p>We invite you to collaborate with us </p>

          <p>INSPIRO UP / Beata Kwiecińska / Maciej Dąbrowski</p>
          <p>
            email:{" "}
            <a
              className="ainvert"
              style={{ fontSize: "1.2em", textDecoration: "none" }}
              href="mailto:biuro@inspiro.org"
            >
              biuro@inspiro.org
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
      </div>
    </div>
  );
}

export default About;
