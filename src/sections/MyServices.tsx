import './styles/MyServicesStyle.css';
import websiteDesign from '../assets/svg/web-design-service.svg';
import appDesign from '../assets/svg/app-design-service.svg';
import maintenance from '../assets/svg/maintenance-icon.svg';
import { backSkills, frontSkills, mobileSkills } from '../utils/Skills';

export function MyServices() {
    return (
        <div className='services-container'>
            <div className="skills">
                <div className="skillsContent border-end">
                    <img src={websiteDesign} alt="webdesign" />
                    <h3>Frontend Developer</h3>
                    <p>
                        I offer full-stack development services to create robust web platforms and scalable backend systems. 
                        Developing efficient RESTful APIs ensures seamless integration between mobile and web applications, 
                        emphasizing performance and security optimization through best practices.
                    </p>
                    <h4>Favorite Front Technologies</h4>
                    <div className='technologies'>
                        {frontSkills.map((itemFront) => (
                            <div className='frontSkill'>
                                <img src={itemFront.icon} alt={itemFront.name} />
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="skillsContent border-end">
                    <img src={maintenance} alt="maintenance" />
                    <h3>Backend Developer</h3>
                    <p>
                        Crafting custom cross-platform mobile applications for iOS and Android, I collaborate closely 
                        with clients to understand their business needs. The result is mobile solutions aligned with 
                        specific goals and requirements.
                    </p>
                    <h4>Favorite Backend Technologies</h4>
                    <div className='technologies'>
                        {backSkills.map((itemBack) => (
                            <div>
                                <img src={itemBack.icon} alt={itemBack.name} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skillsContent">
                    <img src={appDesign} alt="appdesign" />
                    <h3>Mobile App Developer</h3>
                    <p>
                        For existing applications, I conduct performance analysis, identify areas for improvement, 
                        and optimize code for efficient operation. Ongoing maintenance services, bug fixes, and security 
                        updates ensure a consistent and secure application performance.
                    </p>
                    <h4>Favorite Mobile Technologies</h4>
                    <div className='technologies'>
                        {mobileSkills.map((itemMobile) => (
                            <div>
                                <img src={itemMobile.icon} alt={itemMobile.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
