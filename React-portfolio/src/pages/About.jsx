import profilePicture from '../images/11zon_cropped (1).png'
import "../styles/About.css";

export default function About() {
  return (
    <about id="about">
      <div>
        <h2>Hello! I'm Ibrahima Diallo </h2>
        <p>
          I decided to change my career after working
          many years in the Medical field as a Medical laboratory Technologist.
          I joined the OSU Coding Bootcamp to accomplish a new career path,
          which I dream of since I was a little kid. I love building things
          using computers. I am ambitious and driven. I thrive on challenges and
          constantly set goals for myself, so I have something to strive toward.
          Leraning knew stuf make me happy! I speak french and I hope after this
          Bootcamp I will able to speak to computers by building a great social
          Media App and conect the world. let's Connect!!
        </p>
      </div>
      <img src={profilePicture} alt="diallo" />
    </about>
  );
}