import profilePicture from "../images/11zon_cropped (1).png";
import "../styles/About.css";

export default function About() {
  return (
    <about id="about">
      <div>
        <h2>Hello! I'm Ibrahima Diallo </h2>
        <p>
         
          "After dedicating several years to a fulfilling career in the medical
          field as a Medical Laboratory Technologist, I made the bold decision
          to embark on a new journey. I enrolled in the OSU Coding Bootcamp, a
          pivotal step toward realizing a lifelong dream. From a young age, I've
          been captivated by the art of crafting with technology, specifically
          using computers as my creative canvas. My ambition is my driving
          force, and I thrive on overcoming challenges. I'm a firm believer in
          setting and pursuing goals, providing a continuous source of
          motivation. Learning new things is not just a passion; it's what truly
          makes me happy. As I traverse this coding adventure, my goal is to
          master the language of computers and connect with them in a way that
          can positively impact the world. Through my journey, I aspire to craft
          a remarkable social media application that bridges gaps and connects
          individuals from all corners of the globe. Let's connect and make this
          digital dream a reality!"
        </p>
      </div>
      <img src={profilePicture} alt="diallo" />
    </about>
  );
}
