import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  summary,
  features,
}: {
  imageSrc: string
  imageAlt: string
  title: string
  summary: string
  features: string[]
}) {
  return (
    <Card className="h-full overflow-hidden">
      <div className="aspect-[16/9] w-full bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="h-full w-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-pretty">{summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {features.map((f, i) => (
            <li key={i} className="text-foreground/85">
              {f}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
