export const courses = [
  { id:'01', slug:'beginner-french', name:'Beginner French', level:'A1–A2', duration:'60 min', price:'₱1,200', desc:'Build a confident foundation in pronunciation, grammar, and everyday conversation.', image:'https://images.unsplash.com/photo-1543109740-4bdb38fda756?auto=format&fit=crop&w=1200&q=85' },
  { id:'02', slug:'conversation-french', name:'Conversation French', level:'A2–B2', duration:'60 min', price:'₱1,300', desc:'Speak more naturally through guided conversation, correction, and practical vocabulary.', image:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85' },
  { id:'03', slug:'professional-french', name:'Professional French', level:'B1+', duration:'60 min', price:'₱1,450', desc:'Develop clear, polished French for work, interviews, meetings, and professional settings.', image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85' },
  { id:'04', slug:'exam-preparation', name:'Exam Preparation', level:'A2–C1', duration:'75 min', price:'₱1,650', desc:'Focused TEF, TCF, and DELF coaching with strategy, timed practice, and feedback.', image:'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85' }
]

export const testimonials = [
  { quote:'The lessons were structured, practical, and helped me prepare confidently for my exam.', name:'Camille R.', label:'TEF Preparation' },
  { quote:'I stopped translating every sentence in my head and started speaking with much more ease.', name:'Paolo M.', label:'Conversation French' },
  { quote:'Every lesson felt tailored to what I actually needed. Clear explanations, no wasted time.', name:'Andrea S.', label:'Private Lessons' },
  { quote:'The exam strategies made a real difference. I understood exactly what the test expected from me.', name:'Miguel T.', label:'TCF Preparation' }
]

export const resources = [
  { category:'Grammar', title:'5 French sentence patterns that make speaking easier', date:'12 Aug 2026', read:'6 min', image:'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85' },
  { category:'Pronunciation', title:'How to hear and produce French nasal vowels', date:'02 Aug 2026', read:'7 min', image:'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=85' },
  { category:'TEF', title:'A practical guide to the TEF speaking section', date:'24 Jul 2026', read:'8 min', image:'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=85' },
  { category:'Vocabulary', title:'Stop memorizing isolated words: build useful phrases', date:'11 Jul 2026', read:'5 min', image:'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=85' },
  { category:'Study Tips', title:'A realistic 20-minute French study routine', date:'30 Jun 2026', read:'4 min', image:'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=85' }
]

export const pricing = [
  { name:'Single Lesson', price:'₱1,200', note:'For flexible, focused learning.', lessons:'1 private lesson', duration:'60 minutes', features:['Personalized lesson plan','Digital learning materials','Session notes'] },
  { name:'5-Lesson Package', price:'₱5,500', note:'For building consistent momentum.', lessons:'5 private lessons', duration:'60 minutes each', features:['Personalized progression plan','Digital learning materials','Between-session exercises'], featured:true },
  { name:'10-Lesson Package', price:'₱10,000', note:'For steady long-term progress.', lessons:'10 private lessons', duration:'60 minutes each', features:['Long-term learning roadmap','Digital learning materials','Priority scheduling'] }
]
