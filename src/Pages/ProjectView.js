import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './css/ProjectView.css';
import AwesomeSlider from 'react-awesome-slider';
import './css/ProjectView.css';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import {useSpring, animated} from 'react-spring';

export default function ProjectView(props) {
    let { id } = useParams();
    const projectNames = ["E-learning platform", "Online currency exchange"];
    const projectImages = [
        [
            process.env.PUBLIC_URL + '/studyOnline1.png',
            process.env.PUBLIC_URL + '/studyOnline2.png',
            process.env.PUBLIC_URL + '/studyOnline3.png',
            process.env.PUBLIC_URL + '/studyOnline4.png',
            process.env.PUBLIC_URL + '/studyOnline5.png',
            process.env.PUBLIC_URL + '/studyOnline6.png',
            process.env.PUBLIC_URL + '/studyOnline7.png',

        ],
        [
            process.env.PUBLIC_URL + '/kantorOnline1.png',
            process.env.PUBLIC_URL + '/kantorOnline2.png',
            process.env.PUBLIC_URL + '/kantorOnline3.png',
            process.env.PUBLIC_URL + '/kantorOnline4.png',
            process.env.PUBLIC_URL + '/kantorOnline5.png',
            process.env.PUBLIC_URL + '/kantorOnline6.png',
        ]
    ];
    const projectDescription = ["Polish e-learning platform.","Online Bitcoin exchange platform."];
    const projectUrl = ["https://korepetycje.naucz-mnie.pl", ""];
    const projectAbout = 
    [
        `In this project I was responsible for the backend and database. Application allows to conduct online lessons. Users have ability to register as teacher or student. 
         As teacher user are allowed to specify what subject and on what level he wants to teach. 
         Then he can create time period in which he can conduct lessons. Students can search for teachers based on subject and level. 
         Platform provide built-in calendar to keep an eye on future lessons. There is also built-in communicator with audio, video communication and drawing whiteboard.`,

        `My role in this project was to implement backend server and database. I was also involved in designing UI. Application that allows you to exchange 
         Bitcoin online. Contains user management system, currency exchange settings and transactions history. Is integrated with external API enabling 
         partial automation of operations.`,
    ]
    const projectTech = [
        ["C#", ".NET Core", "ASP.NET Core Web API", "ASP.NET Core Identity", "Entity Framework Core", "MSSQL Server", "Redis", "SignalR"],
        ["C#", ".NET Core", "ASP.NET Core Web API", "ASP.NET Core Identity", "Entity Framework Core", "MSSQL Server"],
    ]
    const projectResources = [true, false];
    const githubUrl = ["", ""];
    const animationProps = useSpring({config: {duration: 1500}, opacity: 1, from: {opacity: 0}})

    useEffect(() => {
        document.title = projectNames[id-1] + ' - Łukasz Czerniawski'
    })
    return (
        id < 1 || id > projectNames.length ? <h1 className="title">Error</h1> :
        <animated.div style={animationProps} className="containerProjectView">
            <h1 className="title-main">{projectNames[id-1]}</h1>
            <div className="info">
                <p className="description">{projectDescription[id-1]}</p>
                {projectUrl[id-1].length > 0 ? <a target="_blank" rel="noopener noreferrer" className="button-small" href={projectUrl[id-1]}>Visit website</a> : null}
            </div>
            <AwesomeSlider className="slider" animation="cubeAnimation">
            {projectImages[id-1].map((img, id) => <div key={id} data-src={img}/>)}
            </AwesomeSlider>
            <section className="section">
                <h2 className="title">About this project</h2>
                <hr/>
                <p>{projectAbout[id-1]}</p>
            </section>
            <section className="section">
                <h2 className="title">Technical details</h2>
                <hr/>
                <ul>
                    {projectTech[id-1].map((tech, id) => <li key={id}>{tech}</li>)}
                </ul>
            </section>
            {projectResources[id-1] ? 
                <section className="section">
                    <h2 className="title">Resources</h2>
                    <hr/>
                    <div>
                        <span className="resources-info">This project is available at</span>
                        <a className="box-fill" target="_blank" rel="noopener noreferrer" href={projectUrl[id-1]}>{projectUrl[id-1]}</a>
                    </div>
                    {githubUrl[id-1].length > 0 ? <div> <span className="resources-info">Project source</span> <a className="box-fill" target="_blank" rel="noopener noreferrer" href={githubUrl[id-1]}>GitHub</a></div> : null}
                </section>
                : null
            }
        </animated.div>
    )
}