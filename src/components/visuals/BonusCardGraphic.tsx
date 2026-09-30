interface BonusGraphicProps {
  bonusNumber: number;
  title: string;
  subtitle?: string;
  themeColor: 'yellow' | 'blue' | 'green' | 'orange' | 'purple' | 'red';
  iconType: string;
}

export default function BonusCardGraphic({
  bonusNumber,
  title,
  subtitle,
  themeColor,
  iconType,
}: BonusGraphicProps) {
  const getBorderColor = () => {
    switch (themeColor) {
      case 'yellow':
        return 'border-[#eab308]';
      case 'blue':
        return 'border-sky-500';
      case 'green':
        return 'border-emerald-500';
      case 'orange':
        return 'border-amber-500';
      default:
        return 'border-amber-500';
    }
  };

  return (
    <div className={`relative w-full aspect-[1/1.25] bg-[#0c0d11] rounded-lg border-2 ${getBorderColor()} p-2 flex flex-col justify-between overflow-hidden shadow-md select-none`}>
      {/* Top Banner Tag */}
      <div className="bg-[#f3b318] text-black text-center py-0.5 px-1 rounded-sm">
        <span className="text-[7px] font-black uppercase tracking-wider block">
          BÔNUS #{bonusNumber}
        </span>
      </div>

      {/* Title */}
      <div className="text-center my-auto py-1">
        <h4 className="text-[11px] sm:text-[12px] font-black uppercase text-white leading-tight">
          {title}
        </h4>
        {subtitle && (
          <p className="text-[8px] text-amber-300 font-bold uppercase mt-0.5 leading-tight">
            {subtitle}
          </p>
        )}
      </div>

      {/* Center Icon / Mockup Detail */}
      <div className="bg-[#171922] rounded p-2 border border-white/10 flex flex-col items-center justify-center my-1">
        <div className="text-xl sm:text-2xl">{iconType}</div>
        <div className="text-[6.5px] text-slate-300 uppercase tracking-wider mt-1 font-semibold">
          Material Complementar
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1a1c24] text-[6.5px] text-slate-300 text-center py-0.5 rounded font-bold uppercase">
        PDF Pronto para celular ou impressão
      </div>
    </div>
  );
}
