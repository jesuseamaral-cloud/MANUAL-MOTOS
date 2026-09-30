import { useState, useCallback } from 'react';
import HeroSection from './components/HeroSection.tsx';
import FichasShowcaseSection from './components/FichasShowcaseSection.tsx';
import PossuemSection from './components/PossuemSection.tsx';
import BonusSection from './components/BonusSection.tsx';
import RelatosMecanicosSection from './components/RelatosMecanicosSection.tsx';
import PricingSection from './components/PricingSection.tsx';
import GarantiaSection from './components/GarantiaSection.tsx';
import FaqSection from './components/FaqSection.tsx';
import FooterSection from './components/FooterSection.tsx';
import CheckoutModal from './components/CheckoutModal.tsx';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Plano Completo');

  const scrollToPricing = useCallback(() => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleOpenPlan = useCallback((plan: string) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#07080a] text-slate-900 flex justify-center font-sans">
      {/* Central column keeping exact narrow proportions from reference page */}
      <div className="w-full max-w-[620px] bg-[#ede8df] shadow-2xl flex flex-col border-x border-slate-800/40 relative">
        {/* 1. Hero Section (Dark) */}
        <HeroSection onCtaClick={scrollToPricing} />

        {/* 2. Demonstration Section (Light Cream) */}
        <FichasShowcaseSection />

        {/* 4. Section: Tudo o que Você Vai Receber (Fichas e Benefícios) */}
        <PossuemSection />

        {/* 5. Section: E Não Para Por Aí... Tem Mais! */}
        <BonusSection />

        {/* 6. Section: Relatos dos Mecânicos no Dia a Dia */}
        <RelatosMecanicosSection />

        {/* 9. Section: Planos / Preços */}
        <PricingSection onPlanClick={handleOpenPlan} />

        {/* 10. Section: Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* 11. Section: Garantia de 7 Dias */}
        <GarantiaSection />

        {/* 12. Footer */}
        <FooterSection />

        {/* Checkout Modal */}
        <CheckoutModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          planName={selectedPlan}
        />
      </div>
    </div>
  );
}
