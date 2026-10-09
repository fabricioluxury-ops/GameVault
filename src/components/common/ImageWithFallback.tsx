import React, { useState } from 'react';
import { Gamepad2 } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackAspect?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackAspect = 'aspect-[16/10]',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-dark-800 to-dark-900 border border-white/5 text-slate-400 p-4 text-center overflow-hidden ${fallbackAspect} ${className}`}
        role="img"
        aria-label={alt || fallbackTitle || 'Imagen del juego'}
      >
        <div className="absolute inset-0 bg-violet-600/5 backdrop-blur-sm" />
        <Gamepad2 className="w-10 h-10 text-violet-400/60 mb-2 relative z-10 animate-pulse" />
        {fallbackTitle && (
          <span className="text-xs font-medium text-slate-300 relative z-10 line-clamp-2 px-2">
            {fallbackTitle}
          </span>
        )}
        <span className="text-[10px] text-slate-500 mt-1 relative z-10 uppercase tracking-wider">
          GameVault
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-dark-900">
      {!isLoaded && (
        <div className="absolute inset-0 bg-dark-800 animate-pulse flex items-center justify-center">
          <Gamepad2 className="w-8 h-8 text-slate-700" />
        </div>
      )}
      <img
        src={src}
        alt={alt || fallbackTitle || 'Imagen de videojuego'}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};
