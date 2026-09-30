import { useState } from 'react';
import { ZoomIn, X, MessageSquareQuote } from 'lucide-react';

export default function RelatosMecanicosSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: 'https://i.postimg.cc/65FDg2Kg/Imagem-do-Chat-GPT-29-de-set-de-2026-23-53-35-(1).png',
      alt: 'Relato de mecânico 1',
    },
    {
      src: 'https://i.postimg.cc/mryJPmHV/Imagem-do-Chat-GPT-29-de-set-de-2026-23-53-46-1-(1).png',
      alt: 'Relato de mecânico 2',
    },
    {
      src: 'https://i.postimg.cc/85k3MLRq/Imagem-do-Chat-GPT-29-de-set-de-2026-23-53-49-2-(1).png',
      alt: 'Relato de mecânico 3',
    },
  ];

  return (
    <section className="bg-[#ede8df] text-slate-900 py-12 px-4 border-b border-slate-300">
      <div className="max-w-[620px] mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#f3b318] text-black text-xs font-black uppercase px-4 py-1 rounded-full mb-2.5 shadow-sm">
          <MessageSquareQuote className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>DEPOIMENTOS REAIS</span>
        </div>

        {/* Title */}
        <h2 className="text-[19px] sm:text-[23px] md:text-[26px] font-black uppercase tracking-tight text-black leading-tight">
          VEJA COMO O MATERIAL ESTÁ AJUDANDO NO DIA A DIA DA OFICINA
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-700 font-medium mt-2 mb-6 max-w-[520px]">
          Relatos de mecânicos que já estão consultando as fichas durante os diagnósticos.
        </p>

        {/* 3 Side by side images (3 columns for cleaner, bigger view) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3.5 w-full">
          {images.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item.src)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md border border-slate-300 cursor-pointer hover:shadow-xl hover:border-amber-400 transition-all duration-200 flex flex-col"
              title="Clique para ampliar"
            >
              <div className="w-full bg-slate-100 overflow-hidden flex items-center justify-center p-1">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={280}
                  height={500}
                />
              </div>

              {/* Hover / Tap zoom button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                <div className="bg-black/85 text-white text-[10px] font-bold py-1.5 px-2.5 rounded-full flex items-center gap-1 shadow-lg border border-amber-400/50">
                  <ZoomIn className="w-3 h-3 text-amber-400" />
                  <span>Ampliar</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-slate-500 mt-3 font-medium flex items-center gap-1">
          <ZoomIn className="w-3.5 h-3.5 text-slate-400" />
          <span>Toque nas imagens para ampliar e ler na íntegra</span>
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-lg max-h-[92vh] w-full flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 sm:-right-4 text-white hover:text-amber-400 p-2 rounded-full bg-black/60 hover:bg-black/90 transition-all cursor-pointer border border-white/20"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Depoimento ampliado"
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
}
