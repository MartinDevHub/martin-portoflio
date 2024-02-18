import Welcome from "@/app/components/home/welcome";
import About from "./components/home/about";
import Projects from "./components/home/projects";
import CV from "./components/home/cv";

export default function Home() {
  return (
    <div className="flex flex-col gap-40 items-center">
      <div className="h-screen flex items-center ">
        <Welcome />
      </div>
      <div className="bg-gray-900 w-screen flex justify-center py-20 shadow-md">
        <div className="w-full max-w-screen-xl">
          <About />
        </div>
      </div>
      <div className="bg-gray-900 w-screen flex justify-center py-20 shadow-md">
        <div className="w-full max-w-screen-xl">
          <Projects />
        </div>
      </div>
      <div className="bg-gray-900 w-screen flex justify-center py-20 shadow-md">
        <div className="w-full max-w-screen-xl">
          <CV />
        </div>
      </div>
    </div>
  );
}
