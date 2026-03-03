interface NeumorphCardProps {
  children?: React.ReactNode
}

export default function NeumorphCard({ children }: NeumorphCardProps) {
  return (
    <section className="rounded-xl shadow-neumorph p-2 h-full">
      {children}
    </section>
  )
}
