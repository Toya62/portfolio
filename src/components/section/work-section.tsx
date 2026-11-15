import { DATA } from "@/data/resume";

export default function WorkSection() {
  return (
    <div className="grid gap-6">
      {DATA.work.map((work) => (
        <article key={`${work.company}-${work.start}`} className="border-l-2 border-border pl-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-semibold">{work.company}</h3>
            <span className="text-xs tabular-nums text-muted-foreground">{work.start} – {work.end}</span>
          </div>
          <p className="text-sm font-medium">{work.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{work.description}</p>
        </article>
      ))}
    </div>
  );
}
