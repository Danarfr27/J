import { useState } from 'react';

export default function PromoModal({ open, onClose, depositUrl = '/deposit' }: { open: boolean; onClose: () => void; depositUrl?: string }) {
  const [agree, setAgree] = useState(false);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-xl font-bold mb-2">Promo Ulangtahun 7Meter</h2>
        <p className="text-sm mb-4">Deposit Rp50.000 untuk mendapatkan 7x Scatter. Promo nyata — berlaku sesuai syarat &amp; ketentuan.</p>
        <label className="flex items-center gap-2 mb-4 text-sm">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <span>Saya setuju dengan syarat &amp; ketentuan promo</span>
        </label>
        <div className="flex gap-3 justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Tutup</button>
          <a
            href={agree ? depositUrl : '#'}
            onClick={(e) => { if (!agree) { e.preventDefault(); alert('Anda harus menyetujui syarat & ketentuan.'); } }}
            className={`px-4 py-2 rounded font-bold ${agree ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}
          >
            DAFTAR GRATIS
          </a>
        </div>
      </div>
    </div>
  );
}
