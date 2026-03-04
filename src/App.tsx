import ThemeToggle from "@components/ui/ThemeToggle"
import About from "@components/sections/About"
import Experience from "@components/sections/Experience"

function App() {

  return (
    <main className="grid grid-cols-3 grid-rows-3 gap-4 justify-items-center px-32 py-8 transition-colors duration-300 ease-linear h-screen">
      <ThemeToggle />
      <About />
      <Experience />
    </main>
  )
}

export default App