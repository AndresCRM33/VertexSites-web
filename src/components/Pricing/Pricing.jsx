import React from "react"; 
import styles from "./Pricing.module.css";

const prices = [
    {
        title: "Basic Website",
        pricing: "$900",
        description: "Ideal for entrepreneurs and small businesses that need an online presence.",
        features: [
            "Modern and responsive design",
            "1 landing page with up to 5 sections",
            "Basic contact form",
            "Social media integration",
            "Basic SEO optimization",
            "Delivery in 7-10 business days"
        ]
    },
    {
        title: "Professional Website",
        pricing: "$2,499",
        description: "Perfect for businesses that need a more complete and customized website.",
        features: [
            "Up to 7 custom pages",
            "Fully tailored design",
            "Advanced SEO optimization",
            "Image gallery or portfolio",
            "Integrated blog",
            "SSL security",
            "Delivery in 15-20 business days"
        ]
    },
    {
        title: "Enterprise Website",
        pricing: "$4,999",
        description: "For companies that need a powerful, scalable website with advanced features.",
        features: [
            "Up to 15 custom pages",
            "Admin panel to manage content",
            "E-commerce with up to 10 products",
            "Automated emails/contact forms",
            "Payment integration (PayPal, Stripe, MercadoPago, etc.)",
            "3 months of free maintenance",
            "Delivery in 20-30 business days"
        ]
    }
];

function Pricing(){
    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <h2>Simple, Transparent Pricing</h2>
                <div className={styles.barraTitulo}></div>
            </div>
        <span>Choose the perfect plan for your business needs. All plans include our core features to ensure your success.</span>
            
            <div className={styles.cardsPricingContainer}>
            {prices.map((price, index) => (
    <div key={index} className={`${styles.cardContainer} ${index === 1 ? styles.popular : ""}`}>
        <h3>{price.title}</h3>
        <span className={styles.pricing}>{price.pricing}</span>
        <p className={styles.description}>{price.description}</p>
        <ul className={styles.featureList}>
            {price.features.map((feature, i) => (
                <li key={i}>{feature}</li>
            ))}
        </ul>
        <button>Get Started</button>
    </div>
))}

            </div>
        </div>
    );
}

export default Pricing;
