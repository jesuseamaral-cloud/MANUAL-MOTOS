export default function FourChapterCovers() {
  return (
    <div className="w-full max-w-[540px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 my-4 px-1 select-none">
      {/* Cover 1: A ORDEM QUE NUNCA MUDA */}
      <div className="bg-white rounded-lg shadow-md border border-slate-300 overflow-hidden flex flex-col justify-between p-2">
        <div className="border-b-2 border-slate-900 pb-1 text-center">
          <span className="text-[7px] sm:text-[8px] font-black uppercase text-slate-900 leading-tight block">
            A ORDEM QUE NUNCA MUDA
          </span>
        </div>
        <div className="py-2 space-y-1 text-[6.5px] sm:text-[7px] text-slate-700">
          <div className="flex items-center gap-1">
            <span className="font-bold text-red-600">1</span>
            <span>Checar sintoma</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-red-600">2</span>
            <span>Isolar a falha</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-red-600">3</span>
            <span>Testar componentes</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-red-600">4</span>
            <span>Checar os valores</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-red-600">5</span>
            <span>Reproduzir defeito</span>
          </div>
        </div>
        <div className="text-[6px] text-slate-400 text-center border-t border-slate-200 pt-1">
          Guia de Entrada
        </div>
      </div>

      {/* Cover 2: I PARTIDA E CARGA */}
      <div className="bg-slate-900 text-white rounded-lg shadow-md border border-slate-700 overflow-hidden flex flex-col justify-between p-2">
        <div className="border-b border-amber-400 pb-1 text-center">
          <span className="text-amber-400 text-[9px] font-black block">I</span>
          <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tight block">
            PARTIDA E CARGA
          </span>
        </div>
        <div className="py-3 flex flex-col items-center justify-center text-center">
          <div className="text-[12px] text-amber-400">⚡</div>
          <div className="text-[7px] text-slate-300 font-bold uppercase mt-1">
            25 fichas
          </div>
          <div className="text-[6px] text-slate-400">
            páginas 25 a 50
          </div>
        </div>
        <div className="text-[6px] text-amber-300 text-center border-t border-slate-800 pt-1 uppercase font-bold">
          Bateria & Relés
        </div>
      </div>

      {/* Cover 3: II ALIMENTAÇÃO */}
      <div className="bg-slate-900 text-white rounded-lg shadow-md border border-slate-700 overflow-hidden flex flex-col justify-between p-2">
        <div className="border-b border-blue-400 pb-1 text-center">
          <span className="text-blue-400 text-[9px] font-black block">II</span>
          <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tight block">
            ALIMENTAÇÃO
          </span>
        </div>
        <div className="py-2 flex flex-col items-center justify-center text-center gap-1">
          <div className="grid grid-cols-2 gap-1 w-full text-[6px] text-slate-300">
            <div className="bg-slate-800 p-0.5 rounded">Carburada</div>
            <div className="bg-slate-800 p-0.5 rounded">Injetada</div>
          </div>
          <div className="text-[7px] text-slate-300 font-bold uppercase">
            25 fichas
          </div>
          <div className="text-[6px] text-slate-400">
            páginas 75 a 100
          </div>
        </div>
        <div className="text-[6px] text-blue-300 text-center border-t border-slate-800 pt-1 uppercase font-bold">
          Bomba & Bicos
        </div>
      </div>

      {/* Cover 4: IV MOTOR */}
      <div className="bg-slate-900 text-white rounded-lg shadow-md border border-slate-700 overflow-hidden flex flex-col justify-between p-2">
        <div className="border-b border-emerald-400 pb-1 text-center">
          <span className="text-emerald-400 text-[9px] font-black block">IV</span>
          <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tight block">
            MOTOR
          </span>
        </div>
        <div className="py-3 flex flex-col items-center justify-center text-center">
          <div className="text-[12px] text-emerald-400">🔧</div>
          <div className="text-[7px] text-slate-300 font-bold uppercase mt-1">
            20 fichas
          </div>
          <div className="text-[6px] text-slate-400">
            páginas 101 a 120
          </div>
        </div>
        <div className="text-[6px] text-emerald-300 text-center border-t border-slate-800 pt-1 uppercase font-bold">
          Compressão & Válvulas
        </div>
      </div>
    </div>
  );
}
