import { Zap, Flame, Fuel, Cog, Wrench } from 'lucide-react';

export default function SheetCoverGraphic() {
  return (
    <div className="w-full max-w-[480px] mx-auto my-6 bg-white rounded-lg shadow-xl border border-slate-300 overflow-hidden flex flex-col select-none">
      {/* Yellow Header */}
      <div className="bg-[#f3b318] text-black text-center py-2 px-3 border-b-2 border-black/10">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">
          BIBLIOTECA DE DIAGNÓSTICOS
        </span>
        <h3 className="text-[20px] sm:text-[26px] font-black uppercase tracking-tight leading-none mt-0.5">
          +120 FICHAS DE
        </h3>
        <h4 className="text-[17px] sm:text-[22px] font-black uppercase tracking-tight leading-none text-black">
          DIAGNÓSTICO DE MOTOS
        </h4>
        <h5 className="text-[15px] sm:text-[19px] font-black uppercase tracking-tight leading-none text-slate-900">
          POR SINTOMA
        </h5>
        <p className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wide text-slate-900 mt-1">
          Ache a peça antes de comprar
        </p>
      </div>

      {/* Central Visual Showcase */}
      <div className="relative bg-gradient-to-b from-[#181a20] to-[#0c0d10] p-4 flex flex-col items-center text-white">
        {/* Multimeter, wiring, battery display */}
        <div className="flex items-center justify-center gap-4 w-full py-4">
          {/* Digital Multimeter Illustration */}
          <div className="w-24 sm:w-28 h-36 sm:h-40 bg-amber-400 rounded-xl border-4 border-black p-2 flex flex-col items-center shadow-2xl relative">
            {/* LCD Screen */}
            <div className="w-full bg-[#94a3b8] rounded-md border-2 border-slate-700 py-1 px-2 text-black font-mono font-bold text-center text-sm shadow-inner">
              12.65 <span className="text-[9px]">V</span>
            </div>
            {/* Rotary Dial */}
            <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-800 my-auto flex items-center justify-center relative shadow">
              <div className="w-5 h-1 bg-red-500 rounded" />
              <div className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
            {/* Lead jacks */}
            <div className="w-full flex justify-around text-[8px] font-bold text-black mt-1">
              <span className="flex items-center gap-0.5 text-red-700">● VΩ</span>
              <span className="flex items-center gap-0.5 text-slate-900">● COM</span>
            </div>
          </div>

          {/* Diagnostic indicators / Motorcycle electrical circuit elements */}
          <div className="flex flex-col gap-2 max-w-[180px] text-xs">
            <div className="bg-black/60 border border-white/10 rounded p-1.5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] font-bold">✔</div>
              <span className="text-[10px] text-slate-200 font-semibold leading-tight">Valores e limites para cada teste</span>
            </div>
            <div className="bg-black/60 border border-white/10 rounded p-1.5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-400 flex items-center justify-center text-[8px] font-bold text-black">⚡</div>
              <span className="text-[10px] text-slate-200 font-semibold leading-tight">Queda de tensão na prática</span>
            </div>
            <div className="bg-black/60 border border-white/10 rounded p-1.5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-sky-400 flex items-center justify-center text-[8px] font-bold text-black">🔍</div>
              <span className="text-[10px] text-slate-200 font-semibold leading-tight">Elimine o erro antes da troca</span>
            </div>
          </div>
        </div>

        {/* Subtitle tag */}
        <div className="w-full text-center py-1 text-[9px] sm:text-[10px] text-slate-300 uppercase tracking-wider font-semibold border-t border-white/10">
          Carburador e Injeção | Qualquer moto | Consulta pelo celular ou moto na bancada
        </div>
      </div>

      {/* 5 Bottom Category Blocks */}
      <div className="grid grid-cols-5 bg-slate-50 border-t border-slate-300 divide-x divide-slate-200 text-center py-2.5 px-1 text-slate-800">
        <div className="flex flex-col items-center">
          <Zap className="w-4 h-4 text-amber-500 mb-0.5" />
          <span className="text-[8px] sm:text-[9px] font-bold uppercase">PARTIDA</span>
        </div>
        <div className="flex flex-col items-center">
          <Flame className="w-4 h-4 text-red-500 mb-0.5" />
          <span className="text-[8px] sm:text-[9px] font-bold uppercase">IGNIÇÃO</span>
        </div>
        <div className="flex flex-col items-center">
          <Fuel className="w-4 h-4 text-blue-500 mb-0.5" />
          <span className="text-[8px] sm:text-[9px] font-bold uppercase leading-none">ALIMENTAÇÃO</span>
        </div>
        <div className="flex flex-col items-center">
          <Cog className="w-4 h-4 text-slate-600 mb-0.5" />
          <span className="text-[8px] sm:text-[9px] font-bold uppercase leading-none">TRANSMISSÃO</span>
        </div>
        <div className="flex flex-col items-center">
          <Wrench className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[8px] sm:text-[9px] font-bold uppercase">MOTOR</span>
        </div>
      </div>
    </div>
  );
}
