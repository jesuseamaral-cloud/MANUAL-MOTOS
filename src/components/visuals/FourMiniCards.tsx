export default function FourMiniCards() {
  return (
    <div className="w-full max-w-[540px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 my-6 px-1 select-none">
      {/* Card 1: Trocar Peça Até Acertar */}
      <div className="bg-white rounded-lg shadow-md border border-slate-300 overflow-hidden flex flex-col justify-between">
        <div className="bg-red-700 text-white text-center p-1.5 leading-tight">
          <span className="text-[7px] sm:text-[8px] font-black uppercase block">TROCAR PEÇA ATÉ ACERTAR:</span>
          <span className="text-[6px] sm:text-[7px] text-amber-200 block font-semibold">A CONTA QUE VOCÊ JÁ PAGOU</span>
        </div>
        <div className="p-1.5 flex flex-col justify-between flex-1 text-[7px] text-slate-700 space-y-1">
          <div className="bg-slate-50 p-1 rounded border border-slate-200">
            <span className="font-bold text-red-600 block">1. Troca o regulador</span>
            <span className="text-slate-500">R$ 180,00</span>
          </div>
          <div className="bg-slate-50 p-1 rounded border border-slate-200">
            <span className="font-bold text-red-600 block">2. Troca o estator</span>
            <span className="text-slate-500">R$ 240,00</span>
          </div>
          <div className="bg-slate-50 p-1 rounded border border-slate-200">
            <span className="font-bold text-red-600 block">3. Troca a bateria</span>
            <span className="text-slate-500">R$ 190,00</span>
          </div>
          <div className="bg-red-50 text-red-800 text-[6.5px] p-1 rounded font-bold text-center border border-red-200">
            Trocou 3 peças e o defeito era um terminal!
          </div>
        </div>
      </div>

      {/* Card 2: Do Sintoma até a Peça */}
      <div className="bg-white rounded-lg shadow-md border border-slate-300 overflow-hidden flex flex-col justify-between">
        <div className="bg-slate-900 text-white text-center p-1.5 leading-tight">
          <span className="text-[7px] sm:text-[8px] font-black uppercase block text-amber-300">DO SINTOMA ATÉ A PEÇA,</span>
          <span className="text-[6px] sm:text-[7px] text-slate-200 block font-semibold">SEM GASTAR ANTES</span>
        </div>
        <div className="p-1.5 flex flex-col justify-between flex-1 text-[6.5px] sm:text-[7px] text-slate-700 space-y-1">
          <div className="flex items-center gap-1">
            <span className="w-3.5 h-3.5 rounded bg-amber-400 text-black font-black flex items-center justify-center shrink-0">1</span>
            <span>Sintoma como chega</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3.5 h-3.5 rounded bg-amber-400 text-black font-black flex items-center justify-center shrink-0">2</span>
            <span>Causas prováveis</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3.5 h-3.5 rounded bg-amber-400 text-black font-black flex items-center justify-center shrink-0">3</span>
            <span>Sequência de testes</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3.5 h-3.5 rounded bg-amber-400 text-black font-black flex items-center justify-center shrink-0">4</span>
            <span>O que a leitura significa</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3.5 h-3.5 rounded bg-amber-400 text-black font-black flex items-center justify-center shrink-0">5</span>
            <span>Próximo passo</span>
          </div>
          <div className="bg-emerald-100 text-emerald-800 text-[6.5px] p-0.5 rounded font-bold text-center border border-emerald-300">
            ✔ PEÇA IDENTIFICADA
          </div>
        </div>
      </div>

      {/* Card 3: O Multímetro na Moto */}
      <div className="bg-white rounded-lg shadow-md border border-slate-300 overflow-hidden flex flex-col justify-between">
        <div className="bg-slate-900 text-white text-center p-1.5 leading-tight">
          <span className="text-[7px] sm:text-[8px] font-black uppercase block text-white">O MULTÍMETRO NA MOTO:</span>
          <span className="text-[6px] sm:text-[7px] text-amber-300 block font-semibold">AS QUATRO POSIÇÕES QUE VOCÊ USA</span>
        </div>
        <div className="p-1.5 flex flex-col items-center justify-around flex-1">
          <div className="w-12 h-16 bg-amber-400 rounded-lg border-2 border-black p-1 flex flex-col items-center shadow">
            <div className="w-full bg-[#94a3b8] rounded h-3 text-[6px] font-mono text-black font-black text-center flex items-center justify-center">
              12.65
            </div>
            <div className="w-5 h-5 rounded-full bg-slate-900 border border-slate-800 my-auto flex items-center justify-center">
              <div className="w-2 h-0.5 bg-red-500" />
            </div>
          </div>
          <div className="text-[6px] text-slate-700 font-bold text-center mt-1 space-y-0.5">
            <div>• Continuidade (bipe)</div>
            <div>• Tensão contínua (V=)</div>
            <div>• Tensão alternada (V~)</div>
            <div>• Resistência (Ω)</div>
          </div>
        </div>
      </div>

      {/* Card 4: Os Seis Baratos Antes de Condenar */}
      <div className="bg-white rounded-lg shadow-md border border-slate-300 overflow-hidden flex flex-col justify-between">
        <div className="bg-slate-900 text-white text-center p-1.5 leading-tight">
          <span className="text-[7px] sm:text-[8px] font-black uppercase block text-amber-300">OS SEIS BARATOS</span>
          <span className="text-[6px] sm:text-[7px] text-slate-200 block font-semibold">ANTES DE CONDENAR</span>
        </div>
        <div className="p-1.5 flex flex-col justify-between flex-1 text-[6.5px] sm:text-[7px] text-slate-700 space-y-1">
          <div className="flex items-center gap-1">
            <span className="font-bold text-amber-600">1</span>
            <span>Fusíveis oxidados</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-amber-600">2</span>
            <span>Terminais frouxos</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-amber-600">3</span>
            <span>Cabo e interruptor</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-amber-600">4</span>
            <span>Relé contato queimado</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-amber-600">5</span>
            <span>Mau contato chicote</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-amber-600">6</span>
            <span>Linha de aterramento</span>
          </div>
        </div>
      </div>
    </div>
  );
}
