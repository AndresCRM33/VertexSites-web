import React from "react";
import styles from "./OurServices.module.css"
import { 
    Web, 
    Code, 
    PhoneIphone, 
    Search, 
    Brush, 
    Speed 
} from "@mui/icons-material";

const Services = [
    {
        title: "Website Design", 
        description: "Custom designs that reflect your brand identity and engage your audience effectively.", 
        icon: <Web style={{color: "#2562eb"}}/>
    }, 
    {
        title: "Web Development", 
        description: "Clean, efficient code that ensures your website performs flawlessly across all devices.", 
        icon: <Code style={{color: "#2562eb"}}/>
    }, 
    {
        title: "Responsive Design", 
        description: "Mobile-first approach ensuring your site looks great on any device or screen size.", 
        icon: <PhoneIphone style={{color: "#2562eb"}}/>
    }, 
    {
        title: "SEO Optimization", 
        description: "Strategic optimization to improve your visibility in search engine results.", 
        icon: <Search style={{color: "#2562eb"}}/>
    },
    {
        title: "UX/UI Design", 
        description: "Intuitive user interfaces and seamless user experiences that convert visitors to customers.", 
        icon: <Brush style={{color: "#2562eb"}}/>
    },
    {
        title: "Performance Optimization",
        description: "Lightning-fast loading speeds and smooth performance for optimal user satisfaction.",
        icon: <Speed style={{color: "#2562eb"}}/>
    }
]


function OurServices (){
    return(<div className={styles.container}>
        <div className={styles.containerTitle}>
            <h2>Our Services</h2>
            <div className={styles.barraTitulo}></div>
        </div>
        <span>We offer comprehensive web solutions to help your business thrive online.</span>

        <div className={styles.cardsContainer}>
            {Services.map((service, index) => (
            <div key={index} className={styles.cardServices}>
                <div className={styles.iconContainer}>{service.icon}</div>
                <h3>{service.title}</h3>
                <span>{service.description}</span>
            </div>
        ))}
        </div>
    </div>)
}

export default OurServices