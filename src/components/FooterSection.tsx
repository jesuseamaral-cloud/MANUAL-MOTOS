import { Shield } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-[#0b0c0e] text-slate-400 py-12 px-4 border-t border-slate-900">
      <div className="max-w-[560px] mx-auto flex flex-col items-center text-center space-y-4">
        {/* Copyright */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
          <Shield className="w-3.5 h-3.5 text-slate-500" />
          <span>Todos os direitos reservados.</span>
        </div>

        {/* Legal Disclaimer */}
        <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed font-normal">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
        </p>
      </div>
    </footer>
  );
}
