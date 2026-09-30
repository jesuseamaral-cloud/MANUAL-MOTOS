export default function SheetEletricaCombustivelGraphic() {
  return (
    <div className="w-full max-w-[480px] mx-auto my-6 bg-white rounded-lg shadow-xl border border-slate-300 overflow-hidden flex flex-col select-none">
      {/* Header */}
      <div className="bg-[#111215] text-white p-3 text-center border-b-2 border-amber-400">
        <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-wider block">
          ANTES DE CONDENAR A FERRAMENTA - PÁGINA 15
        </span>
        <h3 className="text-[14px] sm:text-[16px] font-black uppercase text-amber-300 leading-tight mt-0.5">
          ELÉTRICA, COMBUSTÍVEL OU MECÂNICA:
        </h3>
        <h4 className="text-[13px] sm:text-[15px] font-bold uppercase text-white leading-tight">
          EM QUATRO CONFERÊNCIAS
        </h4>
        <p className="text-[10px] sm:text-[11px] text-slate-300 italic mt-0.5">
          Separe os três mundos antes de abrir qualquer ficha.
        </p>
      </div>

      {/* Flowchart Diagram */}
      <div className="p-4 bg-slate-50 flex flex-col items-center gap-3">
        {/* Step 1 */}
        <div className="w-full max-w-[380px] flex items-center gap-2">
          <div className="flex-1 bg-white border-2 border-slate-400 rounded-lg p-2 text-center shadow-sm">
            <span className="text-[10px] sm:text-[11px] font-black text-slate-800 uppercase block">
              1. O motor gira normal?
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[8px] font-black text-red-600 bg-red-100 px-1 rounded">NÃO</span>
            <span className="text-slate-400 text-xs">→</span>
          </div>
          <div className="w-[130px] bg-red-600 text-white rounded p-1.5 text-center shadow">
            <span className="text-[8px] sm:text-[9px] font-black uppercase block leading-tight">
              PARTIDA E CARGA
            </span>
            <span className="text-[7px] text-red-100 block">página 25</span>
          </div>
        </div>

        <div className="text-slate-400 text-xs font-bold -my-1">↓ SIM</div>

        {/* Step 2 */}
        <div className="w-full max-w-[380px] flex items-center gap-2">
          <div className="flex-1 bg-white border-2 border-slate-400 rounded-lg p-2 text-center shadow-sm">
            <span className="text-[10px] sm:text-[11px] font-black text-slate-800 uppercase block">
              2. Tem faísca forte?
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[8px] font-black text-red-600 bg-red-100 px-1 rounded">NÃO</span>
            <span className="text-slate-400 text-xs">→</span>
          </div>
          <div className="w-[130px] bg-blue-600 text-white rounded p-1.5 text-center shadow">
            <span className="text-[8px] sm:text-[9px] font-black uppercase block leading-tight">
              IGNIÇÃO
            </span>
            <span className="text-[7px] text-blue-100 block">página 51</span>
          </div>
        </div>

        <div className="text-slate-400 text-xs font-bold -my-1">↓ SIM</div>

        {/* Step 3 */}
        <div className="w-full max-w-[380px] flex items-center gap-2">
          <div className="flex-1 bg-white border-2 border-slate-400 rounded-lg p-2 text-center shadow-sm">
            <span className="text-[10px] sm:text-[11px] font-black text-slate-800 uppercase block">
              3. Chega combustível com pressão?
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[8px] font-black text-red-600 bg-red-100 px-1 rounded">NÃO</span>
            <span className="text-slate-400 text-xs">→</span>
          </div>
          <div className="w-[130px] bg-amber-600 text-white rounded p-1.5 text-center shadow">
            <span className="text-[8px] sm:text-[9px] font-black uppercase block leading-tight">
              ALIMENTAÇÃO
            </span>
            <span className="text-[7px] text-amber-100 block">página 75</span>
          </div>
        </div>

        <div className="text-slate-400 text-xs font-bold -my-1">↓ SIM</div>

        {/* Step 4 */}
        <div className="w-full max-w-[380px] flex items-center gap-2">
          <div className="flex-1 bg-white border-2 border-slate-400 rounded-lg p-2 text-center shadow-sm">
            <span className="text-[10px] sm:text-[11px] font-black text-slate-800 uppercase block">
              4. Tem compressão?
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[8px] font-black text-red-600 bg-red-100 px-1 rounded">NÃO</span>
            <span className="text-slate-400 text-xs">→</span>
          </div>
          <div className="w-[130px] bg-emerald-700 text-white rounded p-1.5 text-center shadow">
            <span className="text-[8px] sm:text-[9px] font-black uppercase block leading-tight">
              MOTOR
            </span>
            <span className="text-[7px] text-emerald-100 block">página 101</span>
          </div>
        </div>

        {/* Final Conclusion Box */}
        <div className="w-full max-w-[380px] bg-slate-800 text-emerald-300 rounded-lg p-2 text-center border border-emerald-500/30 text-[9px] sm:text-[10px] font-bold">
          ✔ Se os quatro passaram: A falha está na regulagem fina ou nos sensores específicos.
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-amber-300 p-2 text-center text-[9px] sm:text-[10px] font-bold uppercase tracking-wide">
        Quatro conferências, cinco minutos, e você já sabe onde procurar.
      </div>
    </div>
  );
}
