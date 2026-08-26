import WorkCard from "./WorkCard.jsx";

export default function WorkGrid({ works }) {
  return (
    <div className="work-grid">
      {works.map((work) => (
        <WorkCard key={work.id} work={work} />
      ))}
    </div>
  );
}
