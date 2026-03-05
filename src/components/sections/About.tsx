import { Email } from '@/assets/icons/Email'
import { GitHub } from '@/assets/icons/GitHub'
import { LinkedIn } from '@/assets/icons/LinkedIn'
import NeumorphCard from '@components/ui/NeumorphCard'


export default function About() {
  interface SocialsProps {
    href: string
    icon: React.ReactNode
    popup: string
  }

  type SocialKeys = 'linkedin' | 'email' | 'github'

  const socials: Record<SocialKeys, SocialsProps> = {
    linkedin: {
      href: "https://www.linkedin.com/in/esteban-cg/",
      icon: <LinkedIn />,
      popup: "Visitar LinkedIn"
    },
    email: {
      href: "mailto:esteban.codev@gmail.com",
      icon: <Email />,
      popup: "Enviar correo electrónico"
    },
    github: {
      href: "https://www.github.com/C0SS10",
      icon: <GitHub />,
      popup: "Visitar GitHub"
    }
  }

  return (
    <section className='row-span-3 h-full'>
      <NeumorphCard>
        <article className='flex flex-col items-center justify-center gap-4 h-full w-full'>
          <figure className="rounded-full shadow-neumorph w-52 h-52 text-center overflow-hidden">
            <img src="/me.webp" alt="Profile picture of Esteban" className="object-cover w-full h-full" />
          </figure>
          <h1 className="text-4xl font-heading cursor-default">Esteban Cossio</h1>
          <h2 className='text-2xl font-heading cursor-default'>Ingeniero de Sistemas</h2>
          <p className="text-lg font-body text-center cursor-default">Desarrollador full-stack con experiencia en tecnologías web modernas.</p>
          <hr />
          <div className='flex justify-center items-center gap-4 shadow-neumorph p-2 rounded-full'>
            {Object.entries(socials).map(([key, { href, icon, popup }]) => (
              <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="relative group shadow-neumorph-inset p-2 rounded-full hover:-translate-y-0.5 transition-transform duration-200">
                {icon}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-0.5 font-body font-semibold text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-initial pointer-events-none whitespace-nowrap shadow-neumorph-inset">
                  {popup}
                </div>
              </a>
            ))}
          </div>
        </article>
      </NeumorphCard>
    </section>
  )
}
