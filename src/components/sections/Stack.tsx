import { Art } from "@/assets/icons/Art";
import { Cog } from "@/assets/icons/Cog";
import { Database } from "@/assets/icons/Database";
import { Docker } from "@/assets/icons/Docker";
import { MongoDB } from "@/assets/icons/MongoDB";
import { PostgreSQL } from "@/assets/icons/PostgreSQL";
import { Python } from "@/assets/icons/Python";
import { React } from "@/assets/icons/React";
import { TypeScript } from "@/assets/icons/TypeScript";
import NeumorphCard from "@components/ui/NeumorphCard";

export default function Stack() {
  type Category = {
    label: string,
    emote: React.ReactNode,
    technologies: { name: string, icon: React.ReactNode }[]
  }

  const categories: Category[] = [
    {
      label: "Frontend",
      emote: <Art />,
      technologies: [
        { name: "React", icon: <React size={18} /> },
        { name: "TypeScript", icon: <TypeScript size={18} /> }
      ]
    },
    {
      label: "Backend",
      emote: <Cog />,
      technologies: [
        { name: "Python", icon: <Python size={18} /> },
        { name: "Docker", icon: <Docker size={18} /> },
      ]
    },
    {
      label: "BBDD",
      emote: <Database />,
      technologies: [
        { name: "MongoDB", icon: <MongoDB size={18} /> },
        { name: "PostgreSQL", icon: <PostgreSQL size={18} /> },
      ],
    }
  ]

  return (
    <section className="w-full col-start-2">
      <NeumorphCard variant="inset">
        <article className="flex items-center justify-center gap-3 h-full w-full">
          {categories.map((category, index) => (
            <div key={index} className="group perspective-midrange w-32 h-32 cursor-default">
              <div className="relative w-full h-full transition-transform duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
                <p className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl shadow-neumorph bg-neumorph-gradient backface-hidden">
                  {category.emote}
                  <span className="text-lg font-heading text-center">{category.label}</span>
                </p>

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl shadow-neumorph-inset bg-neumorph-gradient backface-hidden transform-[rotateY(180deg)]">
                  {category.technologies.map((tech) => (
                    <p key={tech.name} className="flex items-center gap-0.5">
                      {tech.icon}
                      <span className="text-xs font-body font-semibold">{tech.name}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </article>
      </NeumorphCard>
    </section >
  )
}
