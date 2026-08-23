import { skills } from '../data/skills';
import SkillCard from './SkillCard';

export default function SkillsList() {
  return (
    <section className="my-8 max-w-xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Mis Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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