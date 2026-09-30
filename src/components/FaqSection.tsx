import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Preciso ter experiência em mecânica para usar?',
      a: 'Não! O material foi desenvolvido com linguagem direta, ilustrações claras e valores esperados para cada medição. Serve tanto para quem está começando na bancada quanto para mecânicos experientes que querem parar de perder tempo procurando defeitos intermitentes.',
    },
    {
      q: 'O acesso é imediato?',
      a: 'Sim! Assim que o seu pagamento for aprovado (no Pix ou Cartão de Crédito é liberado em segundos), você recebe os dados de acesso diretamente no seu WhatsApp e no seu e-mail cadastrado.',
    },
    {
      q: 'As fichas podem ser impressas?',
      a: 'Sim! Todas as fichas foram diagramadas em formato A4 de alta resolução, prontas para imprimir e encadernar ou colar na parede da sua oficina, além de serem 100% otimizadas para ler na tela do celular.',
    },
    {
      q: 'As fichas são atualizadas?',
      a: 'Sim! Conforme novos modelos de motos chegam ao mercado e novos testes são mapeados, adicionamos conteúdos atualizados na biblioteca, e quem adquire o Plano Completo tem acesso vitalício sem nenhuma mensalidade.',
    },
    {
      q: 'Posso usar as fichas em qualquer moto?',
      a: 'Sim! As fichas cobrem a eletricidade, ignição, alimentação (carburadas e injetadas) e testes de motor tanto para motos de baixa cilindrada quanto média e alta cilindrada (Honda, Yamaha, Suzuki, Shineray, Dafra, Kawasaki, etc.).',
    },
    {
      q: 'O que faço se não gostar das fichas?',
      a: 'Você está 100% protegido pela Garantia Incondicional de 7 Dias. Basta mandar uma mensagem no nosso suporte ou WhatsApp e devolvemos cada centavo do seu dinheiro, sem questionamentos.',
    },
    {
      q: 'E se eu não gostar?',
      a: 'Você tem 7 dias inteiros para testar as fichas na sua bancada. Se não acelerar o seu diagnóstico e não evitar trocas erradas de peças, nós estornamos 100% do seu investimento.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-[#ede8df] text-slate-900 py-12 px-4 border-b border-slate-300">
      <div className="max-w-[560px] mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-[20px] sm:text-[25px] md:text-[28px] font-black uppercase tracking-tight text-center leading-tight text-black mb-8">
          PERGUNTAS FREQUENTES
        </h2>

        {/* Accordion list */}
        <div className="w-full space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-300 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-3.5 px-4 flex items-center justify-between text-left gap-3 cursor-pointer hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-3.5 pt-1 text-[11px] sm:text-xs text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
