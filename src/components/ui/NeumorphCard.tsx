interface NeumorphCardProps {
  children?: React.ReactNode
}

export default function NeumorphCard({ children }: NeumorphCardProps) {
  return (
    <section className="rounded-xl shadow-neumorph py-8 px-4 flex flex-col justify-center items-center gap-4">
      {children}
    </section>
  )
}
