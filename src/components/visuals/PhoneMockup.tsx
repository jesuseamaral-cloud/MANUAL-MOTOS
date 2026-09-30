export default function PhoneMockup() {
  const images = [
    {
      src: 'https://i.postimg.cc/GpKysKfW/Imagem-do-Chat-GPT-29-de-set-de-2026-19-37-49-(1).png',
      alt: 'Ficha de Diagnóstico de Motos - Visualização 1',
    },
    {
      src: 'https://i.postimg.cc/qR7CcnVh/Imagem-do-Chat-GPT-29-de-set-de-2026-19-20-59-(1).png',
      alt: 'Ficha de Diagnóstico de Motos - Visualização 2',
    },
    {
      src: 'https://i.postimg.cc/P5kp30sW/Imagem-do-Chat-GPT-29-de-set-de-2026-19-20-22-(1).png',
      alt: 'Ficha de Diagnóstico de Motos - Visualização 3',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-5 sm:gap-6 my-6 select-none">
      {images.map((item, idx) => (
        <div key={idx} className="w-[245px] sm:w-[220px] md:w-[205px] flex justify-center">
          <div className="w-full bg-white rounded-xl shadow-lg border border-slate-300/90 overflow-hidden p-2">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto object-contain rounded-lg block"
              loading={idx === 0 ? 'eager' : 'lazy'}
              decoding="async"
              width={245}
              height={340}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
