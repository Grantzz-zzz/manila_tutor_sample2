import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Camera, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const nav=[['Home','/'],['About','/about'],['Courses','/courses'],['Exam Prep','/exam-preparation'],['Pricing','/pricing'],['Resources','/resources'],['Testimonials','/testimonials'],['Contact','/contact']]

export function Header(){
  const [open,setOpen]=useState(false); const loc=useLocation();
  useEffect(()=>setOpen(false),[loc.pathname])
  return <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur">
    <div className="container-site flex h-16 items-center justify-between gap-5">
      <Link to="/" className="font-display text-xl font-semibold tracking-tight">Manila French Tutor</Link>
      <nav className="hidden items-center gap-5 xl:flex">{nav.map(([l,p])=><NavLink key={p} to={p} className={({isActive})=>`text-[11px] font-semibold uppercase tracking-[.12em] transition-colors ${isActive?'text-cobalt':'text-ink/70 hover:text-ink'}`}>{l}</NavLink>)}</nav>
      <div className="flex items-center gap-3"><Link to="/book" className="hidden bg-ink px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[.13em] text-white sm:block">Book a Class</Link><button className="xl:hidden" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button></div>
    </div>
    {open&&<div className="border-t border-line bg-cream xl:hidden"><div className="container-site py-8">{nav.map(([l,p],i)=><Link key={p} to={p} className="flex items-center justify-between border-b border-line py-3 font-display text-3xl"><span>{String(i+1).padStart(2,'0')} — {l}</span><ArrowUpRight size={18}/></Link>)}<Link to="/book" className="mt-7 block bg-ink p-4 text-center text-xs font-semibold uppercase tracking-[.14em] text-white">Book a Class</Link></div></div>}
  </header>
}

export function Footer(){return <footer className="border-t border-line bg-cream"><div className="container-site py-12"><div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"><div className="lg:col-span-2"><div className="font-display text-3xl">Manila French Tutor</div><p className="mt-3 max-w-sm text-sm leading-6 text-muted">Private French lessons and exam preparation in Manila and online.</p></div><div><p className="eyebrow mb-4">Explore</p><div className="space-y-2 text-sm"><Link className="block" to="/courses">Courses</Link><Link className="block" to="/exam-preparation">Exam Preparation</Link><Link className="block" to="/resources">Resources</Link></div></div><div><p className="eyebrow mb-4">Contact</p><div className="space-y-3 text-sm"><a className="flex items-center gap-2" href="mailto:hello@manilafrenchtutor.com"><Mail size={15}/> Email</a><span className="flex items-center gap-2"><Camera size={15}/> @manilafrenchtutor</span></div></div></div><div className="mt-12 flex flex-col gap-2 border-t border-line pt-5 text-xs text-muted sm:flex-row sm:justify-between"><span>© 2026 Manila French Tutor</span><span>Frontend presentation prototype</span></div></div></footer>}
