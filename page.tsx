import SiteNavbar from "@/components/site-navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <SiteNavbar />
      {/* Sections */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-[var(--color-border)] py-8 mt-16">
        <div className="container mx-auto px-4 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">{"© 2025 Muhammad Andri Wibowo"}</p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:andriwbw27@gmail.com"
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              {/* simple icon via text for fallback */}
              <span className="sr-only">{"Email"}</span>
              {"✉️"}
            </a>
            <a
              href="https://www.linkedin.com/in/m-andri-wibowo-4467a6385/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <span className="sr-only">{"LinkedIn"}</span>
              {"in"}
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
