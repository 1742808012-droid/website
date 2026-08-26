import { useMemo, useState } from "react";
import FilterBar from "../components/FilterBar.jsx";
import PageTransition from "../components/PageTransition.jsx";
import WorkGrid from "../components/WorkGrid.jsx";
import { categoriesFor, works } from "../data/works.js";

export default function Video() {
  const [active, setActive] = useState("全部");
  const categories = categoriesFor("video");
  const videoWorks = useMemo(() => {
    return works.filter((work) => work.type === "video" && (active === "全部" || work.category === active));
  }, [active]);

  return (
    <PageTransition className="page section page-with-header">
      <div className="page-title">
        <p>Video</p>
        <h1>视频作品</h1>
        <span>展示短片、活动记录、商业影像和旅拍剪辑。</span>
      </div>
      <FilterBar categories={categories} active={active} onChange={setActive} />
      <WorkGrid works={videoWorks} />
    </PageTransition>
  );
}
