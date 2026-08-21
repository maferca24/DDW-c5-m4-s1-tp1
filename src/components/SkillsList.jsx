import { skills } from '../data/skills';

export default function SkillsList() {
  return (
    <section >
      <h2> Mis Habilidades</h2>
      <div>
        {skills.map((skill) => (
          console.log(skill.id)          
           ))}
      </div>
    </section>
  );
}