import HeaderComponents from "./components/HeaderComponents";
import ContactComponents from "./components/ContactComponents";
import EducationComponents from "./components/EducationComponents";
import StackComponents from "./components/StackComponents";
import HeroComponents from "./components/HeroComponents";
import ProjectComponents from "./components/ProjectComponents";
import WorkExperienceComponents from "./components/WorkExperienceComponents";
import { ThemeContextProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <HeaderComponents />

        <HeroComponents />

        <div className="mx-auto max-w-6xl p-3 md:p-0">
          <StackComponents />

          <WorkExperienceComponents />

          <ProjectComponents />

          <EducationComponents />
        </div>
        <section id="contact" className="pt-12 ">
          <ContactComponents />
        </section>
      </ThemeContextProvider>
    </>
  );
};

export default App;
