import { skills } from '../data/skills';
import SkillCard from './SkillCard';

export default function SkillsList() {
  return (
    <section >
      <h2 >Mis Skills</h2>
      <div >
        {skills.map((skill) => (
          <SkillCard 
            key={skill.id} 
            name={skill.name} 
            level={skill.level} 
            isFavorite={skill.isFavorite} 
          />
        ))}
      </div>
    </section>
  );
}