import { Link, Navigate, useParams } from 'react-router-dom'
import { resources } from '../data/content'
import { CTASection } from '../components/UI'

export default function ResourceArticle() {
  const { slug } = useParams()
  const article = resources.find(item => item.slug === slug)
  if (!article) return <Navigate to="/resources" replace />

  const related = resources.filter(item => item.slug !== article.slug).slice(0, 3)
  return <>
    <article>
      <header className="container-site py-16 lg:py-24">
        <p className="eyebrow">{article.category} · {article.date} · {article.read} read</p>
        <h1 className="display-lg mt-7 max-w-6xl">{article.title}</h1>
        <p className="mt-8 max-w-2xl body-lg text-muted">Practical guidance you can apply to your French study routine, lessons, and real conversations.</p>
      </header>
      <img src={article.image} fetchPriority="high" decoding="async" className="h-[54vh] min-h-[420px] w-full object-cover" alt="French learning materials" />
      <div className="container-site py-20"><div className="grid lg:grid-cols-12">
        <div className="hidden lg:col-span-3 lg:block"><p className="eyebrow sticky top-24">Manila French Tutor<br />Free Resource</p></div>
        <div className="prose prose-lg max-w-none lg:col-span-7">
          <p className="body-lg text-muted">Progress becomes easier when practice is focused, repeatable, and connected to situations where you will actually use French.</p>
          <h2 className="mt-12 font-display text-4xl">Start with one clear goal</h2><p className="mt-4 leading-8 text-muted">Choose a specific outcome for each practice session. A narrow goal helps you notice improvement and makes it easier to decide what to work on next.</p>
          <div className="my-10 border-y border-line py-8 font-display text-4xl italic">“Small, deliberate practice builds confident communication.”</div>
          <h2 className="mt-12 font-display text-4xl">Practice actively</h2><p className="mt-4 leading-8 text-muted">Say examples aloud, create your own variations, and revisit difficult points. Active recall builds faster access than simply rereading notes.</p>
          <h2 className="mt-12 font-display text-4xl">Review and reuse</h2><p className="mt-4 leading-8 text-muted">Return to useful language over several days and use it in a new sentence each time. Repetition with variation helps new knowledge become automatic.</p>
        </div>
      </div></div>
    </article>
    <section className="container-site pb-24"><div className="border-t border-line pt-10"><p className="eyebrow mb-7">Related articles</p><div className="grid gap-7 md:grid-cols-3">{related.map(item => <Link to={`/resources/${item.slug}`} key={item.slug}><p className="eyebrow">{item.category}</p><h3 className="mt-2 font-display text-3xl">{item.title}</h3></Link>)}</div></div></section>
    <CTASection />
  </>
}
