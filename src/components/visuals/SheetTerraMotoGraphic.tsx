export default function SheetTerraMotoGraphic() {
  return (
    <div className="w-full max-w-[480px] mx-auto my-6 bg-white rounded-lg shadow-xl border border-slate-300 overflow-hidden flex flex-col select-none">
      {/* Header */}
      <div className="bg-[#111215] text-white p-3 text-center border-b-2 border-amber-400">
        <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-wider block">
          ANTES DE ENCONTRAR A FERRUGEM - PÁGINA 12
        </span>
        <h3 className="text-[16px] sm:text-[19px] font-black uppercase text-white leading-tight mt-0.5">
          O TERRA DA MOTO:
        </h3>
        <h4 className="text-[14px] sm:text-[16px] font-black uppercase text-amber-300 leading-tight">
          OS TRÊS TRECHOS QUE VOCÊ MEDE
        </h4>
        <p className="text-[10px] sm:text-[11px] text-slate-300 italic mt-0.5">
          Terra ruim solta defeito de peça cara.
        </p>
      </div>

      {/* Motorcycle Blueprint Diagram with 3 Measurement Points */}
      <div className="p-3 bg-slate-100 flex flex-col items-center">
        {/* Motorcycle Outline graphic with pins */}
        <div className="relative w-full max-w-[340px] aspect-[16/9] bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center p-2 overflow-hidden shadow-inner">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

          {/* Motorcycle Silhouette SVG */}
          <svg className="w-4/5 h-4/5 text-slate-400 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="5.5" cy="17.5" r="3.5" />
            <circle cx="18.5" cy="17.5" r="3.5" />
            <path d="M15 6h-3l-2.5 5.5H5.5" />
            <path d="M18.5 17.5l-3-7.5H11" />
            <path d="M15 17.5L10 11.5" />
            <path d="M14 6h3" />
          </svg>

          {/* Pin 1: Bateria -> Chassi */}
          <div className="absolute left-[34%] top-[45%] flex flex-col items-center">
            <span className="w-4 h-4 rounded-full bg-red-600 text-white text-[8px] font-black flex items-center justify-center ring-2 ring-white shadow">
              1
            </span>
            <span className="bg-black/90 text-amber-300 text-[6px] px-1 rounded font-bold whitespace-nowrap mt-0.5">
              Bateria → Chassi
            </span>
          </div>

          {/* Pin 2: Chassi -> Motor */}
          <div className="absolute left-[48%] top-[55%] flex flex-col items-center">
            <span className="w-4 h-4 rounded-full bg-red-600 text-white text-[8px] font-black flex items-center justify-center ring-2 ring-white shadow">
              2
            </span>
            <span className="bg-black/90 text-amber-300 text-[6px] px-1 rounded font-bold whitespace-nowrap mt-0.5">
              Chassi → Motor
            </span>
          </div>

          {/* Pin 3: Painel / Farol */}
          <div className="absolute right-[22%] top-[30%] flex flex-col items-center">
            <span className="w-4 h-4 rounded-full bg-red-600 text-white text-[8px] font-black flex items-center justify-center ring-2 ring-white shadow">
              3
            </span>
            <span className="bg-black/90 text-amber-300 text-[6px] px-1 rounded font-bold whitespace-nowrap mt-0.5">
              Painel → Chassi
            </span>
          </div>
        </div>

        {/* 3 Points detail */}
        <div className="grid grid-cols-3 gap-1.5 w-full mt-2.5 text-[8px] sm:text-[9px]">
          <div className="bg-white border border-slate-300 rounded p-1.5 text-center">
            <span className="font-bold text-red-600 block">PONTO 1</span>
            <span className="text-slate-600">Negativo até chassi</span>
            <span className="font-extrabold text-emerald-700 block mt-0.5">até 0,05 V</span>
          </div>
          <div className="bg-white border border-slate-300 rounded p-1.5 text-center">
            <span className="font-bold text-red-600 block">PONTO 2</span>
            <span className="text-slate-600">Chassi até o motor</span>
            <span className="font-extrabold text-emerald-700 block mt-0.5">até 0,10 V</span>
          </div>
          <div className="bg-white border border-slate-300 rounded p-1.5 text-center">
            <span className="font-bold text-red-600 block">PONTO 3</span>
            <span className="text-slate-600">Painel/farol ao chassi</span>
            <span className="font-extrabold text-emerald-700 block mt-0.5">até 0,10 V</span>
          </div>
        </div>
      </div>

      {/* Callout box: QUANDO DESCONFIAR DO TERRA */}
      <div className="p-3 bg-amber-50/50 border-t border-amber-200">
        <div className="text-[10px] font-black text-amber-900 uppercase mb-1.5 flex items-center gap-1">
          <span>⚠️</span> QUANDO DESCONFIAR DO TERRA:
        </div>
        <ul className="text-[9px] sm:text-[10px] text-slate-700 space-y-1 pl-1">
          <li className="flex items-start gap-1">
            <span className="text-amber-600 font-bold">•</span>
            <span>Partida gira devagar sem a bateria estar fraca</span>
          </li>
          <li className="flex items-start gap-1">
            <span className="text-amber-600 font-bold">•</span>
            <span>Farol oscila com a aceleração</span>
          </li>
          <li className="flex items-start gap-1">
            <span className="text-amber-600 font-bold">•</span>
            <span>Código de injeção que aparece e some</span>
          </li>
          <li className="flex items-start gap-1">
            <span className="text-amber-600 font-bold">•</span>
            <span>Painel apaga ao acionar a partida</span>
          </li>
          <li className="flex items-start gap-1">
            <span className="text-amber-600 font-bold">•</span>
            <span>Dois sistemas diferentes falhando ao mesmo tempo</span>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-amber-300 p-2 text-center text-[9px] sm:text-[10px] font-bold uppercase tracking-wide">
        Meça os três antes de suspeitar do módulo.
      </div>
    </div>
  );
}
