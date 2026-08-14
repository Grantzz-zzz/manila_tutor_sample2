import { Link } from 'react-router-dom'
import { resources } from '../data/content'
import { CTASection, PageHero } from '../components/UI'

export default function Resources() {
  const featured = resources[0]
  return <>
    <PageHero kicker="Free French Resources" title="Learn between lessons." text="Practical notes on grammar, pronunciation, vocabulary, exam preparation, and building a sustainable French study habit." />
    <section className="container-site pb-24">
      <div className="mb-10 flex flex-wrap gap-x-5 gap-y-2 border-y border-line py-4">{['Grammar','Vocabulary','Pronunciation','TEF','TCF','DELF','Study Tips'].map(item => <span key={item} className="text-xs font-semibold uppercase tracking-[.12em] text-muted">{item}</span>)}</div>
      <Link to={`/resources/${featured.slug}`} className="grid gap-8 border-b border-line pb-14 lg:grid-cols-12 lg:items-end">
        <img src={featured.image} fetchPriority="high" decoding="async" className="h-[460px] w-full object-cover lg:col-span-7" alt="French study materials" />
        <div className="lg:col-span-4 lg:col-start-9"><p className="eyebrow">Featured · {featured.category}</p><h2 className="mt-4 font-display text-5xl leading-none">{featured.title}</h2><p className="mt-6 text-sm text-muted">{featured.date} · {featured.read} read</p></div>
      </Link>
      <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">{resources.slice(1).map(resource => <Link to={`/resources/${resource.slug}`} key={resource.slug} className="group">
        <div className="overflow-hidden"><img src={resource.image} loading="lazy" decoding="async" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" alt="" /></div>
        <p className="eyebrow mt-4">{resource.category} · {resource.read}</p><h3 className="mt-2 font-display text-3xl leading-tight">{resource.title}</h3><p className="mt-3 text-xs text-muted">{resource.date}</p>
      </Link>)}</div>
    </section>
    <CTASection />
  </>
}
