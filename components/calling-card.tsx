'use client'

import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Code2, Database, GitFork, GraduationCap, Mail, Palette, Terminal, X } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { ProfileCode } from '@/components/profile-code'

const skills = [
  { name: 'HTML', category: 'Structure & semantics', icon: Code2, tag: '</>' },
  { name: 'CSS', category: 'Design & responsiveness', icon: Palette, tag: '#' },
  { name: 'Python', category: 'Logic & problem solving', icon: Terminal, tag: 'py' },
  { name: 'SQL', category: 'Data & databases', icon: Database, tag: 'db' },
  { name: 'Git / GitHub', category: 'Version control & collaboration', icon: GitFork, tag: 'git' },
]

export function CallingCard() {
  const [panel, setPanel] = useState<'projects' | 'github' | 'email' | null>(null)

  function showPanel(next: 'projects' | 'github' | 'email') {
    setPanel(next)
    requestAnimationFrame(() => document.getElementById('details')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' }))
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a href="#" className="wordmark" aria-label="Santino Doles home">sd<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#skills">Skills</a><a href="#details" onClick={() => setPanel('projects')}>Projects</a></nav>
        <a className="header-contact" href="#connect">Let&apos;s connect <ArrowUpRight size={15} /></a>
      </header>
      <main id="main">
        <section className="hero" id="about" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> HELLO WORLD, I&apos;M</div>
            <h1 id="hero-title">Santino Doles<span>.</span></h1>
            <h2>Aspiring Software Developer<span className="headline-period">.</span></h2>
            <p className="intro">College student building practical projects with Python, web technologies, SQL, and modern development tools. Focused on learning by building and growing toward a career in software development.</p>
            <div className="student-label"><GraduationCap size={17} /><span>College student <span className="divider-dot">·</span> Software Development Focus</span></div>
            <div className="hero-actions">
              <Button size="lg" className="h-12 px-5" onClick={() => showPanel('projects')}>Explore my projects <ArrowUpRight data-icon="inline-end" /></Button>
              <a href="https://github.com/SantinoDoles" target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: 'lg', variant: 'outline', className: 'h-12 px-5' })}><GitFork data-icon="inline-start" /> GitHub <ArrowUpRight data-icon="inline-end" /></a>
              <a href="mailto:santinodoles@icloud.com" className={buttonVariants({ size: 'lg', variant: 'ghost', className: 'h-12 px-3' })}><Mail data-icon="inline-start" /> Email me</a>
            </div>
          </div>
          <ProfileCode />
          <a href="#skills" className="discover-link"><ArrowDown size={14} /> A little more about me</a>
          <span className="hero-index" aria-hidden="true">01 — INTRODUCTION</span>
        </section>

        <section id="skills" className="skills-section" aria-labelledby="skills-title">
          <div className="section-heading"><div><div className="eyebrow">MY TOOLKIT</div><h2 id="skills-title">The tools behind the ideas<span>.</span></h2></div><p>Building a strong foundation.<br />Always adding to the toolkit.</p></div>
          <div className="skills-grid">{skills.map(({ name, category, icon: Icon, tag }, index) => <article className="skill" key={name}><div className="skill-top"><span className="skill-icon"><Icon size={23} strokeWidth={1.6} /></span><span className="skill-tag" aria-hidden="true">{tag}</span></div><h3>{name}</h3><p>{category}</p><span className="skill-number" aria-hidden="true">0{index + 1}</span></article>)}</div>
        </section>

        <section className="connect-section" id="connect"><div className="connect-icon"><Braces size={24} /></div><div><h2>Good things start with a conversation.</h2><p>Have an idea, an opportunity, or just want to say hello?</p></div><Button variant="outline" className="h-11 px-5" onClick={() => showPanel('email')}>Let&apos;s connect <ArrowRight data-icon="inline-end" /></Button></section>

        <section id="details" aria-live="polite" className={panel ? 'details-panel' : 'details-anchor'}>
          {panel && <><div className="detail-heading"><span className="eyebrow">{panel === 'projects' ? 'PROJECT NOTEBOOK' : 'LET’S CONNECT'}</span><Button variant="ghost" size="icon" aria-label="Close details" onClick={() => setPanel(null)}><X /></Button></div>{panel === 'projects' ? <><h2>Projects I'm building.</h2><p>Featured projects that show what I’m learning, building, and improving as I grow into software development.</p>
          <article className="project-card">
  <h3>Word Bluff</h3>

  <p>
    A multiplayer word game built as a hands-on software development
    project. I worked with modern web technologies, GitHub, Cloudflare,
    and a database while learning how a real application is built and deployed.
  </p>

  <div className="project-tech">
    <span>React</span>
    <span>TypeScript</span>
    <span>Cloudflare</span>
    <span>D1 Database</span>
  </div>

  <a
    href="https://github.com/SantinoDoles/word-bluff"
    target="_blank"
    rel="noopener noreferrer"
  >
    View on GitHub <ArrowUpRight size={14} />
  </a>
</article>

<article className="project-card">
  <h3>Developer Portfolio</h3>

  <p>
    A personal portfolio site built to showcase my skills, projects, and growth
    as an aspiring software developer. I customized the design, updated the
    content, and used GitHub and modern web development tools to manage and
    publish the project.
  </p>

  <div className="project-tech">
    <span>Next.js</span>
    <span>React</span>
    <span>TypeScript</span>
    <span>GitHub</span>
  </div>

  <a
    href="https://github.com/SantinoDoles/santino-doles-portfolio"
    target="_blank"
    rel="noopener noreferrer"
  >
    View on GitHub <ArrowUpRight size={14} />
  </a>
</article>
<article className="project-card">
  <h3>Python Expense Tracker</h3>
  <p>
  A Python command-line application that helps users manage
  monthly income, track expenses, and monitor their budget.
  Built using Python fundamentals, functions, loops,
  error handling, and file management.
</p>
<div className="project-tech">
  <span>Python</span>
  <span>File Handling</span>
  <span>Git</span>
  <span>GitHub</span>
</div>
<a
  href="https://github.com/SantinoDoles/python-expense-tracker"
  target="_blank"
  rel="noopener noreferrer"
>
  View on GitHub <ArrowUpRight size={14} />
</a>
</article>

<article className="project-card">
  <h3>Python Battle Simulator</h3>

<p>
  A turn-based combat game built with Python where players battle
  randomly selected enemies. Features attacking, defending, healing
  potions, critical hits, and randomized enemy damage.
</p>

<div className="project-tech">
  <span>Python</span>
  <span>Game Logic</span>
  <span>Random Module</span>
  <span>Git</span>
  <span>GitHub</span>
</div>

<a
  href="https://github.com/SantinoDoles/python-battle-simulator"
  target="_blank"
  rel="noopener noreferrer"
>
  View on GitHub <ArrowUpRight size={14} />
</a>

</article>

<a href="#about" className={buttonVariants({ variant: 'link' })}>Back to the introduction <ArrowUpRight data-icon="inline-end" /></a></> : <><h2>{panel === 'github' ? 'Find my code on GitHub.' : 'Let’s build a connection.'}</h2><p>{panel === 'github' ? 'Explore my GitHub to see the projects I’m building, the code I’m learning from, and how my development skills are growing.' : 'Have a project, opportunity, or question? Feel free to reach out by email.'}</p></>}</>}
        </section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Santino Doles</span><span className="footer-note">Made with curiosity <span>+</span> a little code.</span><a href="#about">Back to top <ArrowUpRight size={13} /></a></footer>
    </div>
  )
}
