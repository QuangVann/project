import React from "react";
import SkillItem from "./SkillItem";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section className="section" id="skills">
      <header className="section__heading">
        <p className="section__desc">My Abilities</p>
        <h2 className="section__title">Skills</h2>
      </header>
      <ul className={styles.list}>
        <SkillItem
          title={"HTML"}
          icon={<i className="fa-brands fa-html5" />}
          point={60}
        />
        <SkillItem
          title={"CSS"}
          icon={<i className="fa-brands fa-css3-alt" />}
          point={58}
        />
        <SkillItem
          title={"JAVASCRIPT"}
          icon={<i className="fa-brands fa-js-square" />}
          point={40}
        />
        <SkillItem
          title={"REACT"}
          icon={<i className="fab fa-php" />}
          point={20}
        />
        <SkillItem
          title={"BOOTSTRAP"}
          icon={<i className="fab fa-php" />}
          point={60}
        />
      </ul>
    </section>
  );
}

export default Skills;
