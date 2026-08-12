import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ProjectImage } from '../data/projects';

interface Props {
  images: ProjectImage[];
}

export default function ProjectGallery({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  function open(index: number) {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  }

  function close() {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }

  function prev() {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : 0));
  }

  function next() {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : 0));
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightboxIndex, handleKeyDown]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-purple-950/0 group-hover:bg-purple-950/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-night/95 flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2"
            aria-label="Sluiten"
          >
            <X className="w-7 h-7" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 text-white/80 hover:text-white transition-colors p-2"
                aria-label="Vorige foto"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 text-white/80 hover:text-white transition-colors p-2"
                aria-label="Volgende foto"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 text-white/60 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
