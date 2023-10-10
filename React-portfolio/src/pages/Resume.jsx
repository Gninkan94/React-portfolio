import Resume from '../images/resume.png'
import '../styles/Resume.css'

export default function Contact() {
  
    return (
        <resume id="resume">
            <h3>Resume</h3>
            <figure><img src={Resume} alt="resume" /></figure>
        </resume>
    );
}