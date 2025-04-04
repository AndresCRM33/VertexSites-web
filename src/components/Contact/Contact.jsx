import React from "react";
import styles from "./Contact.module.css";
import { Phone, Email, LocationOn, AccessTime } from "@mui/icons-material";

const Info = [
    {
        title: "Phone",
        text: "(+57) 315 630 6686",
        icon: <Phone />,
    },
    {
        title: "Email",
        text: "acamilorm4556@gmail.com",
        icon: <Email />,
    },
    {
        title: "Address",
        text: "Pasto, Nariño, Colombia.",
        icon: <LocationOn />,
    }
];

const BusinessHours = [
    { day: "Monday - Friday", hour: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hour: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hour: "Closed" }
];

function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <h2>Get In Touch</h2>
                <div className={styles.barraTitulo}></div>
            </div>
            <span>Ready to start your project? Contact us today for a free consultation and quote.</span>
            <div className={styles.containerInformation}>
                {/* Formulario */}
                <div className={styles.containerForm}>
                    <h3>Send us a message</h3>
                    <form>
                        <div className={styles.inputContainer}>
                            <label>Full Name</label>
                            <input type="text" placeholder="Your name" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Email Address</label>
                            <input type="email" placeholder="your.email@example.com" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Subject</label>
                            <input type="text" placeholder="Project inquiry" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Message</label>
                            <textarea placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button type="submit">Send Message ✈</button>
                    </form>
                </div>

                {/* Información de Contacto y Horarios */}
                <div className={styles.rightInformation}>
                    {/* Contact Info */}
                    <div className={styles.containerInfo}>
                        <h3>Contact Information</h3>
                        {Info.map((item, index) => (
                            <div className={styles.containerItem} key={index}>
                                <div className={styles.iconContainer}>{item.icon}</div>
                                <div className={styles.infoItem}>
                                    <span className={styles.itemTitle}>{item.title}</span>
                                    <span className={styles.itemText}>{item.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Business Hours */}
                    <div className={styles.containerBusinessHours}>
                        <h3>Business Hours</h3>
                        <div className={styles.containerItem}>
                            <div className={styles.infoItem}>
                                {BusinessHours.map((item, index) => (
                                    <div key={index} className={styles.businessItem}>
                                        <span className={styles.itemDay}>{item.day}</span>
                                        <span className={styles.itemHour}>{item.hour}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
