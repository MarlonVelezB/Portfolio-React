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
import expoIcon from '../assets/svg/expo-icon.svg';
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

const frontSkills: Skills[] = [
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
        name: 'git',
        icon: gitIcon,
    },
]

const backSkills: Skills[] = [
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

const mobileSkills: Skills[] = [
    {
        name: 'react',
        icon: reactIcon,
    },
    {
        name: 'expo',
        icon: expoIcon,
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
        name: 'git',
        icon: gitIcon,
    },    
]

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

export {softSkills, frontSkills, backSkills, mobileSkills};