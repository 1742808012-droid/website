import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

export default function Lightbox({ images, index, title, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.classList.add("is-locked");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  if (index < 0) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} 大图预览`}>
      <button className="icon-button lightbox-close" type="button" aria-label="关闭预览" onClick={onClose}>
        <X size={24} />
      </button>
      <button className="icon-button lightbox-prev" type="button" aria-label="上一张" onClick={onPrev}>
        <ChevronLeft size={26} />
      </button>
      <img src={images[index]} alt={`${title} ${index + 1}`} />
      <button className="icon-button lightbox-next" type="button" aria-label="下一张" onClick={onNext}>
        <ChevronRight size={26} />
      </button>
      <p>{index + 1} / {images.length}</p>
    </div>
  );
}
