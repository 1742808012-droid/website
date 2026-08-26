import { useMemo, useState } from "react";
import FilterBar from "../components/FilterBar.jsx";
import PageTransition from "../components/PageTransition.jsx";
import WorkGrid from "../components/WorkGrid.jsx";
import { categoriesFor, works } from "../data/works.js";

export default function Photography() {
  const [active, setActive] = useState("全部");
  const categories = categoriesFor("photo");
  const photoWorks = useMemo(() => {
    return works.filter((work) => work.type === "photo" && (active === "全部" || work.category === active));
  }, [active]);

  return (
    <PageTransition className="page section page-with-header">
      <div className="page-title">
        <p>Photography</p>
        <h1>摄影作品</h1>
        <span>按主题浏览照片系列，点击作品查看完整项目。</span>
      </div>
      <FilterBar categories={categories} active={active} onChange={setActive} />
      <WorkGrid works={photoWorks} />
    </PageTransition>
  );
}
