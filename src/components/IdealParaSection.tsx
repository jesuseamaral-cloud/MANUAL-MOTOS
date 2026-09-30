import { Check } from 'lucide-react';

export default function IdealParaSection() {
  const items = [
    {
      title: 'EVITAR TROCAS DESNECESSÁRIAS',
      desc: 'Descubra a causa do defeito antes de gastar com peças sem necessidade.',
    },
    {
      title: 'FECHAR O SERVIÇO MAIS RÁPIDO',
      desc: 'Tenha um roteiro prático para diagnosticar e agilizar a entrega da moto.',
    },
    {
      title: 'TRABALHAR COM MAIS SEGURANÇA',
      desc: 'Ganhe mais confiança para atender motos com injeção eletrônica no dia a dia.',
    },
    {
      title: 'REDUZIR A DEPENDÊNCIA DE AJUDA',
      desc: 'Consulte o material sempre que precisar, sem depender de grupos ou terceiros.',
    },
    {
      title: 'ORGANIZAR MELHOR A OFICINA',
      desc: 'Tenha mais clareza no diagnóstico e mais segurança na execução do serviço.',
    },
    {
      title: 'PARAR DE PERDER TEMPO',
      desc: 'Evite deixar motos paradas por dias sem chegar a uma conclusão.',
    },
  ];

  return (
    <div className="w-full my-8 select-none">
      <div className="w-full flex flex-col items-center">
        {/* Section Headline */}
        <h2 className="text-[20px] sm:text-[24px] md:text-[27px] font-black uppercase tracking-tight text-center leading-tight text-black mb-6 sm:mb-8">
          ESTE MATERIAL É IDEAL PARA VOCÊ QUE<br />
          DESEJA
        </h2>

        {/* 6 Green Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#e8f5ec] border border-[#aee2c2] rounded-xl p-3.5 sm:p-4 flex flex-col text-left shadow-sm hover-pulse cursor-pointer"
            >
              <div className="flex items-start gap-2 mb-2">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5 stroke-[3]" />
                <h3 className="text-xs sm:text-[13px] font-black uppercase text-slate-900 leading-snug tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed pl-6 font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
