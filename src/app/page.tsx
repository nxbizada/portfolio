import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Tools from '@/components/Tools'
import Contact from '@/components/Contact'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Tools />
        <Contact />
      </div>
      <Chatbot />
    </main>
  )
} 