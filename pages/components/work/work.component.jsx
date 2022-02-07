import styles from './work.module.css';

import SharkStore from '../../../public/images/shark-store.png';
import LeTravelerGuide from '../../../public/images/le-traveler-guide.png';
import PersonalPortfolio from '../../../public/images/personal-portfolio.png';

import Link from "next/link"

const Work = () => {
    return (
        <section id="work" className={styles.work}>
            <div className={styles.work__inner}>
                <h2 className={styles.work__title}> My <span>Work</span></h2>
                <p className={styles.work__text}>These are some of my previous projects</p>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.card__image}>
                            <img className={styles.img} src={SharkStore.src} alt="shark-store" />
                        </div>
                        <div className={styles.card__content}>
                            <h3 className={styles.card__title}>Shark Store</h3>
                            <p className={styles.card__text}>E-commerce application built with React & Firebase. Card items are stored in the browser's LocalStorage and payements are done through Stripe.</p>
                            <div className={styles.card__buttons}>
                                <a className={styles.card__button} href="https://shark-store.netlify.app/" target="_blank"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                <a className={styles.card__button} href="https://github.com/AbdellahBahsine/shark-store" target="_blank"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.card__image}>
                            <img className={styles.img} src={LeTravelerGuide.src} alt="le-traveler-guide" />
                        </div>
                        <div className={styles.card__content}>
                            <h3 className={styles.card__title}>Le Traveler Guide</h3>
                            <p className={styles.card__text}>Le Traveler Guide is a blog created using laravel and blade template. This blog has many features like creating blogs and deleting them, commenting on blogs...<br/><br/></p>
                            <div className={styles.card__buttons}> 
                                <a className={styles.card__button} href="https://le-traveler-guide.herokuapp.com/" target="_blank"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                <a className={styles.card__button} href="https://github.com/AbdellahBahsine/le-traveler-guide" target="_blank"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.card__image}>
                            <img className={styles.img} src={PersonalPortfolio.src} alt="portfolio" />
                        </div>
                        <div className={styles.card__content}>
                            <h3 className={styles.card__title}>My Own Portfolio</h3>
                            <p className={styles.card__text}>I have designed and coded my own portfolio from scratch using NextJS and NodeMailer. The website is responsive and friendly.</p>
                            <div className={styles.card__buttons}>
                                <a className={styles.card__button} target="_blank" href="https://abdellah-bahsine.herokuapp.com/r"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                <a className={styles.card__button} target="_blank" href="https://github.com/AbdellahBahsine/portfolio-v3"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                            </div>
                        </div>
                    </div>

                </div>

                <Link href="/projects"><button className={`${styles.cta} ${styles.secondary}`}>View More</button></Link>
            </div>
        </section> 
    )
}

export default Work;