import { copyFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

await copyFile('dist/index.html', 'dist/404.html')

const routes = [
  'about',
  'courses',
  'courses/beginner-french',
  'courses/conversation-french',
  'courses/professional-french',
  'courses/exam-preparation',
  'exam-preparation',
  'pricing',
  'book',
  'testimonials',
  'resources',
  'resources/sentence-patterns',
  'resources/french-nasal-vowels',
  'resources/tef-speaking-guide',
  'resources/build-useful-phrases',
  'resources/twenty-minute-routine',
  'contact',
]

for (const route of routes) {
  const directory = join('dist', route)
  await mkdir(directory, { recursive: true })
  await copyFile('dist/index.html', join(directory, 'index.html'))
}
