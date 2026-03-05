import { ClickUp } from "@/assets/icons/ClickUp";
import { Docker } from "@/assets/icons/Docker";
import { JMeter } from "@/assets/icons/JMeter";
import { MongoDB } from "@/assets/icons/MongoDB";
import { OpenBook } from "@/assets/icons/OpenBook";
import { Performance } from "@/assets/icons/Performance";
import { Python } from "@/assets/icons/Python";
import NeumorphCard from "@components/ui/NeumorphCard";

interface ExperienceItem {
  company: string
  role: string
  duration: string
  description: string
  technologies: React.ReactNode[]
  icon: React.ReactNode
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "ImpactU - Colav",
      role: "Desarrollador Backend",
      duration: "2025/10 - 2026/02",
      description: "Optimicé y expandí funcionalmente la plataforma ImpactU de tipo CRIS. Logré reducir tiempos de respuesta en filtros mediante la denormalización de una base de datos MongoDB. Desarrollo una librería de Python llamado HanaPacha para automatizar la converción de dumps de OracleSQL a MongoDB.",
      technologies: [<Python size={16} />, <MongoDB size={16} />, <Docker size={16} />],
      icon: <OpenBook size={18} />
    },
    {
      company: "PlaceToPay - Evertec",
      role: "QA Student",
      duration: "2024/06 - 2024/08",
      description: "En la pasantía gestioné la estructuración de pruebas no funcionales para la pasarela de pagos de PlaceToPay usando JMeter. Las pruebas se realizaron con el fin de garantizar la calidad del software y mejorar la experiencia del usuario.",
      technologies: [<JMeter size={16} />, <ClickUp size={16} />],
      icon: <Performance size={18} />
    }
  ]
  return (
    <section className="h-full row-span-2 cursor-default">
      <NeumorphCard variant="inset">
        {experiences.map((expItem, index) => (
          <article key={index} className="flex flex-col gap-2 shadow-neumorph bg-neumorph-gradient rounded-lg p-2 w-full scroll-smooth">
            <h3 className="text-xl font-heading font-semibold flex justify-between items-center gap-4"><span>{expItem.company}</span> <span>{expItem.icon}</span></h3>
            <p className="flex gap-2 text-xs font-body justify-between">
              <span>{expItem.role}</span>
              <span>{expItem.duration}</span>
            </p>
            <p className="text-sm font-body">
              {expItem.description}
            </p>
            <ul className="flex gap-2 text-xs font-body justify-end">
              {expItem.technologies.map((tech, idx) => (
                <li key={idx} className="shadow-neumorph-inset rounded-full p-1">{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </NeumorphCard>
    </section>
  )
}
