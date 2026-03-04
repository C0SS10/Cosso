interface NeumorphCardProps {
  children?: React.ReactNode
  variant?: "flat" | "inset"
}

export default function NeumorphCard({ children, variant = "flat" }: NeumorphCardProps) {
  const variantClasses = variant === "flat"
    ? "shadow-neumorph"
    : "shadow-neumorph-inset"

  return (
    <section className={`rounded-xl ${variantClasses} py-8 px-4 flex flex-col justify-start items-start gap-4 overflow-y-auto h-full w-full custom-scroll`}>
      {children}
    </section>
  )
}
