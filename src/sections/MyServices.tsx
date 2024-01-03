import { Card } from '../components/Card';
import './styles/MyServicesStyle.css';
import websiteDesign from '../assets/svg/web-design-service.svg';
import appDesign from '../assets/svg/app-design-service.svg';
import maintenance from '../assets/svg/maintenance-icon.svg';

export function MyServices() {
    return (
        <div className="services-container">
            <h2>My Services</h2>
            <div className="services">
                <Card>
                    <img src={websiteDesign} alt="webdesign" />
                    <h3>Web & API Development</h3>
                    <p>
                        I offer full-stack development services to create robust web platforms and scalable backend systems. 
                        Developing efficient RESTful APIs ensures seamless integration between mobile and web applications, 
                        emphasizing performance and security optimization through best practices.
                    </p>
                </Card>

                <Card>
                    <img src={appDesign} alt="appdesign" />
                    <h3>Tailored Mobile Apps</h3>
                    <p>
                        Crafting custom cross-platform mobile applications for iOS and Android, I collaborate closely 
                        with clients to understand their business needs. The result is mobile solutions aligned with 
                        specific goals and requirements.
                    </p>
                </Card>

                <Card>
                    <img src={maintenance} alt="maintenance" />
                    <h3>App Optimization and Maintenance</h3>
                    <p>
                        For existing applications, I conduct performance analysis, identify areas for improvement, 
                        and optimize code for efficient operation. Ongoing maintenance services, bug fixes, and security 
                        updates ensure a consistent and secure application performance.
                    </p>
                </Card>

            </div>
        </div>
    )
}