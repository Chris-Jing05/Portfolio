import styles from './ProjectStyles.module.css';
import globeclick from '../../assets/globeclick.png';
import aichatbot from '../../assets/robot-face.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects
            </h1>
        <div className={styles.projectContainer}>
          <ProjectCard src={globeclick} link={'https://github.com/Chris-Jing05/GlobeClick.com'}
          h3="GlobeClick" 
          p="Tour and Travel Website"
          />
          <ProjectCard src={aichatbot} link={'https://github.com/Chris-Jing05/AiChatBot'}
          h3="ChatBot" 
          p="AI Chatbot"
          />

        </div>
            
            </section>
        
  )
}

export default Projects;
