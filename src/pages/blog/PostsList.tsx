import { Home } from "@/assets/icons/Home";
import NeumorphCard from "@/components/ui/NeumorphCard";
import { Link } from "react-router";

export default function PostsList() {
  return (
    <article className="flex gap-6 px-32 py-8 h-screen">
      <div className="w-64 h-full p-4 flex flex-col gap-4 font-heading justify-center items-center">
        <Link
          to="/Cosso"
          className="hover:scale-105 transition-transform flex gap-2 text-2xl items-center font-bold"
        >
          <NeumorphCard className="flex-row gap-2 items-center justify-center">
            <Home size={32} /> Inicio
          </NeumorphCard>
        </Link>
      </div>
      <NeumorphCard
        variant="convex"
        className="flex-1 h-full overflow-hidden p-4"
      >
        <div className="h-full overflow-y-auto pr-2 flex flex-col gap-4">
          <div
            className="p-4 rounded-xl bg-neumorph-gradient shadow-neumorph-inset"
          >
            <h2 className="text-xl font-bold font-heading text-white">
              Post
            </h2>

            <p className="text-gray-300 text-md font-body">
              This is a simple post description.
            </p>
          </div>
        </div>
      </NeumorphCard>
    </article>
  )
}
