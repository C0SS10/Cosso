import { Email } from '@/assets/icons/Email'
import { GitHub } from '@/assets/icons/GitHub'
import { LinkedIn } from '@/assets/icons/LinkedIn'
import NeumorphCard from '@components/ui/NeumorphCard'

export default function About() {
  const socials: Record<string, { href: string; icon: React.ReactNode }> = {
    linkedin: {
      href: "https://www.linkedin.com/in/esteban-cg/",
      icon: <LinkedIn />
    },
    email: {
      href: "mailto:esteban.codev@gmail.com",
      icon: <Email />
    },
    github: {
      href: "https://www.github.com/C0SS10",
      icon: <GitHub />
    }
  }

  return (
    <section className='row-span-3 h-full flex justify-center items-center'>
      <NeumorphCard>
        <figure className="rounded-full shadow-neumorph w-52 h-52 text-center overflow-hidden">
          <img src="/me.webp" alt="Profile picture of Esteban" className="object-cover w-full h-full" />
        </figure>
        <h1 className="text-4xl font-heading cursor-default">Esteban Cossio</h1>
        <h2 className='text-2xl font-heading cursor-default'>Ingeniero de Sistemas</h2>
        <p className="text-lg font-body text-center cursor-default">Desarrollador full-stack con experiencia en tecnologías web modernas.</p>
        <hr />
        <div className='flex justify-center items-center gap-4 shadow-neumorph p-2 rounded-full'>
          {Object.entries(socials).map(([key, { href, icon }]) => (
            <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="shadow-neumorph-inset p-2 rounded-full hover:-translate-y-0.5 transition-transform duration-200">
              {icon}
            </a>
          ))}
        </div>
      </NeumorphCard>
    </section>
  )
}
