import { TrendingUp, ArrowUpRight, Signal, Users, Star, Flame, Zap, Plus, Search } from 'lucide-react';

function TrendRadar() {
    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black mb-1 italic">Trend Radar</h1>
                    <p className="text-gray-400">Global market signals analyzed by AI in real-time.</p>
                </div>
                <div className="flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-2 rounded-xl">
                    <Signal size={18} className="text-brand-red animate-pulse" />
                    <span className="text-xs font-black uppercase text-brand-red tracking-widest">LIVE SCANNING</span>
                </div>
            </div>

            {/* Featured Trend Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                    <div className="bg-brand-zinc border border-white/5 rounded-3xl overflow-hidden group hover:border-brand-red/20 transition-all">
                        <div className="flex flex-col md:flex-row">
                            <div className="p-8 space-y-6 flex-1">
                                <div className="flex items-center gap-3">
                                    <span className="bg-brand-red text-white text-[10px] font-black px-2 py-0.5 rounded italic">VIRAL BREWING</span>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase">Clothing / Streetwear</span>
                                </div>
                                <h2 className="text-4xl font-black tracking-tight leading-none group-hover:text-brand-red transition-colors">
                                    Y2K Techwear <br />Resurgence
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                    Explosive growth in utilitarian aesthetics across TikTok and Pinterest. Forecasted to peak during Q4 holidays.
                                </p>

                                <div className="flex gap-8 border-t border-white/5 pt-6">
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Daily Volume</p>
                                        <p className="text-2xl font-black">1.4M+</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Engagement</p>
                                        <p className="text-2xl font-black text-brand-green">84.2%</p>
                                    </div>
                                </div>

                                <button className="bg-white text-black font-black px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-gray-200 transition-all shadow-xl active:scale-95 group/btn border border-white/10">
                                    GENERATE ASSETS FOR THIS TREND <Zap size={18} className="fill-black group-hover/btn:scale-125 transition-transform" />
                                </button>
                            </div>
                            <div className="w-full md:w-80 bg-black/40 flex items-center justify-center p-8 relative">
                                <div className="absolute top-0 right-0 p-4">
                                    <ArrowUpRight className="text-brand-red opacity-40" />
                                </div>
                                {/* Mock Trend Visual */}
                                <div className="w-full aspect-[3/4] border-2 border-brand-red/20 rounded-2xl relative bg-brand-zinc overflow-hidden shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent"></div>
                                    <div className="p-6">
                                        <div className="w-12 h-1 bg-brand-red mb-2"></div>
                                        <div className="w-8 h-1 bg-white mb-8"></div>
                                        <div className="text-[10px] font-black tracking-widest text-white/20 mb-1">EST. 2026</div>
                                        <div className="text-xl font-black text-white/10 italic leading-none">LAZY ENGINE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Signals Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-brand-zinc border border-white/5 rounded-3xl p-6">
                        <h3 className="text-sm font-bold flex items-center gap-2 mb-6">
                            <Flame size={18} className="text-brand-red" /> HOT SIGNALS
                        </h3>
                        <div className="space-y-4">
                            {[
                                { title: 'Neon Calligraphy', growth: '+142%', label: 'Visual Style' },
                                { title: 'Eco-Packaging', growth: '+85%', label: 'Product' },
                                { title: 'Authentic Hustle', growth: '+210%', label: 'Brand Voice' },
                            ].map((signal, i) => (
                                <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-all">
                                    <div>
                                        <h4 className="font-bold text-sm tracking-tight">{signal.title}</h4>
                                        <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{signal.label}</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-black text-brand-green group-hover:translate-x-[-4px] transition-transform">{signal.growth}</p>
                                        <TrendingUp size={12} className="text-green-500/50 inline-block" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-dark border border-white/5 rounded-3xl p-6 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-5 transition-opacity"></div>
                        <h3 className="text-sm font-bold flex items-center gap-2 mb-4">
                             Competitor Signals
                        </h3>
                        <p className="text-xs text-gray-500 mb-6 italic leading-relaxed">
                            "Top 3 competitors in Apparel have increased usage of Red/Black palettes by 40%."
                        </p>
                        <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-widest border border-white/10 rounded-xl transition-all">
                            View Deep Scan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrendRadar;
