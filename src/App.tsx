import ThemeToggle from "@components/ThemeToggle"
import NeumorphCard from "@components/NeumorphCard"

function App() {

  return (
    <main className="grid grid-cols-3 gap-4 justify-items-center min-h-screen px-2 py-8">
      <ThemeToggle />
      <NeumorphCard>
        <h1 className="text-2xl font-heading">👋 Esteban Cossio</h1>
      </NeumorphCard>
    </main>
  )
}

export default App