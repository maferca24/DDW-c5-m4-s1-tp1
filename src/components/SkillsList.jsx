import { skills } from '../data/skills';

export default function SkillsList() {
    return (
        <section >
            <h2> Mis Habilidades</h2>
            <div>
                {skills.map((skill) => (
                    <p>Hecho con React por {skill.name}</p>,
                    console.log(skill.id),
                    console.log(skill.name),
                    console.log(skill.level),
                    console.log(skill.isFavorite)

                ))

                }
            </div>
        </section>
    );
}