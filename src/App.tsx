import ThemeToggle from "@components/ui/ThemeToggle"
import About from "@components/sections/About"

function App() {

  return (
    <main className="grid grid-cols-3 grid-rows-3 gap-4 justify-items-center min-h-screen px-32 py-8 transition-colors duration-300 ease-linear">
      <ThemeToggle />
      <About />
    </main>
  )
}

export default App