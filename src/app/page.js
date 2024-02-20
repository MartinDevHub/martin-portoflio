import Welcome from "@/app/components/home/welcome";
import About from "./components/home/about";
import Projects from "./components/home/projects";
import Contact from "./components/home/contact";
import Footer from "./components/home/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-screen flex items-center">
        <Welcome />
      </div>
      <div className="bg-gray-900 w-screen flex justify-center py-5 shadow-md">
        <div className="w-full max-w-screen-xl">
          <About />
        </div>
      </div>
      <div className="bg-gray-900 w-screen flex justify-center py-5 shadow-md">
        <div className="w-full max-w-screen-xl flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Projects />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Contact />
          </div>
        </div>
      </div>
      <div className="p-2 bg-gray-900 w-screen flex justify-center">
        <div className=" p-2 border-t-2 border-dashed w-1/2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
