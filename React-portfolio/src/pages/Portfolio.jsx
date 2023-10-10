import weatherApp from '../images/weather app.png'
import CommunityFinder from '../images/community finder.png'
import workDayScheduler from '../images/work day scheduler.png'
import eventPlaner from '../images/project blog.png'
import '../styles/Portfolio.css'

export default function Portfolio() {
  
    return (
        <section id="portfolio">
            <h3>Projects </h3>
            <div class="projects">
                <section class="card" id="firstCard">
                    <h4>WeatherApp </h4>
                    <a href="https://gninkan94.github.io/Weather-Broadcast-App/" target="_blank"><img src={weatherApp} alt="weatherApp" /></a>
                </section>
                <section class="card">
                    <h4>Event planer Blog</h4>
                    <a href="https://chat-events-project2-e877e2935857.herokuapp.com/" target="_blank"><img src={eventPlaner} alt="eventPlaner" /></a>
                </section>
                <section class="card">
                    <h4>Work day Scheduler </h4>
                    <a href="https://gninkan94.github.io/work-day-scheduler/" target="_blank"><img src={workDayScheduler} alt='workDayScheduler'/></a>
                </section>
                <section class="card">
                    <h4>My Community Finder </h4>
                    <a href="https://julianjaguilar.github.io/Project-1/" target="_blank"><img src={CommunityFinder} alt='CommunityFinder'/></a>
                </section>
                
                
            </div>
        </section>
    );
}