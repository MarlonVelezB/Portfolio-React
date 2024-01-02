import imgBanner from '../assets/me-header.png'
import 'primeicons/primeicons.css';
import './styles/BannerStyle.css';
import { ButtonCustom } from './ButtonCustom';
type SocialMedia = {
    name: string;
    icon: any;
    link: string;
}
export const Banner = () => {
    const socialMedia: SocialMedia[] = [
        {
            name: 'linkedin',
            icon: 'pi-linkedin',
            link: 'https://www.linkedin.com/in/marlon-v%C3%A9lez-b7a880299/'
        },
        {
            name: 'github',
            icon: 'pi-github',
            link: 'https://github.com/MarlonVelezB'
        }
    ]
    return (
        <div className="container-banner">
            <img className='img-banner' src={imgBanner} alt="me-img-banner" />
            <div className="banner-content">
                <h1>How's it going? I'm Marlon Vélez</h1>
                <h2>Full-stack Developer</h2>
                <p>
                    With experience in developing web and mobile applications, I specialize in utilizing cutting-edge 
                    technologies to create exceptional user experiences. My focus revolves around innovation and 
                    technical excellence, ensuring solutions that not only meet current standards but also anticipate 
                    future trends.
                </p>
                <div className="social-container">
                    {socialMedia.map((social) => (
                        <a href={social.link} target='_blank'>
                            <i key={social.name} className={`pi ${social.icon} ${social.name} icon`}></i>
                        </a>
                    ))}
                </div>
                <ButtonCustom text='Work With Me' handleClick={() => alert('COMO VAMOS MUNDO')}/>
            </div>
        </div>
    )
}