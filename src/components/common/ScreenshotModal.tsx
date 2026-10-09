import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ScreenshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  gameTitle: string;
}

export const ScreenshotModal: React.FC<ScreenshotModalProps> = ({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onNavigate,
  gameTitle,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % screenshots.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, screenshots.length, onClose, onNavigate]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de capturas de ${gameTitle}`}
    >
      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="w-full flex items-center justify-between pb-3 text-slate-300">
          <span className="text-sm font-medium">
            {gameTitle} — Captura {currentIndex + 1} de {screenshots.length}
          </span>
          <button
            onClick={onClose}
            aria-label="Cerrar visor"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative w-full aspect-[16/9] bg-dark-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
          <img
            src={screenshots[currentIndex]}
            alt={`Captura de pantalla ${currentIndex + 1} de ${gameTitle}`}
            className="w-full h-full object-contain"
          />

          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length)}
                aria-label="Captura anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-violet-600 text-white backdrop-blur-sm transition-all shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate((currentIndex + 1) % screenshots.length)}
                aria-label="Siguiente captura"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-violet-600 text-white backdrop-blur-sm transition-all shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {screenshots.length > 1 && (
          <div className="flex items-center gap-2 mt-4 overflow-x-auto max-w-full py-1">
            {screenshots.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onNavigate(idx)}
                aria-label={`Ver captura ${idx + 1}`}
                className={`w-16 h-10 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  idx === currentIndex ? 'border-violet-500 scale-105 shadow-neon' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={s} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
