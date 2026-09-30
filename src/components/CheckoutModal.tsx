import { useState } from 'react';
import { X, Check, Lock, ShieldCheck, QrCode, CreditCard } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

export default function CheckoutModal({ isOpen, onClose, planName }: CheckoutModalProps) {
  const [method, setMethod] = useState<'pix' | 'card'>('pix');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const isCompleto = planName.toLowerCase().includes('completo');
  const price = isCompleto ? 'R$ 37,90' : 'R$ 27,90';

  const handleCopyPix = () => {
    navigator.clipboard?.writeText?.('00020126580014br.gov.bcb.pix0136fichas-motos-diagnostico@pagamentos.com520400005303986540537.905802BR5925FICHAS DIAGNOSTICO MOTOS6009SAO PAULO62070503***6304E8A2');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-md bg-[#111317] border border-amber-400/40 rounded-2xl p-6 text-white shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full bg-slate-800/80 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-[#1ba852] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full mb-2">
            <Lock className="w-3 h-3" />
            <span>Ambiente Seguro 256-bit</span>
          </div>
          <h3 className="text-lg font-black uppercase text-white">
            Finalizar Pedido
          </h3>
          <p className="text-xs text-amber-300 font-bold mt-0.5">
            {planName} — {price}
          </p>
        </div>

        {/* Payment tabs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            onClick={() => setMethod('pix')}
            className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
              method === 'pix'
                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                : 'bg-slate-900 border-slate-700 text-slate-400'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>PIX (Acesso Imediato)</span>
          </button>
          <button
            onClick={() => setMethod('card')}
            className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
              method === 'card'
                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                : 'bg-slate-900 border-slate-700 text-slate-400'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Cartão de Crédito</span>
          </button>
        </div>

        {/* Content based on method */}
        {method === 'pix' ? (
          <div className="bg-[#181a22] border border-slate-700 rounded-xl p-4 text-center">
            <div className="w-36 h-36 bg-white rounded-lg mx-auto p-2 flex items-center justify-center shadow-inner mb-3">
              {/* QR Code SVG preview */}
              <div className="w-full h-full border-2 border-black p-1 flex flex-col justify-between">
                <div className="flex justify-between">
                  <div className="w-8 h-8 bg-black" />
                  <div className="w-8 h-8 bg-black" />
                </div>
                <div className="text-[8px] font-mono text-black font-bold text-center">
                  PIX INSTANTÂNEO
                </div>
                <div className="flex justify-between items-end">
                  <div className="w-8 h-8 bg-black" />
                  <div className="w-6 h-6 bg-emerald-600 rounded-sm" />
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-300 mb-3">
              Escaneie o código acima ou copie a chave Pix para liberação imediata em seu WhatsApp e e-mail.
            </p>

            <button
              onClick={handleCopyPix}
              className="w-full bg-[#1ba852] hover:bg-[#158941] text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Código Pix Copiado com Sucesso!</span>
                </>
              ) : (
                <>
                  <span>Copiar Código Pix Copia e Cola</span>
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-2.5 text-xs">
            <div>
              <label className="block text-slate-300 font-bold mb-1 text-[11px]">Número do Cartão</label>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-300 font-bold mb-1 text-[11px]">Validade</label>
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-bold mb-1 text-[11px]">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
            <button
              onClick={() => alert('Pagamento aprovado em ambiente demonstrativo! Em produção este link redireciona para a Hotmart / checkout oficial.')}
              className="w-full bg-[#1ba852] hover:bg-[#158941] text-white text-xs font-black uppercase py-3 rounded-lg mt-3 shadow-lg cursor-pointer"
            >
              Pagar {price} Agora
            </button>
          </div>
        )}

        {/* Guarantee footer */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-center gap-2 text-[10px] text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Garantia de 7 Dias Incondicional • Risco Zero</span>
        </div>
      </div>
    </div>
  );
}
