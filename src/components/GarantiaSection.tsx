import GuaranteeSealGraphic from './visuals/GuaranteeSealGraphic.tsx';

export default function GarantiaSection() {
  return (
    <section className="bg-[#ede8df] text-slate-900 py-12 px-4 border-b border-slate-300">
      <div className="max-w-[560px] mx-auto flex flex-col sm:flex-row items-center gap-6">
        {/* Golden Medallion */}
        <div className="shrink-0">
          <GuaranteeSealGraphic />
        </div>

        {/* Text Area */}
        <div className="flex-1 text-left">
          <h2 className="text-[17px] sm:text-[20px] font-black uppercase text-slate-900 leading-tight mb-2">
            GARANTIA DE 7 DIAS –<br />
            ZERO RISCO PRA VOCÊ
          </h2>

          <p className="text-xs sm:text-[13px] text-slate-700 mb-2 font-medium">
            <strong>Isso significa que</strong>, a qualquer momento, se você achar que:
          </p>

          <ul className="space-y-1 text-xs sm:text-[13px] text-slate-700 mb-3 pl-1">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
              <span>o material não faz sentido para sua oficina</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
              <span>as fichas não atendem suas necessidades</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
              <span>ou simplesmente não quiser continuar</span>
            </li>
          </ul>

          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
            Você pode solicitar o reembolso. Sem prazo, sem burocracia. O risco fica todo do nosso lado.
          </p>
        </div>
      </div>
    </section>
  );
}
