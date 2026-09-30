import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CARD_IMAGES = [
  'https://i.postimg.cc/qR7CcnVh/Imagem-do-Chat-GPT-29-de-set-de-2026-19-20-59-(1).png',
  'https://i.postimg.cc/P5kp30sW/Imagem-do-Chat-GPT-29-de-set-de-2026-19-20-22-(1).png',
  'https://i.postimg.cc/xCgWkXMg/Imagem-do-Chat-GPT-29-de-set-de-2026-19-14-48-(1).png',
  'https://i.postimg.cc/bJLKGZ18/Imagem-do-Chat-GPT-29-de-set-de-2026-19-17-16-(1).png',
  'https://i.postimg.cc/5y0D8fmb/Imagem-do-Chat-GPT-29-de-set-de-2026-19-18-05-(1).png',
  'https://i.postimg.cc/cCb2mP9q/Imagem-do-Chat-GPT-29-de-set-de-2026-19-18-39-(1).png',
  'https://i.postimg.cc/fRXpc2YV/Imagem-do-Chat-GPT-29-de-set-de-2026-19-19-47-(1).png',
];

// Staggered order for row 2 so both tracks display diverse cards side by side
const CARD_IMAGES_ROW2 = [
  CARD_IMAGES[3],
  CARD_IMAGES[4],
  CARD_IMAGES[5],
  CARD_IMAGES[6],
  CARD_IMAGES[0],
  CARD_IMAGES[1],
  CARD_IMAGES[2],
];

// Duplicate 3 times for completely seamless infinite looping
const DISPLAY_ITEMS_ROW1 = [...CARD_IMAGES, ...CARD_IMAGES, ...CARD_IMAGES];
const DISPLAY_ITEMS_ROW2 = [...CARD_IMAGES_ROW2, ...CARD_IMAGES_ROW2, ...CARD_IMAGES_ROW2];

export default function InfiniteCardsCarouselSection() {
  const trackRef1 = useRef<HTMLDivElement>(null);
  const trackRef2 = useRef<HTMLDivElement>(null);
  const pos1Ref = useRef(0);
  const pos2Ref = useRef(0);
  const singleSetWidthRef = useRef(0);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    const pxPerSecond = 42; // constant smooth linear speed

    const updateSetWidth = () => {
      if (trackRef1.current) {
        singleSetWidthRef.current = trackRef1.current.scrollWidth / 3;
      }
    };

    updateSetWidth();
    window.addEventListener('resize', updateSetWidth);

    const step = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      // Prevent jumping if user switches tabs (clamp delta to max 0.1s)
      const safeDelta = Math.min(delta, 0.1);
      const movement = pxPerSecond * safeDelta;

      pos1Ref.current += movement;
      pos2Ref.current += movement;

      const setWidth = singleSetWidthRef.current;
      if (setWidth > 0) {
        // Track 1: Moving Right to Left
        if (pos1Ref.current >= setWidth) {
          pos1Ref.current %= setWidth;
        } else if (pos1Ref.current < 0) {
          pos1Ref.current = (pos1Ref.current % setWidth) + setWidth;
        }
        if (trackRef1.current) {
          trackRef1.current.style.transform = `translate3d(-${pos1Ref.current}px, 0, 0)`;
        }

        // Track 2: Moving Left to Right (Opposite Direction)
        if (pos2Ref.current >= setWidth) {
          pos2Ref.current %= setWidth;
        } else if (pos2Ref.current < 0) {
          pos2Ref.current = (pos2Ref.current % setWidth) + setWidth;
        }
        if (trackRef2.current) {
          const offset2 = -setWidth + pos2Ref.current;
          trackRef2.current.style.transform = `translate3d(${offset2}px, 0, 0)`;
        }
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', updateSetWidth);
    };
  }, []);

  // Row 1 navigation handlers (Right-to-Left track)
  const handlePrevRow1 = () => {
    pos1Ref.current -= 230;
  };
  const handleNextRow1 = () => {
    pos1Ref.current += 230;
  };

  // Row 2 navigation handlers (Left-to-Right track)
  const handlePrevRow2 = () => {
    pos2Ref.current += 230;
  };
  const handleNextRow2 = () => {
    pos2Ref.current -= 230;
  };

  return (
    <div className="w-full overflow-hidden select-none relative my-4 sm:my-6 border-y border-slate-300/80 py-5 flex flex-col gap-4 sm:gap-5">
      {/* 1. First Carousel Row: Right to Left */}
      <div className="relative w-full overflow-hidden py-1">
        <div
          ref={trackRef1}
          className="flex gap-4 sm:gap-5 md:gap-5 will-change-transform items-center"
          style={{ width: 'max-content' }}
        >
          {DISPLAY_ITEMS_ROW1.map((url, idx) => (
            <div
              key={idx}
              className="w-[245px] sm:w-[220px] md:w-[205px] shrink-0"
            >
              <div className="bg-white rounded-xl shadow-lg border border-slate-300/90 overflow-hidden p-2 transition-all">
                <img
                  src={url}
                  alt={`Ficha de Diagnóstico ${(idx % CARD_IMAGES.length) + 1}`}
                  className="w-full h-auto object-contain rounded-lg block"
                  loading="lazy"
                  decoding="async"
                  width={245}
                  height={340}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows Row 1 */}
        <button
          onClick={handlePrevRow1}
          type="button"
          aria-label="Voltar fichas da linha 1"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/65 hover:bg-black/85 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer backdrop-blur-sm border border-white/20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNextRow1}
          type="button"
          aria-label="Avançar fichas da linha 1"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/65 hover:bg-black/85 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer backdrop-blur-sm border border-white/20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* 2. Second Carousel Row: Left to Right (Direção Contrária) */}
      <div className="relative w-full overflow-hidden py-1">
        <div
          ref={trackRef2}
          className="flex gap-4 sm:gap-5 md:gap-5 will-change-transform items-center"
          style={{ width: 'max-content' }}
        >
          {DISPLAY_ITEMS_ROW2.map((url, idx) => (
            <div
              key={idx}
              className="w-[245px] sm:w-[220px] md:w-[205px] shrink-0"
            >
              <div className="bg-white rounded-xl shadow-lg border border-slate-300/90 overflow-hidden p-2 transition-all">
                <img
                  src={url}
                  alt={`Ficha de Diagnóstico ${(idx % CARD_IMAGES.length) + 1}`}
                  className="w-full h-auto object-contain rounded-lg block"
                  loading="lazy"
                  decoding="async"
                  width={245}
                  height={340}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows Row 2 */}
        <button
          onClick={handlePrevRow2}
          type="button"
          aria-label="Voltar fichas da linha 2"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/65 hover:bg-black/85 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer backdrop-blur-sm border border-white/20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNextRow2}
          type="button"
          aria-label="Avançar fichas da linha 2"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/65 hover:bg-black/85 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer backdrop-blur-sm border border-white/20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Subtitle below both carousels */}
      <div className="px-4 text-center max-w-[560px] mx-auto mt-2">
        <p className="text-xs sm:text-sm text-slate-700 font-medium max-w-[460px] mx-auto leading-relaxed">
          Material prático para consultar no celular ou imprimir e usar direto na bancada.
        </p>
      </div>
    </div>
  );
}
