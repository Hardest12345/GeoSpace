// src/components/SubmitPopup.jsx
import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function SubmitPopup({
  isOpen,
  onClose,
  onConfirm,
  title = "Kirim Jawaban?",
  message = "Apakah Anda yakin ingin mengirimkan jawaban ini?",
  confirmText = "Ya, Kirim",
  cancelText = "Batal",
  isLoading = false,
  type = "confirm", // "confirm" | "success" | "error"
}) {
  if (!isOpen) return null;

  const isConfirm = type === "confirm";
  const isSuccess = type === "success";
  const isError = type === "error";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#14263d]/60 px-4 backdrop-blur-[2px] animate-in fade-in duration-200">
      <div className="w-full max-w-[420px] overflow-hidden rounded-[18px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className={`px-6 py-5 text-center ${
          isSuccess ? 'bg-gradient-to-br from-[#18aaa6] to-[#0f7c79]' :
          isError ? 'bg-gradient-to-br from-[#ff5d4d] to-[#d94436]' :
          'bg-gradient-to-br from-[#ffb51b] to-[#f59e0b]'
        }`}>
          <div className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white/20 text-white">
            {isSuccess ? (
              <CheckCircle2 size={32} strokeWidth={2} />
            ) : isError ? (
              <AlertCircle size={32} strokeWidth={2} />
            ) : (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )}
          </div>
          <h2 className="mt-3 text-xl font-extrabold text-white">{title}</h2>
          {message && (
            <p className="mt-1 text-sm text-white/80">{message}</p>
          )}
        </div>

        {/* Body */}
        {isConfirm && (
          <div className="px-6 py-5">
            <p className="text-center text-sm text-slate-600 leading-relaxed">
              Jawaban Anda akan disimpan dan tidak dapat diubah setelah dikirim.
            </p>

            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-[10px] border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50"
              >
                {cancelText}
              </button>
              <button
                type="button"
                onClick={onConfirm}
                disabled={isLoading}
                className="flex-1 rounded-[10px] bg-[#18aaa6] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(24,170,166,0.25)] transition-all hover:bg-[#108f8b] disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Memproses...
                  </>
                ) : (
                  confirmText
                )}
              </button>
            </div>
          </div>
        )}

        {/* Success/Error Body */}
        {!isConfirm && (
          <div className="px-6 py-5 text-center">
            <p className="text-sm text-slate-600">
              {isSuccess ? 'Jawaban Anda berhasil dikirim!' : 'Terjadi kesalahan, silakan coba lagi.'}
            </p>
            <button
              type="button"
              onClick={onClose}
              className={`mt-4 w-full rounded-[10px] px-4 py-2.5 text-sm font-semibold text-white transition-all ${
                isSuccess ? 'bg-[#18aaa6] hover:bg-[#108f8b]' : 'bg-[#ff5d4d] hover:bg-[#d94436]'
              }`}
            >
              Tutup
            </button>
          </div>
        )}
      </div>
    </div>
  );
}