export default function GuaranteeSealGraphic() {
  return (
    <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center shrink-0 select-none">
      {/* Outer scalloped/serrated gold badge */}
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#92400e] via-[#f59e0b] to-[#fef08a] p-1.5 shadow-xl flex items-center justify-center">
        {/* Inner gold ring */}
        <div className="w-full h-full rounded-full border-2 border-dashed border-[#78350f] p-1 flex items-center justify-center bg-gradient-to-b from-[#fef3c7] via-[#fbbf24] to-[#d97706]">
          {/* Inner Dark Badge Core */}
          <div className="w-full h-full rounded-full bg-[#18181b] border-2 border-[#fef08a] flex flex-col items-center justify-center text-center p-1 text-white shadow-inner">
            <span className="text-[7px] sm:text-[9px] font-black uppercase text-amber-300 tracking-wider">
              GARANTIA
            </span>
            <div className="text-[17px] sm:text-[23px] font-black text-white leading-none my-0.5 tracking-tight">
              7 DIAS
            </div>
            <span className="text-[7px] sm:text-[9px] font-black uppercase text-amber-300 tracking-wider">
              INCONDICIONAL
            </span>
            <div className="flex gap-0.5 text-amber-400 text-[8px] mt-0.5">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
