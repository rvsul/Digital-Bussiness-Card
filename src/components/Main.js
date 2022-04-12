import { FaEnvelope } from "react-icons/fa";
function Main() {
  return (
    <div className="Main">
      <h1 className="header1">Rasul Agasiyev</h1>
      <h2 className="header2">Front End Developer</h2>
      <p className="para">Rasul's Website</p>
      <div className="buttons">
        <button className="but1">
          <FaEnvelope className="envelope" />
          Email
        </button>
        <button className="but2">
          <img></img>LinkedIN
        </button>
      </div>
      <h3>About</h3>
      <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
        justo eget consectetur fermentum. Aliquam erat volut. Nam erat dui,
        bibendum in ullamcorper vel, ultricies sed velit.
      </p>
      <h3>Interests</h3>
      <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
        justo eget consectetur fermentum. Aliquam erat volut. Nam erat dui,
        bibendum in ullamcorper vel, ultricies sed velit.
      </p>
    </div>
  );
}

export default Main;
