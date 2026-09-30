interface HeroBundleGraphicProps {
  className?: string;
  containerClassName?: string;
  onClick?: () => void;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'auto' | 'low';
}

export default function HeroBundleGraphic({
  className = '',
  containerClassName = '',
  onClick,
  loading = 'eager',
  fetchPriority = 'high',
}: HeroBundleGraphicProps) {
  return (
    <div 
      className={`relative w-full mx-auto flex justify-center items-center select-none ${containerClassName || 'max-w-[500px] my-5 px-2'}`}
      onClick={onClick}
    >
      <img
        src="https://i.postimg.cc/8z3c63kP/Imagem-do-Chat-GPT-29-de-set-de-2026-18-51-24.png"
        alt="+120 Fichas Práticas de Diagnóstico de Motos por Sintoma"
        className={`w-full h-auto object-contain rounded-lg drop-shadow-2xl ${className || 'max-h-[480px]'}`}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        width={500}
        height={350}
      />
    </div>
  );
}
