const tickerContent = [
  'SELAMAT DATANG DI 7METER ^^ MINIMAL DEPOSIT HANYA Rp 10.000 SEKARANG !',
  '📲 Download Aplikasi WARP di Playstore & Appstore untuk anti blokir link !',
  '💳 Metode Deposit : Bank, QR PAY, Virtual Account, Voucher88 , Deposit QR tanpa biaya tambahan',
  'Tambahkan rekening dengan fitur baru Multibank',
  'Quiz Corner Special Piala Dunia 2026',
  'Top Award FIFA WORLD CUP 2026 200JT',
  'LUCKYSPIN JERSEY',
  'PROMO REFERRAL 21,95%',
  'Bonus Cashback SPORTGG 5%',
  'CASHBACK 100% MIXPARLAY',
];

const tickerText = tickerContent.join(' | ');

export default function NewsTicker() {
  return (
    <div className="w-full bg-gold h-7 overflow-hidden flex items-center">
      <div className="flex-shrink-0 px-3 py-0.5 bg-yellow-500 h-full flex items-center">
        <span className="text-black font-bold text-xs whitespace-nowrap">NEW :</span>
      </div>
      <div className="overflow-hidden flex-1 relative">
        <div className="animate-ticker flex whitespace-nowrap">
          <span className="text-black text-xs px-2">{tickerText}</span>
          <span className="text-black text-xs px-2">{tickerText}</span>
        </div>
      </div>
    </div>
  );
}
