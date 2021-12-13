import styles from './about.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.about__inner}>
                <h2 className={styles.about__title}>About <span>Me</span></h2>
                <p className={styles.about__text}>My name is Abdellah, I'm a front-end developer based in Morocco. I'm passionate about coding and problem-solving. I'm always trying to improve my programming skills by learning new stuff and being up to date.                
                <br /><br />
                I have experience working primarily with HTML, CSS, Sass, Bootstrap, JavaScript, and React JS, but I'm also learning new technologies and expanding my skill set to include the full-stack by learning MongoDB and NodeJS. My end goal is to become a full-stack and create fully functioning applications.                
                <br /><br />
                When I'm not coding, I read about psychology or philosophy, play or watch video games, and listen to music...</p>
                <a href="/AbdellahBahsine_Resume.pdf" target="_blank"><button className={`${styles.cta} ${styles.primary}`}>Download Resume</button></a>
            </div>
        </section>
    )
}

export default About;