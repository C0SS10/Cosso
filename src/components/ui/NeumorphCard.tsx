interface NeumorphCardProps {
  children?: React.ReactNode
  variant?: "flat" | "inset" | "convex" | "concave"
  className?: string
}

export default function NeumorphCard({ children, variant = "flat", className }: NeumorphCardProps) {
  const neumorphVariant = {
    flat: "shadow-neumorph",
    inset: "shadow-neumorph-inset",
    convex: "bg-neumorph-gradient shadow-neumorph",
    concave: "bg-neumorph-gradient shadow-neumorph-inset",
  }

  return (
    <section className={`rounded-xl ${neumorphVariant[variant]} py-8 px-4 flex flex-col ${className}`}>
      {children}
    </section>
  )
}
