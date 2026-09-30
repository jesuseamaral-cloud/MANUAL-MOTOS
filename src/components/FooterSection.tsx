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
          © 2026. Todos os direitos reservados. Site sem vínculo com Facebook, Instagram ou Meta. Informações comerciais sobre este produto. Dados não são vendidos ou usados para spam.
      </div>
    </footer>
  );
}
