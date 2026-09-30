export default function SheetQuedaTensaoGraphic() {
  return (
    <div className="w-full max-w-[480px] mx-auto my-6 bg-white rounded-lg shadow-xl border border-slate-300 overflow-hidden flex flex-col select-none">
      {/* Black and Yellow Header */}
      <div className="bg-[#111215] text-white p-3 text-center border-b-2 border-amber-400">
        <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-wider block">
          QUEDA DE TENSÃO:
        </span>
        <h3 className="text-[15px] sm:text-[17px] font-black uppercase text-amber-300 leading-tight mt-0.5">
          O TESTE QUE ACHA O QUE O BIPE DE CONTINUIDADE DEIXA PASSAR
        </h3>
        <p className="text-[10px] sm:text-[11px] text-slate-300 italic mt-0.5">
          Pega sujeira, mau contato e fio que só tá no fiapo...
        </p>
      </div>

      {/* Red/Orange Warning Stripe */}
      <div className="bg-[#c2410c] text-white text-center py-1 px-2 text-[10px] sm:text-[11px] font-bold">
        Achar o mau contato antes de condenar a peça cara.
      </div>

      {/* Comparison: NO BIPE vs NA QUEDA DE TENSÃO */}
      <div className="p-3 bg-slate-50 border-b border-slate-200">
        <div className="grid grid-cols-2 gap-2 text-xs">
          {/* Left: No Bipe */}
          <div className="bg-white border-2 border-red-500/60 rounded p-2 flex flex-col">
            <div className="bg-red-600 text-white text-[9px] font-black uppercase text-center py-0.5 rounded">
              NO BIPE DE CONTINUIDADE
            </div>
            <div className="my-2 flex flex-col items-center">
              <div className="w-14 h-18 bg-amber-400 rounded border border-black p-1 flex flex-col items-center">
                <div className="w-full bg-slate-300 text-[8px] font-mono text-center font-bold text-black rounded">
                  0.00 Ω
                </div>
                <div className="text-[10px] text-slate-900 mt-1">🔊 Bip!</div>
                <div className="w-3 h-3 rounded-full bg-black my-auto" />
              </div>
            </div>
            <p className="text-[8px] sm:text-[9px] text-slate-600 text-center leading-tight">
              Multímetro apita e acusa continuidade normal. Circuito parece perfeito... mas falha na hora que a moto pede corrente.
            </p>
          </div>

          {/* Right: Na Queda de Tensão */}
          <div className="bg-white border-2 border-emerald-600/70 rounded p-2 flex flex-col">
            <div className="bg-emerald-600 text-white text-[9px] font-black uppercase text-center py-0.5 rounded">
              NA QUEDA DE TENSÃO
            </div>
            <div className="my-2 flex flex-col items-center">
              <div className="w-14 h-18 bg-amber-400 rounded border border-black p-1 flex flex-col items-center shadow">
                <div className="w-full bg-red-100 text-[10px] font-mono text-center font-black text-red-600 rounded">
                  0,84 V
                </div>
                <div className="text-[8px] font-bold text-red-700 mt-0.5">ALTA QUEDA!</div>
                <div className="w-3 h-3 rounded-full bg-black my-auto" />
              </div>
            </div>
            <p className="text-[8px] sm:text-[9px] text-slate-600 text-center leading-tight">
              Uma ponta em cada ponta do mesmo fio ou conexão trabalhando, e o defeito exato aparece na tela sem desconfiar à toa.
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="p-3 bg-white">
        <table className="w-full text-[9px] sm:text-[10px] border border-slate-300">
          <thead>
            <tr className="bg-slate-800 text-white uppercase text-[8px] sm:text-[9px]">
              <th className="py-1 px-2 text-left">TRECHO</th>
              <th className="py-1 px-2 text-right">QUEDA MÁXIMA ACEITÁVEL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
            <tr className="hover:bg-slate-50">
              <td className="py-1 px-2">Positivo bateria → Entrada relé partida</td>
              <td className="py-1 px-2 text-right font-bold text-emerald-700">até 0,20 V</td>
            </tr>
            <tr className="bg-slate-50/50 hover:bg-slate-50">
              <td className="py-1 px-2">Saída relé → Entrada motor de partida</td>
              <td className="py-1 px-2 text-right font-bold text-emerald-700">até 0,20 V</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="py-1 px-2">Chave no interruptor</td>
              <td className="py-1 px-2 text-right font-bold text-emerald-700">até 0,30 V</td>
            </tr>
            <tr className="bg-slate-50/50 hover:bg-slate-50">
              <td className="py-1 px-2">Fio terra motor → Negativo bateria</td>
              <td className="py-1 px-2 text-right font-bold text-emerald-700">até 0,20 V</td>
            </tr>
            <tr className="bg-amber-50/70 font-semibold">
              <td className="py-1 px-2 text-amber-900">Circuito de partida inteiro</td>
              <td className="py-1 px-2 text-right font-bold text-amber-800">0,2 a 0,5 V</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Golden Rule Footer */}
      <div className="bg-emerald-50 border-t border-emerald-200 p-2 text-center text-[9px] sm:text-[10px] text-emerald-900 font-bold">
        <span>REGRA DE OURO:</span> Menos de 0,2V = circuito saudável. Mais de 0,5V = limpe o terminal e teste de novo.
      </div>
    </div>
  );
}
