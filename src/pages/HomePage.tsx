import About from "@components/sections/About"
import Experience from "@components/sections/Experience"
import Stack from "@components/sections/Stack"
import Projects from "@components/sections/Projects"

function HomePage() {

  return (
    <main className="grid grid-cols-3 grid-rows-3 gap-4 justify-items-center px-32 py-8 transition-colors duration-300 ease-linear h-screen">
      <About />
      <Experience />
      <Stack />
      <Projects />
    </main>
  )
}

export default HomePage