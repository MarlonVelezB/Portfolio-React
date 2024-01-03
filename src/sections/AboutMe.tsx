import './styles/AboutMeStyle.css';
import imgAboutMe from '../assets/img-me.png';
import reactIcon from '../assets/svg/react-icon.svg';
import angularIcon from '../assets/svg/angular-icon.svg';
import gitIcon from '../assets/svg/git-icon.svg';
import htmlIcon from '../assets/svg/html-icon.svg';
import cssIcon from '../assets/svg/css-icon.svg';
import jsIcon from '../assets/svg/javascript-icon.svg';
import tsIcon from '../assets/svg/typescript-icon.svg';
import springIcon from '../assets/svg/spring-icon.svg';
import javaIcon from '../assets/svg/java-icon.svg';
import postgresIcon from '../assets/svg/postgresql-icon.svg';
import mysqlIcon from '../assets/svg/mysql-icon.svg';
//Soft Skills
import adaptationIcon from '../assets/svg/adaptation-icon.svg';
import communicationIcon from '../assets/svg/communication-icon.svg';
import leadershipIcon from '../assets/svg/leadership-icon.svg';
import openMindIcon from '../assets/svg/open-mind-icon.svg';
import teamWorkIcon from '../assets/svg/team-work-icon.svg';
import personalDevolpIcon from '../assets/svg/personal-develoment-icon.svg';
import onTimeIcon from '../assets/svg/worker-on-time-icon.svg';
import problemSolvingIcon from '../assets/svg/problem-solving-icon.svg';

type Skills = {
    name: string;
    icon: string;
}
export function AboutMe() {
    const technicalSkills: Skills[] = [
        {
            name: 'react',
            icon: reactIcon,
        },
        {
            name: 'angular',
            icon: angularIcon,
        },
        {
            name: 'html',
            icon: htmlIcon,
        },
        {
            name: 'css',
            icon: cssIcon,
        },
        {
            name: 'js',
            icon: jsIcon,
        },
        {
            name: 'ts',
            icon: tsIcon,
        },
        {
            name: 'springboot',
            icon: springIcon,
        },
        {
            name: 'java',
            icon: javaIcon,
        },
        {
            name: 'postgresql',
            icon: postgresIcon,
        },
        {
            name: 'mysql',
            icon: mysqlIcon,
        },
        {
            name: 'git',
            icon: gitIcon,
        },
    ];

    const softSkills: Skills[] = [
        {
            name: 'Adaptability',
            icon: adaptationIcon
        },
        {
            name: 'Communication',
            icon: communicationIcon
        },
        {
            name: 'Problem Solving',
            icon: problemSolvingIcon
        },
        {
            name: 'Leadership',
            icon: leadershipIcon
        },
        {
            name: 'Open Mind',
            icon: openMindIcon
        },
        {
            name: 'Teamwork',
            icon: teamWorkIcon
        },
        {
            name: 'Personal Growth',
            icon: personalDevolpIcon
        },
        {
            name: 'Punctuality',
            icon: onTimeIcon
        },
    ]
    
    return (
        <div className="about-me-container">
            <div className="about-me-content">
                <img src={imgAboutMe} alt="about-me-img" />
                <div className="info">
                    <h2>Who is Marlon Vélez?</h2>
                    <p>
                        Hi! I am a passionate developer with a strong academic background and exceptional skills. 
                        At the age of 23, I earned my degree as a Software Development Technologist, marking the 
                        beginning of my journey in the world of technology. My educational approach not only 
                        provided me with solid technical knowledge, but also a problem-solving and 
                        innovation-oriented mindset. I am constantly excited to learn and apply new concepts, 
                        which drives me to stay current with the latest trends and technologies. 
                        My commitment to excellence is reflected in my ability to anticipate and address challenges. 
                        I believe that adaptability and the ability to learn quickly are essential in the 
                        ever-evolving world of technology.
                    </p>
                    <div className="skills-container">
                        <h3>Technical Skills</h3>
                        <div className="technologies">
                            {technicalSkills.map((technical) => (
                                <img src={technical.icon} alt={technical.name} />
                            ))}
                        </div>
                        <br/>
                        <h3>Soft Skills</h3>
                        <div className="softskills-container">
                            {softSkills.map((softSkill) => (
                                <div className='softskills'>
                                    <img src={softSkill.icon} alt={softSkill.name} />
                                    <span className='tooltip'>{softSkill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}