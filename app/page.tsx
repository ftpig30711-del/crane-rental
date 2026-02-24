"use client";

import { useState } from "react";
import { CheckCircle2, AlertTriangle, PhoneCall, MessageCircle, Truck, MapPin, DollarSign, ShieldAlert, Zap, Factory, Construction, PanelLeftClose, ChevronRight } from "lucide-react";
import PricingModal from "@/components/PricingModal";

const FLEET = [
    { tons: "17噸", crane: "5噸吊桿", extras: ["附吊籃", "精準調度"] },
    { tons: "18.5噸", crane: "7噸吊桿", extras: ["附吊籃", "重型負載"] },
];

const SERVICES = [
    { title: "電纜線輪吊運", icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3" /> },
    { title: "鐵材吊運", icon: <Factory className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3" /> },
    { title: "太陽能電板吊運", icon: <PanelLeftClose className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3" /> },
    { title: "吊籃高空作業", icon: <Truck className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3" /> },
    { title: "建材吊運", icon: <Construction className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3" /> },
];

export default function Home() {
    const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

    return (
        <main className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans pb-32">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white pt-24 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-90 z-0"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20 -ml-10 -mb-10"></div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-500/20 text-blue-300 font-medium tracking-wider text-sm border border-blue-500/30">
                        七聖吊車・車主直營・專業評估
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white drop-shadow-md">
                        精準評估、安全第一<br />
                        <span className="text-blue-400">高雄/台南/屏東</span> 專業吊卡車調度
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                        事前專業評估，排除現場潛在風險。高效率現場配合，降低溝通成本。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a href="tel:0932993568" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg md:text-xl transition-all shadow-lg hover:shadow-blue-600/30 active:scale-95">
                            <PhoneCall className="w-6 h-6" />
                            立即撥打電話
                        </a>
                        <a href="line://ti/p/~0932993568" className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-8 py-4 rounded-lg font-bold text-lg md:text-xl transition-all shadow-lg active:scale-95">
                            <MessageCircle className="w-6 h-6 text-[#06C755]" />
                            加 LINE 免費評估
                        </a>
                    </div>
                </div>
            </section>

            {/* Fleet Specs */}
            <section className="py-20 px-6 bg-white relative">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">車隊規格與能力</h2>
                        <p className="text-slate-600 text-lg md:text-xl font-medium">車主直營、免去仲介抽成、直接對接最專業的現場判斷</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {FLEET.map((truck, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-blue-600 font-bold text-4xl md:text-5xl mb-2">{truck.tons}</div>
                                <div className="text-slate-500 font-medium text-xl mb-6 flex items-center gap-2">
                                    <Truck className="w-6 h-6" /> 車輛配置
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-lg text-slate-700">
                                        <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                                        <span className="font-medium text-slate-900">{truck.crane}</span>
                                    </li>
                                    {truck.extras.map((extra, eIdx) => (
                                        <li key={eIdx} className="flex items-center gap-3 text-lg text-slate-700">
                                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                                            {extra}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">核心業務場景</h2>
                        <p className="text-slate-600 text-lg flex items-center justify-center gap-2">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            服務範圍：高雄地區（主打）、屏東、台南皆可配合
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                        {SERVICES.map((srv, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform">
                                {srv.icon}
                                <h3 className="font-bold text-slate-800 text-lg md:text-xl">{srv.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing & Invoicing */}
            <section className="py-20 px-6 bg-white border-y border-slate-100">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                                <DollarSign className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">透明報價與帳務</h2>
                            <p className="text-xl font-bold text-blue-600 mb-4 border-l-4 border-blue-600 pl-4 py-1 bg-blue-50">
                                透明報價，絕不現場惡意加價
                            </p>
                            <ul className="space-y-4 mb-8 text-lg text-slate-700">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-slate-800 rounded-full w-2 h-2 flex-shrink-0"></div>
                                    <div>公開基礎起步價，視距離及車程會有加成費用。</div>
                                </li>
                            </ul>
                            <button
                                onClick={() => setIsPricingModalOpen(true)}
                                className="group flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-md active:scale-95 w-full sm:w-auto"
                            >
                                查看詳細報價規格
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="w-full md:w-1/2 bg-slate-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-2xl opacity-20 -mr-10 -mt-10"></div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <ShieldAlert className="w-8 h-8 text-blue-400" />
                                企業報帳支援
                            </h3>
                            <p className="text-lg text-slate-300 leading-relaxed font-medium">
                                可透過掛靠車行協助開立三聯式發票（需加 5% 營業稅），全力支援企業報帳流程。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety Alerts */}
            <section className="py-20 px-6 bg-[#fffdf0] border-t border-[#fef08a]">
                <div className="max-w-4xl mx-auto bg-amber-50 rounded-2xl p-8 md:p-10 border border-amber-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-amber-400"></div>
                    <div className="flex items-center gap-4 mb-8">
                        <AlertTriangle className="w-10 h-10 text-amber-500 flex-shrink-0" />
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900">工安防禦與作業規範</h2>
                    </div>

                    <h3 className="text-xl font-bold text-red-600 mb-4 border-b border-amber-200 pb-2 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-600 inline-block"></span> 絕對拒絕條款
                    </h3>
                    <ul className="space-y-4 text-lg text-amber-950 font-medium mb-8">
                        <li className="flex items-start gap-3">
                            <span className="text-red-500 font-bold">1.</span>
                            拒絕超出車輛噸數極限的超載要求，工安絕不妥協。
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-red-500 font-bold">2.</span>
                            拒絕地基極度鬆軟、無法施作撐座之危險場地。
                        </li>
                    </ul>

                    <div className="bg-white/60 p-4 rounded-lg text-amber-800 font-medium">
                        <span className="font-bold">附加說明：</span> 夜間作業需另加成費用，請提前預約評估。
                    </div>
                </div>
            </section>

            {/* Floating CTA */}
            <div className="fixed bottom-0 left-0 w-full md:bottom-8 md:right-8 md:left-auto md:w-[400px] bg-white md:rounded-2xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] md:shadow-2xl border-t md:border border-slate-200 z-50 overflow-hidden transform transition-transform">
                <div className="bg-slate-50 p-3 md:p-4 border-b border-slate-200 text-sm md:text-base text-slate-600 font-medium">
                    <p className="mb-1 text-slate-800 font-bold">聯絡前請先準備：</p>
                    <ul className="flex flex-wrap gap-x-4 gap-y-1">
                        <li>1. 物品重量尺寸</li>
                        <li>2. 現場地址/巷寬</li>
                        <li>3. 現場照片</li>
                    </ul>
                </div>
                <div className="p-3 md:p-4 grid grid-cols-2 gap-3 md:gap-4 bg-white">
                    <a href="tel:0932993568" className="flex flex-col items-center justify-center gap-1 bg-blue-600 text-white rounded-xl py-3 md:py-4 font-bold active:scale-95 transition-transform">
                        <PhoneCall className="w-6 h-6" />
                        <span className="text-[15px] md:text-base">立即撥打</span>
                    </a>
                    <a href="line://ti/p/~0932993568" className="flex flex-col items-center justify-center gap-1 bg-[#06C755] text-white rounded-xl py-3 md:py-4 font-bold active:scale-95 transition-transform">
                        <MessageCircle className="w-6 h-6" />
                        <span className="text-[15px] md:text-base">加 LINE 評估</span>
                    </a>
                </div>
            </div>

            {/* Pricing Modal */}
            <PricingModal
                isOpen={isPricingModalOpen}
                onClose={() => setIsPricingModalOpen(false)}
            />
        </main>
    );
}
