import { Bulb } from "@/assets/icons/Bulb";
import { Note } from "@/assets/icons/Note";

export default function Projects() {
  type ProjectLink = {
    label: string,
    href: string,
    icon: React.ReactNode
  }

  const links: ProjectLink[] = [
    {
      label: "Blog/Notas",
      href: "#",
      icon: <Note size={42} />
    },
    {
      label: "Proyectos",
      href: "#",
      icon: <Bulb size={42} />
    }
  ]

  return (
    <section className="col-start-3 row-start-1 row-end-2 flex justify-between items-start gap-4 w-full">
      {links.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          className="shadow-neumorph-inset flex flex-col items-center gap-2 bg-neumorph-gradient w-full text-4xl p-4 rounded-lg transition-transform duration-200 hover:shadow-neumorph active:scale-95 group"
        >
          <span className="transition-transform duration-200 group-hover:-translate-y-1">
            {icon}
          </span>
          <span className="text-xl font-heading font-semibold">{label}</span>
        </a>
      ))
      }
    </section >
  )
}
