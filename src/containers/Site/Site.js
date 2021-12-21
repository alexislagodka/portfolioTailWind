import React, { Component } from 'react';
import PresentationCard from '../../components/PresentationCard/PresentationCard';
import CompetencesCard from '../../components/CompetencesCard/CompetencesCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import weatherAppImg from '../../assets/images/weather-app.png';
import windbnbImg from '../../assets/images/windbnb.png';

export default class Site extends Component {
    render() {
        return (
            <div className="w-full h-full p-6 grid gap-6">
                <PresentationCard />
                <CompetencesCard />
                <div className="md:flex">
                    <ProjectCard 
                    title="Weather-App"
                    img={weatherAppImg} 
                    demoUrl="https://wthrapp.netlify.app/" 
                    gitUrl="https://github.com/alexislagodka/weatherapp" 
                    tags={["#react", "#css", "#responsive","#api"]}
                    >
                    <p>
                        Application météo basé sur l'API metaweather.
                    </p>
                    </ProjectCard>
                    <ProjectCard 
                    title="WindBnB"
                    img={windbnbImg} 
                    demoUrl="https://wndbnbchllng.netlify.app/" 
                    gitUrl="https://github.com/alexislagodka/windbnbChallenge" 
                    tags={["#react", "#css", "#responsive"]}
                    >
                    <p>
                        Page de logements façon airbnb.
                    </p>
                    </ProjectCard>
                </div>
            </div>
        )
    }
}
