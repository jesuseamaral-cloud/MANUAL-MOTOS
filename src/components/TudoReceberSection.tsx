import { Check, Zap } from 'lucide-react';
import HeroBundleGraphic from './visuals/HeroBundleGraphic.tsx';

export default function TudoReceberSection() {
  const items = [
    '120 fichas de diagnóstico por sintoma',
    'Descrição dos sintomas como a moto chega',
    'Causas mais prováveis em ordem de frequência',
    'Sequência de testes para cada sintoma',
    'Leituras esperadas e o que significam',
    'Próximos passos conforme o resultado',
    'Erros caros a evitar em cada caso',
    'Organização por sintoma e sistema',
    'Acesso imediato após a compra',
    'E muito mais...',
    'Versão imprimível em A4',
    'Download imediato',
    'Acesso vitalício a todo material recebido',
  ];

  return (
    <section className="bg-[#ede8df] text-slate-900 py-12 px-4 border-b border-slate-300">
      <div className="max-w-[580px] mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-[20px] sm:text-[25px] md:text-[28px] font-black uppercase tracking-tight text-center leading-tight text-black mb-6">
          TUDO O QUE VOCÊ VAI RECEBER
        </h2>

        {/* Big Dark Card Container */}
        <div className="w-full bg-[#0d0f13] text-white rounded-2xl p-5 sm:p-7 shadow-2xl border border-slate-800 flex flex-col items-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#16a34a] text-white text-[11px] font-black uppercase px-3 py-1 rounded-full mb-3 shadow">
            <Zap className="w-3.5 h-3.5 fill-white" />
            <span>ACESSO IMEDIATO</span>
          </div>

          {/* Heading */}
          <h3 className="text-sm sm:text-base md:text-lg font-black uppercase text-center tracking-tight leading-tight text-white max-w-[420px]">
            TUDO FOI ORGANIZADO PARA SER SIMPLES E FÁCIL DE APLICAR.
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 text-center mt-1 mb-4">
            Você escolhe o sintoma e já pode começar na mesma hora.
          </p>

          {/* Central Mockup Graphic */}
          <div className="w-full scale-95 sm:scale-100 my-1">
            <HeroBundleGraphic />
          </div>

          {/* Checklist */}
          <div className="w-full max-w-[420px] space-y-2 mt-4 text-xs sm:text-[13px] font-medium text-left">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
