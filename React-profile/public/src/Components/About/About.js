import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section className="section" id="about">
      <header className="section__heading">
        <p className="section__desc">My info</p>
        <h2 className="section__title">About Me</h2>
      </header>
      <div className={styles.wrap}>
        <p className={styles.content}>
          Hi, I'm Quang, a Front-end Developer (Fresher). I'm 20 years old and
          no has a lot of experience in the 🤔 industry. I really want to get be
          interested by employers so that I can do the work I love 😄. If If you
          are interested in this site, contact me by clicking Contact button
          below. Thank you for reading 😚.
        </p>
        <a href="#contact" className={styles.btn__contact}>
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default About;
