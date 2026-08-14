import { Check } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { Accordion, Button, CTASection, Reveal, SectionLabel } from '../components/UI'
import { courses } from '../data/content'

const outcomes = {
  'beginner-french': ['French pronunciation foundations', 'Core sentence structure', 'Essential everyday vocabulary', 'Asking and answering questions', 'Listening for key information', 'Speaking with less hesitation'],
  'conversation-french': ['Natural conversation patterns', 'Clearer pronunciation', 'Useful everyday expressions', 'Listening in real time', 'Correcting recurring mistakes', 'Speaking with confidence'],
  'professional-french': ['Professional introductions', 'Meeting vocabulary', 'Clear email language', 'Interview preparation', 'Presentation practice', 'Appropriate tone and register'],
  'exam-preparation': ['Exam format and scoring', 'Timed speaking practice', 'Listening strategies', 'Structured written responses', 'Targeted grammar review', 'Personalized exam feedback'],
}

export default function CourseDetail() {
  const { slug } = useParams()
  const course = courses.find(item => item.slug === slug)
  if (!course) return <Navigate to="/courses" replace />

  const faq = [
    { q: 'Do I need any French before starting?', a: `Lessons are adapted to your current level. ${course.name} is shaped around what you already know and what you need next.` },
    { q: 'Are lessons online or in person?', a: 'Both online sessions and in-person lessons in Manila can be arranged, subject to availability.' },
    { q: 'What materials are included?', a: 'Lesson notes, exercises, vocabulary support, and tailored practice materials are included.' },
  ]

  return <>
    <section className="container-site py-14">
      <p className="eyebrow mb-8">Courses / {course.name}</p>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <h1 className="display-lg">{course.name}</h1>
          <p className="mt-6 max-w-2xl body-lg text-muted">{course.desc}</p>
        </div>
        <div className="border-t border-line pt-5 lg:col-span-4">
          <div className="grid grid-cols-2 gap-5 text-sm">
            <div><span className="eyebrow block">Price</span><b>{course.price}</b></div>
            <div><span className="eyebrow block">Level</span>{course.level}</div>
            <div><span className="eyebrow block">Duration</span>{course.duration}</div>
            <div><span className="eyebrow block">Mode</span>Online / Manila</div>
          </div>
          <Button to="/book" className="mt-7 w-full">Book Class</Button>
        </div>
      </div>
      <img className="mt-14 h-[50vh] min-h-[420px] w-full object-cover" src={course.image} alt={course.name} fetchPriority="high" decoding="async" />
    </section>
    <section className="container-site py-20">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-3"><p className="eyebrow lg:sticky lg:top-24">Course information</p></div>
        <div className="space-y-20 lg:col-span-8">
          <Reveal><SectionLabel n="01">Overview</SectionLabel><p className="body-lg text-muted">Each session combines clear instruction, guided practice, and useful feedback. The lesson plan develops with your progress, priorities, and real-world reasons for learning French.</p></Reveal>
          <Reveal><SectionLabel n="02">What you'll learn</SectionLabel><div className="grid gap-3 sm:grid-cols-2">{outcomes[course.slug].map(item => <div key={item} className="flex gap-3 border-b border-line py-3 text-sm"><Check size={16} className="mt-0.5 text-cobalt" />{item}</div>)}</div></Reveal>
          <Reveal><SectionLabel n="03">Lesson structure</SectionLabel><div className="grid gap-6 sm:grid-cols-3">{[['10 min','Review'],['35 min','Core lesson'],['15 min','Guided practice']].map(([time, label]) => <div className="border-t border-line pt-4" key={label}><div className="font-display text-4xl">{time}</div><div className="eyebrow mt-2">{label}</div></div>)}</div></Reveal>
          <Reveal><SectionLabel n="04">Frequently asked questions</SectionLabel><Accordion items={faq} /></Reveal>
        </div>
      </div>
    </section>
    <CTASection />
  </>
}
