export default function FilterBar({ categories, active, onChange }) {
  return (
    <div className="filter-bar" aria-label="作品分类">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={category === active ? "filter-button is-active" : "filter-button"}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
