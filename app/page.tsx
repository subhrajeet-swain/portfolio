import ContactForm from "@/components/ContactForm";
import { education, experience, profile, projectGroups, toolkit, type Project } from "@/content";

const link = "underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

function Section({ n, label, children }: { n: number; label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-rule py-12 md:grid-cols-[9rem_1fr] md:gap-10 md:py-16">
      <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted md:pt-1.5">
        {String(n).padStart(2, "0")} / {label}
      </h2>
      <div>{children}</div>
    </section>
  );
}

function Entry({ project }: { project: Project }) {
  return (
    <article className="max-w-[42rem]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-2xl font-medium leading-tight">{project.title}</h3>
        {project.href ? (
          <a href={project.href} target="_blank" rel="noopener noreferrer" className={`font-mono text-xs ${link}`}>
            {project.linkLabel} ↗
          </a>
        ) : (
          <span className="font-mono text-xs text-muted">private · client</span>
        )}
      </div>
      <p className="mt-1 italic text-muted">{project.tagline}</p>
      {project.body.map((p) => (
        <p key={p.slice(0, 24)} className="mt-4 text-lg leading-relaxed">
          {p}
        </p>
      ))}
      <p className="mt-4 font-mono text-xs leading-relaxed text-muted">
        <span className="mr-2 uppercase tracking-[0.14em]">Stack</span>
        {project.stack}
      </p>
    </article>
  );
}

export default function Home() {
  let n = 0;
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-8">
      <header className="pb-14 pt-16 md:pb-20 md:pt-28">
        <h1 className="text-5xl font-medium tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-3 font-mono text-sm text-muted">
          {profile.role} — {profile.location}
        </p>
        <div className="mt-10 max-w-[42rem] space-y-5 text-xl leading-relaxed sm:text-[1.375rem]">
          {profile.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
          <a href={`mailto:${profile.email}`} className={link}>
            {profile.email}
          </a>
          {profile.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={link}>
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      {projectGroups.map((group) => (
        <Section key={group.label} n={++n} label={group.label}>
          <div className="space-y-14">
            {group.projects.map((p) => (
              <Entry key={p.title} project={p} />
            ))}
          </div>
        </Section>
      ))}

      <Section n={++n} label="Experience">
        <div className="max-w-[42rem] space-y-12">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-2xl font-medium">
                  {job.company}
                  <span className="text-muted">, {job.place}</span>
                </h3>
                <span className="font-mono text-xs text-muted">{job.period}</span>
              </div>
              <p className="mt-1 italic text-muted">{job.role}</p>
              <ul className="mt-4 space-y-3 text-lg leading-relaxed">
                {job.points.map((pt) => (
                  <li key={pt.slice(0, 24)} className="relative pl-5 before:absolute before:left-0 before:text-muted before:content-['–']">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section n={++n} label="Toolkit">
        <dl className="max-w-[42rem] space-y-4">
          {toolkit.map((t) => (
            <div key={t.label} className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-4">
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted sm:pt-1">{t.label}</dt>
              <dd className="leading-relaxed">{t.items}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-[42rem] text-muted">{education}</p>
      </Section>

      <Section n={++n} label="Contact">
        <p className="max-w-[42rem] text-xl leading-relaxed">
          Have something that&apos;s still half a requirement? Write to{" "}
          <a href={`mailto:${profile.email}`} className={link}>
            {profile.email}
          </a>{" "}
          or use the form.
        </p>
        <ContactForm />
      </Section>

      <footer className="flex flex-wrap justify-between gap-2 border-t border-rule py-8 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Noida, India</span>
      </footer>
    </main>
  );
}
