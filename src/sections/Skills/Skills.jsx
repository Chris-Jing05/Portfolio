import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
    
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Java" />
            <SkillList src={checkMarkIcon} skill="Python" />
            <SkillList src={checkMarkIcon} skill="Javascript" />
            <SkillList src={checkMarkIcon} skill="C/C++" />
            <SkillList src={checkMarkIcon} skill="HTML/CSS" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Node" />
            <SkillList src={checkMarkIcon} skill="Azure" />
            <SkillList src={checkMarkIcon} skill="Git"/>
        </div>
        <hr />
        
    </section>
    
  )
}

export default Skills;
