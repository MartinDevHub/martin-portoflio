import Welcome from "@/app/components/home/welcome";
import About from "./components/home/about";
import Projects from "./components/home/projects";
import Contact from "./components/home/contact";
import Footer from "./components/home/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-screen flex items-center" id="welcomeSection">
        <Welcome />
      </div>
      <div
        className="bg-gray-900 w-screen flex justify-center py-5 shadow-md"
        id="aboutSection"
      >
        <div className="w-full max-w-screen-xl">
          <About />
        </div>
      </div>
      <div className="bg-gray-900 w-screen flex justify-center sm:py-5 shadow-md">
        <div className="w-full sm:max-w-screen-xl flex flex-wrap sm:justify-between sm:grid sm:grid-cols-2 sm:gap-2">
          <div className="w-full" id="projectsSection">
            <Projects />
          </div>
          <div className="w-full" id="contactSection">
            <Contact />
          </div>
        </div>
      </div>
      <div className="p-2 bg-gray-900 w-screen flex justify-center">
        <div className=" p-2 border-t-2 border-solid sm:w-1/2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
