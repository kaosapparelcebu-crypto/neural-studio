import { useState } from 'react';
import { Bot, Upload, Palette, Type, Check, Trash2 } from 'lucide-react';

function BrandKit() {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div>
                <h1 className="text-3xl font-black mb-2">Brand Kit</h1>
                <p className="text-gray-400">Manage your brand identity to keep all AI generations consistent.</p>
            </div>

            {/* Logo Section */}
            <section>
                <div className="flex justify-between items-end mb-6">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Upload size={20} className="text-brand-red" /> Logos
                    </h2>
                    <button className="text-brand-red text-sm font-bold">+ Upload Logo</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="aspect-square bg-brand-zinc border border-white/5 rounded-2xl flex items-center justify-center p-8 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        {/* Mock Logo */}
                        <div className="w-full h-full border-4 border-white/10 rounded-full flex items-center justify-center">
                            <Bot size={40} className="text-white/20 group-hover:text-brand-red transition-colors" />
                        </div>
                        <button className="absolute top-2 right-2 p-2 bg-black/60 rounded-lg text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
                            <Trash2 size={16} />
                        </button>
                    </div>
                    <button className="aspect-square bg-brand-black border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-brand-red/50 transition-colors">
                        <Plus className="text-gray-500" />
                        <span className="text-xs font-bold text-gray-500 uppercase">Add Variation</span>
                    </button>
                </div>
            </section>

            {/* Colors Section */}
            <section>
                <div className="flex justify-between items-end mb-6">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Palette size={20} className="text-brand-red" /> Color Palette
                    </h2>
                    <button className="text-brand-red text-sm font-bold">+ Add Color</button>
                </div>
                <div className="flex flex-wrap gap-4">
                    {[
                        { name: 'Jet Black', hex: '#050505', type: 'Primary' },
                        { name: 'Power Red', hex: '#D71E28', type: 'Secondary' },
                        { name: 'Pure Chrome', hex: '#FFFFFF', type: 'Accent' },
                        { name: 'Zinc Gray', hex: '#18181B', type: 'Neutral' },
                    ].map((color, i) => (
                        <div key={i} className="bg-brand-zinc p-3 rounded-2xl border border-white/5 flex items-center gap-4 min-w-[200px]">
                            <div className="w-12 h-12 rounded-xl border border-white/10" style={{ backgroundColor: color.hex }}></div>
                            <div>
                                <p className="font-bold text-sm tracking-tight">{color.name}</p>
                                <p className="text-[10px] text-gray-500 uppercase font-black">{color.hex}</p>
                            </div>
                            <div className="ml-auto text-[10px] font-bold text-gray-600 rotate-90 uppercase tracking-widest">{color.type}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Typography Section */}
            <section>
                <div className="flex justify-between items-end mb-6">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Type size={20} className="text-brand-red" /> Typography
                    </h2>
                    <button className="text-brand-red text-sm font-bold">Manage Fonts</button>
                </div>
                <div className="space-y-4">
                    <div className="bg-brand-zinc p-6 rounded-2xl border border-white/5">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-[10px] font-bold text-brand-red uppercase">Heading Font</span>
                                <h3 className="text-2xl font-black italic">Outfit</h3>
                            </div>
                            <button className="text-xs font-bold py-1 px-3 bg-white/5 text-gray-500 rounded-lg">CHANGE</button>
                        </div>
                        <p className="text-3xl font-black italic tracking-tighter">THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</p>
                    </div>

                    <div className="bg-brand-zinc p-6 rounded-2xl border border-white/5">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-[10px] font-bold text-brand-red uppercase">Body Font</span>
                                <h3 className="text-xl font-bold">Inter</h3>
                            </div>
                            <button className="text-xs font-bold py-1 px-3 bg-white/5 text-gray-500 rounded-lg">CHANGE</button>
                        </div>
                        <p className="text-gray-400">Pack my box with five dozen liquor jugs. The quick brown fox jumps over the lazy dog. 1234567890 !@#$%^&*()</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

const Plus = ({ className }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;

export default BrandKit;
