import About from "../src/components/About";
import Clients from "../src/components/Clients";
import { DefaultPageBanner } from "../src/components/PageBanner";
import ResumeSection from "../src/components/ResumeSection";
import ResumeSectionEducation from "../src/components/ResumeSectionEducation";
import Service from "../src/components/Service";
import {
  KnowledgeSkills,
  TechnicalSkills,
} from "../src/components/Skills";
import Layout from "../src/layout/Layout";

const Resume = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Resume </span>`,
  ];
  return (
    <Layout>
      {/* Section Started */}
      <DefaultPageBanner pageName={"Resume"} typingData={typingAnimation} />
      {/* Section About */}
      <About />
      {/* Section Service */}
      <Service />
      {/* Section Resume */}
      <ResumeSection />
      <ResumeSectionEducation />
      {/* Section Knowledge Skills */}
      <KnowledgeSkills />
      <TechnicalSkills />
      {/* Section Clients */}
      <Clients />
    </Layout>
  );
};
export default Resume;
