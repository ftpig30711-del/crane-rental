"use client";

import { X, Info } from "lucide-react";
import { useEffect } from "react";

interface PricingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
                    <h2 className="text-2xl font-bold text-slate-900">詳細報價規格</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="overflow-y-auto p-6 flex-1 bg-white">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* 17噸報價卡片 */}
                        <div className="border border-blue-100 rounded-xl overflow-hidden shadow-sm">
                            <div className="bg-blue-600 text-white p-4 text-center">
                                <h3 className="text-xl font-bold">17噸 吊卡車</h3>
                            </div>
                            <div className="p-5 space-y-4">
                                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                    <span className="text-slate-600 font-medium">出車費</span>
                                    <span className="text-xl font-bold text-slate-900">$3,500</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                    <span className="text-slate-600 font-medium">半天</span>
                                    <span className="text-xl font-bold text-slate-900">$4,500</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                    <span className="text-slate-600 font-medium">一天</span>
                                    <span className="text-xl font-bold text-slate-900">$8,000</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                    <span className="text-slate-600 font-medium">吊籃 (半天)</span>
                                    <span className="text-xl font-bold text-slate-900">$500</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600 font-medium">吊籃 (一天)</span>
                                    <span className="text-xl font-bold text-slate-900">$1,000</span>
                                </div>
                                <div className="mt-4 pt-3 border-t border-blue-50 text-sm text-blue-600 font-medium flex justify-center">
                                    * 以上價格以高雄為主
                                </div>
                            </div>
                        </div>

                        {/* 18.5噸報價卡片 */}
                        <div className="border border-indigo-100 rounded-xl overflow-hidden shadow-sm">
                            <div className="bg-indigo-600 text-white p-4 text-center">
                                <h3 className="text-xl font-bold">18.5噸 吊卡車</h3>
                            </div>
                            <div className="p-5 space-y-4">
                                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                    <span className="text-slate-600 font-medium">出車費</span>
                                    <span className="text-xl font-bold text-slate-900">$4,000</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                    <span className="text-slate-600 font-medium">半天</span>
                                    <span className="text-xl font-bold text-slate-900">$5,000</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                    <span className="text-slate-600 font-medium">一天</span>
                                    <span className="text-xl font-bold text-slate-900">$9,000</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                                    <span className="text-slate-600 font-medium">吊籃 (半天)</span>
                                    <span className="text-xl font-bold text-slate-900">$500</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600 font-medium">吊籃 (一天)</span>
                                    <span className="text-xl font-bold text-slate-900">$1,000</span>
                                </div>
                                <div className="mt-4 pt-3 border-t border-indigo-50 text-sm text-indigo-600 font-medium flex justify-center">
                                    * 以上價格以高雄為主
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-amber-50 rounded-lg p-4 flex gap-3 text-amber-800 border border-amber-200">
                        <Info className="w-6 h-6 flex-shrink-0" />
                        <div>
                            <p className="font-bold mb-1">注意事項</p>
                            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                                <li>以上價格以大高雄地區為主。</li>
                                <li>偏遠地區、跨縣市或其他特殊地形將視情況調整加成。</li>
                                <li>如需開立三聯式發票，皆需另加 5% 營業稅。</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-colors w-full sm:w-auto"
                    >
                        關閉視窗
                    </button>
                </div>
            </div>
        </div>
    );
}
