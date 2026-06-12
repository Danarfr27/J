import { AlertTriangle } from 'lucide-react';

const depositInstructions = [
  'Deposit hanya dapat di proses selama BANK ONLINE',
  'Minimal Deposit = 50,000 IDR',
  'Maksimal untuk 1 kali melakukan deposit Rp 500.000.000 dan dapat deposit berkali-kali tanpa batas setiap harinya.',
  'Jika BANK SEDANG OFFLINE atau BANK SEDANG GANGGUAN semua proses deposit tidak dapat diproses untuk sementara waktu sampai BANK KEMBALI NORMAL',
  'Harap perhatikan rekening deposit kami yang sedang aktif sebelum melakukan pengiriman deposit, sehingga deposit anda dapat di proses secepatnya ke dalam dompet utama anda.',
  'Jika anda ingin lancar dalam proses DEPOSIT harap mengirim dana dalam angka unik di setiap deposit. Contoh : Rp. 500.879, Rp 50.247, Rp. 84.987 dan sebagainya. Ini berguna untuk kami melihat secara cepat deposit anda',
  'Jika deposit anda telah diproses tapi chip anda belum bertambah harap menghubungi Customer Service kami melalui LIVECHAT.',
];

export default function CenterContent() {
  return (
    <div className="flex flex-col gap-4">
      {/* Deposit Title */}
      <h1 className="text-2xl font-bold text-white text-center tracking-wide">
        DEPOSIT
        <div className="w-24 h-0.5 bg-gold mx-auto mt-1"></div>
      </h1>

      {/* Warning Alert */}
      <div 
        className="rounded-lg p-3 border border-gold/50 flex items-start gap-3"
        style={{ background: 'rgba(45, 10, 78, 0.85)' }}
      >
        <AlertTriangle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
        <p className="text-gold text-sm font-medium">
          Cek terlebih dahulu akun Bank kami yang aktif sebelum transfer
        </p>
      </div>

      {/* Deposit Information */}
      <div 
        className="rounded-lg p-4 border border-gold/20"
        style={{ background: 'rgba(45, 10, 78, 0.85)' }}
      >
        <p className="text-white text-sm mb-4 leading-relaxed">
          Kami tidak pernah mengirimkan REKENING DEPOSIT melalui SMS, EMAIL ataupun di WEBSITE INI. Deposit adalah mengirim uang ke rekening kami yang tersedia untuk di tukarkan menjadi CHIPS permainan. Bagaimana cara melakukannya DEPOSIT ?
        </p>
        
        <ul className="space-y-3">
          {depositInstructions.map((instruction, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-1.5"></span>
              <span className="text-white text-sm leading-relaxed">{instruction}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
