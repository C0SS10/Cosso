interface NeumorphCardProps {
  children?: React.ReactNode
  variant?: "flat" | "inset" | "convex" | "concave"
}

export default function NeumorphCard({ children, variant = "flat" }: NeumorphCardProps) {
  const neumorphVariant = {
    flat: "shadow-neumorph",
    inset: "shadow-neumorph-inset",
    convex: "bg-neumorph-gradient shadow-neumorph",
    concave: "bg-neumorph-gradient shadow-neumorph-inset",
  }

  return (
    <section className={`rounded-xl ${neumorphVariant[variant]} py-8 px-4 flex flex-col justify-start items-start gap-4 overflow-y-auto h-full w-full custom-scroll`}>
      {children}
    </section>
  )
}
