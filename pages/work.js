import { DefaultPageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});

const Work = () => {
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Home</a> / Work</span>",
  ];
  return (
    <Layout>
      <DefaultPageBanner pageName={"Work"} typingData={typingAnimation} />
      <div className="section works" id="next_section">
        <div className="content">
          <ItemIsotope />
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};
export default Work;
