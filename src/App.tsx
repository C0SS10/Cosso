import ThemeToggle from "@components/ui/ThemeToggle"
import About from "@components/sections/About"
import Experience from "@components/sections/Experience"
import Stack from "@components/sections/Stack"
import Projects from "@components/sections/Projects"

function App() {

  return (
    <main className="grid grid-cols-3 grid-rows-3 gap-4 justify-items-center px-32 py-8 transition-colors duration-300 ease-linear h-screen">
      <ThemeToggle />
      <About />
      <Experience />
      <Stack />
      <Projects />
    </main>
  )
}

export default App