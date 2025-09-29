import { cn } from "@/lib/utils"

export default function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={cn("space-y-3", className)}>
      <h2 className="text-2xl md:text-3xl font-semibold text-balance">{title}</h2>
      {subtitle ? <p className="text-muted-foreground text-pretty">{subtitle}</p> : null}
      <div className="h-1 w-16 rounded-full" style={{ background: "var(--brand)" }} aria-hidden="true" />
    </div>
  )
}
