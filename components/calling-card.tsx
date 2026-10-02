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
            <h2>Aspiring Web Developer<span className="headline-period">.</span></h2>
            <p className="intro">A curious mind with a passion for technology, programming, and turning ideas into creative digital experiences.</p>
            <div className="student-label"><GraduationCap size={17} /><span>College student <span className="divider-dot">·</span> Multimedia Web Development</span></div>
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
          {panel && <><div className="detail-heading"><span className="eyebrow">{panel === 'projects' ? 'PROJECT NOTEBOOK' : 'LET’S CONNECT'}</span><Button variant="ghost" size="icon" aria-label="Close details" onClick={() => setPanel(null)}><X /></Button></div>{panel === 'projects' ? <><h2>My first digital introduction.</h2><p>You&apos;re looking at my personal calling card: a responsive home for my skills, interests, and development journey. More creative projects will be added here as I build and learn.</p><a href="#about" className={buttonVariants({ variant: 'link' })}>Back to the introduction <ArrowUpRight data-icon="inline-end" /></a></> : <><h2>{panel === 'github' ? 'Find my code on GitHub.' : 'Let’s build a connection.'}</h2><p>{panel === 'github' ? 'My GitHub profile link hasn’t been added yet. Check back soon to explore my code and follow what I’m building.' : 'My email address hasn’t been added yet. Contact details will be available here soon.'}</p></>}</>}
        </section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Santino Doles</span><span className="footer-note">Made with curiosity <span>+</span> a little code.</span><a href="#about">Back to top <ArrowUpRight size={13} /></a></footer>
    </div>
  )
}
