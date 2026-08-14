import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Reveal({ children, className='' }) {
  return <div className={className}>{children}</div>
}

export function SectionLabel({ n='01', children }) {
  return <div className="mb-8 flex items-center gap-4 border-b border-line pb-3"><span className="text-xs font-semibold text-cobalt">{n}</span><span className="eyebrow">{children}</span></div>
}

export function Button({ to, children, variant='dark', className='' }) {
  const styles = variant==='dark' ? 'bg-ink text-white hover:bg-navy' : variant==='outline' ? 'border border-ink text-ink hover:bg-ink hover:text-white' : 'bg-white text-ink hover:bg-cream'
  const cls = `inline-flex items-center justify-center gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-[.13em] transition-colors ${styles} ${className}`
  return to ? <Link className={cls} to={to}>{children}<ArrowRight size={15}/></Link> : <button className={cls}>{children}<ArrowRight size={15}/></button>
}

export function PageHero({ kicker, title, text }) {
  return <section className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
    <Reveal><p className="eyebrow mb-7">{kicker}</p><div className="grid gap-8 lg:grid-cols-12 lg:items-end"><h1 className="display-lg lg:col-span-8">{title}</h1><p className="body-lg max-w-xl text-muted lg:col-span-4">{text}</p></div></Reveal>
  </section>
}

export function CTASection() {
  return <section className="bg-navy text-white"><div className="container-site py-20 lg:py-28"><Reveal><div className="grid gap-10 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><p className="eyebrow !text-white/55 mb-5">Your next step</p><h2 className="display-md">Ready to start speaking French?</h2></div><div className="lg:col-span-4 lg:text-right"><Button to="/book" variant="light">Book Your First Class</Button></div></div></Reveal></div></section>
}

export function Accordion({ items }) {
  const [open,setOpen]=useState(0)
  return <div className="border-t border-line">{items.map((x,i)=><div key={x.q} className="border-b border-line"><button onClick={()=>setOpen(open===i?-1:i)} className="flex w-full items-center justify-between gap-6 py-5 text-left font-medium"><span>{x.q}</span><ChevronDown size={18} className={`transition-transform ${open===i?'rotate-180':''}`}/></button>{open===i&&<div className="max-w-3xl pb-6 text-sm leading-7 text-muted">{x.a}</div>}</div>)}</div>
}
