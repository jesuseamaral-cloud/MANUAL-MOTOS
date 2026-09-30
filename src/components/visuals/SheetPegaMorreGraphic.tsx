export default function SheetPegaMorreGraphic() {
  return (
    <div className="w-full max-w-[480px] mx-auto my-6 bg-white rounded-lg shadow-xl border border-slate-300 overflow-hidden flex flex-col select-none">
      {/* Header */}
      <div className="bg-[#111215] text-white p-3 text-center border-b-2 border-amber-400">
        <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-wider block">
          DEFEITO INTERMITENTE - PÁGINA 34
        </span>
        <h3 className="text-[17px] sm:text-[20px] font-black uppercase text-amber-300 leading-tight mt-0.5">
          PEGA E MORRE EM SEGUIDA
        </h3>
      </div>

      {/* Two columns: Como a moto chega vs Como o dono conta */}
      <div className="grid grid-cols-2 gap-2 p-3 bg-amber-50/60 border-b border-amber-200 text-xs">
        <div className="bg-white border border-slate-300 rounded p-2">
          <div className="text-[9px] font-black text-slate-800 uppercase flex items-center gap-1">
            <span>🏍️</span> COMO A MOTO CHEGA:
          </div>
          <p className="text-[9px] sm:text-[10px] text-slate-600 mt-1 font-medium leading-tight">
            Funcionou de 2 a 5 segundos e apagou sem motivo aparente.
          </p>
        </div>

        <div className="bg-white border border-slate-300 rounded p-2">
          <div className="text-[9px] font-black text-slate-800 uppercase flex items-center gap-1">
            <span>🗣️</span> COMO O DONO CONTA:
          </div>
          <p className="text-[9px] sm:text-[10px] text-slate-600 mt-1 font-medium leading-tight">
            &ldquo;Ela liga normal, dá na partida e morre na mesma hora.&rdquo;
          </p>
        </div>
      </div>

      {/* Sequência de verificação numerada 1 a 6 */}
      <div className="p-3 bg-white">
        <div className="text-[10px] font-black text-slate-900 uppercase mb-2">
          SEQUÊNCIA DE TESTES NA BANCADA:
        </div>
        <div className="space-y-1.5 text-[9px] sm:text-[10px] text-slate-700 font-medium">
          <div className="flex items-center gap-2 p-1.5 bg-slate-50 rounded border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[9px] shrink-0">1</span>
            <span><strong>Bateria:</strong> tensão cai abaixo de 10,5V durante a partida?</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 bg-slate-50 rounded border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[9px] shrink-0">2</span>
            <span><strong>Chave de ignição:</strong> mau contato na chave ou corte da ignição</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 bg-slate-50 rounded border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[9px] shrink-0">3</span>
            <span><strong>Bomba de combustível:</strong> pressuriza e desliga ou nem mantém pressão?</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 bg-slate-50 rounded border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[9px] shrink-0">4</span>
            <span><strong>Combustível adulterado:</strong> atinge o motor mas não queima direito</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 bg-slate-50 rounded border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[9px] shrink-0">5</span>
            <span><strong>Sensor de tombamento / interruptor pezinho:</strong> com falso defeito</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 bg-slate-50 rounded border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[9px] shrink-0">6</span>
            <span><strong>Módulo ECU ou CDI:</strong> testar somente se os outros baterem 100% certo</span>
          </div>
        </div>

        {/* 3 Multimeter LCD screens */}
        <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-slate-200">
          <div className="bg-slate-900 border-2 border-slate-700 rounded p-1.5 text-center">
            <span className="text-[7px] text-slate-400 block font-bold uppercase">Saudável</span>
            <span className="text-emerald-400 font-mono text-xs sm:text-sm font-black">0.08 V</span>
          </div>
          <div className="bg-slate-900 border-2 border-slate-700 rounded p-1.5 text-center">
            <span className="text-[7px] text-amber-400 block font-bold uppercase">Suspeito</span>
            <span className="text-amber-400 font-mono text-xs sm:text-sm font-black">0.48 V</span>
          </div>
          <div className="bg-slate-900 border-2 border-red-700 rounded p-1.5 text-center">
            <span className="text-[7px] text-red-400 block font-bold uppercase">Interrompido</span>
            <span className="text-red-400 font-mono text-xs sm:text-sm font-black">O.L</span>
          </div>
        </div>
      </div>

      {/* Red Callout: ERRO CARO A EVITAR */}
      <div className="bg-red-50 border-t-2 border-red-500 p-2.5">
        <div className="text-[9px] sm:text-[10px] font-black text-red-700 uppercase flex items-center gap-1 mb-0.5">
          <span>❌</span> ERRO CARO A EVITAR:
        </div>
        <p className="text-[8px] sm:text-[9px] text-slate-700 leading-tight">
          Trocar módulo ou sensor antes de conferir o básico — queda de voltagem ou conector oxidado faz a moto morrer e o dono volta com a mesma queixa.
        </p>
      </div>
    </div>
  );
}
