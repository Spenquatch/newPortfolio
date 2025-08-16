import { DefaultPageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
// Dynamic import with SSR disabled for GitHub API call
const GitHubProjects = dynamic(() => import("../src/components/GitHubProjects"), {
  ssr: false,
});

const Projects = () => {
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Home</a> / Projects</span>",
  ];
  return (
    <Layout>
      <DefaultPageBanner pageName={"Projects"} typingData={typingAnimation} />
      <div className="section works" id="next_section">
        <div className="content">
          <GitHubProjects />
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};
export default Projects;
