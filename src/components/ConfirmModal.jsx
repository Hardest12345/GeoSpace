// src/components/ConfirmModal.jsx
import React from "react";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  meeting,
  moduleTitle = "GeoExplore",
  isLoading = false,
  itemsToOverwrite = [],
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#14263d]/60 px-4 backdrop-blur-[2px]">
      <div className="w-full max-w-[420px] overflow-hidden rounded-[18px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] animate-in fade-in zoom-in duration-200">
        {/* Header Icon & Title */}
        <div className="bg-gradient-to-br from-[#ffb51b] to-[#f59e0b] px-6 py-5 text-center">
          <div className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white/20 text-white">
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="mt-3 text-xl font-extrabold text-white">
            Ganti Jawaban?
          </h2>
          <p className="mt-1 text-sm text-white/90 font-medium">
            {moduleTitle} - Pertemuan {meeting}
          </p>
        </div>

        {/* Content Body */}
        <div className="px-6 py-5">
          <p className="text-center text-sm text-slate-600 leading-relaxed">
            Anda sudah pernah mengirimkan jawaban sebelumnya. Apakah Anda ingin menggantinya dengan jawaban baru?
          </p>

          {itemsToOverwrite && itemsToOverwrite.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {itemsToOverwrite.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 rounded-lg px-3 py-2"
                >
                  <span className="text-[#ffb51b]">•</span>
                  {item}
                </div>
              ))}
            </div>
          )}

          <p className="mt-3 text-xs text-slate-400 text-center">
            Jawaban lama akan dihapus dan diganti dengan jawaban saat ini.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 rounded-[10px] border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 disabled:opacity-50"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={onConfirm}
              disabled={isLoading}
              className="flex-1 rounded-[10px] bg-[#ff5d4d] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(255,93,77,0.25)] transition-all hover:bg-[#ef4e3e] disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Memproses...
                </>
              ) : (
                "Ya, Ganti Semua"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
