import { useState, useCallback } from 'react';
import {
    Sparkles,
    Image as ImageIcon,
    Layout,
    Type,
    Zap,
    Download,
    Share2,
    RefreshCw,
    Twitter,
    Instagram,
    Facebook,
    Monitor,
    Printer,
    PenTool,
    Wand2,
    ChevronDown,
    Plus
} from 'lucide-react';

function Generator() {
    const [activeTab, setActiveTab] = useState('generator'); // 'generator' | 'mockup'

    // AI GENERATOR STATE
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generationStep, setGenerationStep] = useState('');
    const [generatedImage, setGeneratedImage] = useState(null);
    const [outputMode, setOutputMode] = useState('social'); // 'social' | 'print'

    // MOCKUP STUDIO STATE
    const [mockupImage, setMockupImage] = useState(null);
    const [mockupTemplate, setMockupTemplate] = useState('merged-tshirt');
    const [isMocking, setIsMocking] = useState(false);
    const [mockupResult, setMockupResult] = useState(null);

    const handleGenerate = async () => {
        if (!prompt) return;
        setIsGenerating(true);
        setGeneratedImage(null);

        const steps = [
            'Analyzing prompt...',
            'Sampling brand style...',
            'Matching viral aesthetics...',
            'Diffusing pixels...',
            'Upscaling for final delivery...'
        ];

        for (const step of steps) {
            setGenerationStep(step);
            await new Promise(r => setTimeout(r, 800));
        }

        // Final result simulation
        setGeneratedImage(true);
        setIsGenerating(false);
    };

    const handleMockupGenerate = async () => {
        setIsMocking(true);
        setMockupResult(null);

        await new Promise(r => setTimeout(r, 2000));

        setMockupResult(true);
        setIsMocking(false);
    };

    return (
        <div className="max-w-[1400px] mx-auto">
            {/* Header / Tabs */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-black mb-1">Creative Studio</h1>
                    <p className="text-gray-400">From concept to campaign in seconds.</p>
                </div>

                <div className="bg-brand-zinc p-1 rounded-xl border border-white/5 flex gap-1">
                    <button
                        onClick={() => setActiveTab('generator')}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'generator' ? 'bg-brand-red text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                    >
                        <Wand2 size={16} /> AI GENERATOR
                    </button>
                    <button
                        onClick={() => setActiveTab('mockup')}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'mockup' ? 'bg-brand-red text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                    >
                        <PenTool size={16} /> MOCKUP STUDIO
                    </button>
                </div>
            </div>

            {activeTab === 'generator' ? (
                /* AI GENERATOR INTERFACE */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Panel: Settings */}
                    <div className="lg:col-span-4 space-y-6">
                        <section className="bg-brand-zinc border border-white/5 rounded-2xl p-6">
                            <h3 className="text-sm font-bold text-brand-red mb-4 flex items-center gap-2 uppercase tracking-wider">
                                <Sparkles size={16} /> Describe your vision
                            </h3>
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="e.g., A futuristic streetwear t-shirt design with neon calligraphy and cyberpunk aesthetic..."
                                className="w-full h-32 bg-black/40 border border-white/5 rounded-xl p-4 text-sm text-gray-300 focus:outline-none focus:border-brand-red/50 transition-all resize-none mb-4"
                            />

                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold text-gray-500 uppercase">Style Reference</span>
                                <button className="text-xs text-brand-red font-bold flex items-center gap-1">
                                    Browse Styles <ChevronDown size={14} />
                                </button>
                            </div>

                            <div className="grid grid-cols-4 gap-2 mb-6">
                                {['Minimal', 'Retro', 'Cyber', 'Vintage'].map((style) => (
                                    <button key={style} className="p-2 aspect-square bg-black/20 border border-white/5 rounded-lg hover:border-brand-red transition-all group">
                                        <div className="w-full h-full bg-gray-800 rounded flex items-center justify-center">
                                            <span className="text-[10px] text-gray-500 group-hover:text-white transition-colors">{style}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4 mb-6">
                                <h4 className="text-xs font-bold text-gray-500 uppercase">Output Type</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        onClick={() => setOutputMode('social')}
                                        className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${outputMode === 'social' ? 'bg-brand-red/10 border-brand-red text-white' : 'bg-black/20 border-white/5 text-gray-500 hover:border-white/20'}`}
                                    >
                                        <Monitor size={18} />
                                        <span className="text-[10px] font-bold">Social Media</span>
                                    </button>
                                    <button
                                        onClick={() => setOutputMode('print')}
                                        className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${outputMode === 'print' ? 'bg-brand-red/10 border-brand-red text-white' : 'bg-black/20 border-white/5 text-gray-500 hover:border-white/20'}`}
                                    >
                                        <Printer size={18} />
                                        <span className="text-[10px] font-bold">Print Ready</span>
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleGenerate}
                                disabled={isGenerating || !prompt}
                                className="w-full bg-brand-red text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-red/20 group"
                            >
                                {isGenerating ? (
                                    <>
                                        <RefreshCw size={20} className="animate-spin" /> Generating...
                                    </>
                                ) : (
                                    <>
                                        Generate Assets <Zap size={20} className="fill-white group-hover:scale-125 transition-transform" />
                                    </>
                                )}
                            </button>
                        </section>

                        <section className="bg-brand-zinc border border-white/5 rounded-2xl p-6">
                            <h3 className="text-xs font-bold text-gray-500 mb-4 px-1 uppercase tracking-wider">Quick Templates</h3>
                            <div className="space-y-2">
                                {['Summer Sale Ad', 'New Arrival Reel', 'Event Flyer', 'Logo Refresh'].map(t => (
                                    <button key={t} className="w-full text-left p-3 rounded-xl bg-black/20 border border-white/5 hover:border-brand-red/30 hover:bg-white/5 transition-all text-sm font-medium flex items-center justify-between group">
                                        {t}
                                        <ChevronDown size={14} className="-rotate-90 text-gray-600 group-hover:text-brand-red" />
                                    </button>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Panel: Preview Area */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <div className="bg-brand-zinc border border-white/5 rounded-3xl p-8 flex-1 min-h-[600px] flex flex-col items-center justify-center relative overflow-hidden">
                            {/* Processing Overlay */}
                            {isGenerating && (
                                <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm z-20 flex flex-col items-center justify-center animate-fade-in">
                                    <div className="w-72 space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-black uppercase text-brand-red tracking-[3px]">Lazy AI Processing</span>
                                            <span className="text-xs text-gray-400">Hustling...</span>
                                        </div>
                                        <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
                                            <div className="h-full bg-brand-red rounded-full animate-pulse shadow-[0_0_15px_rgba(215,30,40,0.8)]" style={{ width: '65%' }}></div>
                                        </div>
                                        <p className="text-center text-sm font-bold text-gray-300 animate-pulse">{generationStep}</p>
                                    </div>
                                </div>
                            )}

                            {!generatedImage && !isGenerating ? (
                                <div className="text-center space-y-6 opacity-40">
                                    <div className="w-32 h-32 bg-black/40 rounded-full flex items-center justify-center mx-auto border border-dashed border-white/20">
                                        <ImageIcon size={48} className="text-gray-500" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold">Waiting for your creativity...</p>
                                        <p className="text-sm text-gray-500 px-12">Enter a description on the left to start generating high-impact brand assets.</p>
                                    </div>
                                </div>
                            ) : generatedImage && !isGenerating ? (
                                <div className="w-full h-full flex flex-col animate-fade-in">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-2">
                                            <span className="bg-brand-red/20 text-brand-red text-[10px] font-black px-2 py-0.5 rounded uppercase">NEW DESIGN</span>
                                            <span className="text-sm font-bold text-gray-400">Variation #1</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="p-2 bg-white/5 border border-white/5 rounded-lg hover:border-brand-red transition-all cursor-pointer">
                                                <RefreshCw size={18} className="text-gray-400" />
                                            </button>
                                            <button className="p-2 bg-white/5 border border-white/5 rounded-lg hover:border-brand-red transition-all cursor-pointer">
                                                <Share2 size={18} className="text-gray-400" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex-1 bg-black/40 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center group relative shadow-2xl">
                                        {/* Placeholder for Generated Design */}
                                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-zinc to-brand-black p-12">
                                            <div className="relative w-full max-w-lg aspect-square">
                                                <div className="absolute inset-0 border border-brand-red/20 rounded-xl"></div>
                                                <div className="absolute inset-4 bg-brand-white/5 rounded-lg flex items-center justify-center">
                                                    <span className="text-brand-red text-9xl font-black italic opacity-20">A.I</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Bar */}
                                        <div className="absolute bottom-6 inset-x-0 flex justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="bg-brand-black/90 backdrop-blur-md border border-white/10 p-2 rounded-2xl flex gap-2 shadow-2xl">
                                                <button className="flex items-center gap-2 px-6 py-2.5 bg-brand-red text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-red/20">
                                                    <Download size={16} /> Download 4K
                                                </button>
                                                <button
                                                    onClick={() => setActiveTab('mockup')}
                                                    className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-xl text-sm font-bold"
                                                >
                                                    <PenTool size={16} /> Send to Mockup
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-4 gap-4 mt-6">
                                        {[1, 2, 3, 4].map(i => (
                                            <button key={i} className={`h-24 rounded-xl border transition-all ${i === 1 ? 'border-brand-red ring-2 ring-brand-red/50 ring-offset-2 ring-offset-brand-black' : 'border-white/5 hover:border-white/20'}`}>
                                                <div className="w-full h-full bg-black/40 flex items-center justify-center rounded-lg overflow-hidden">
                                                    <span className="text-[10px] font-black text-gray-700">VARIANT {i}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : (
                /* MOCKUP STUDIO INTERFACE */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
                    {/* Left Panel: Mockup Options */}
                    <div className="lg:col-span-3 space-y-6">
                        <section className="bg-brand-zinc border border-white/5 rounded-2xl p-6">
                            <h3 className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-wider">Select Canvas</h3>

                            <div className="space-y-4">
                                {[
                                    { id: 'apparel', label: 'Apparel & Fashion', count: 12 },
                                    { id: 'packaging', label: 'Packaging', count: 8 },
                                    { id: 'print', label: 'Print & Branding', count: 5 },
                                    { id: 'digital', label: 'Digital Devices', count: 9 },
                                ].map(cat => (
                                    <button key={cat.id} className="w-full flex items-center justify-between p-3 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 transition-all text-sm font-medium">
                                        {cat.label}
                                        <span className="text-[10px] bg-brand-red/20 text-brand-red px-1.5 py-0.5 rounded font-bold">{cat.count}</span>
                                    </button>
                                ))}
                            </div>

                            <hr className="my-6 border-white/5" />

                            <h3 className="text-[10px] font-black text-gray-500 mb-4 uppercase tracking-[2px]">T-Shirt Templates</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {[1, 2, 3, 4].map(i => (
                                    <button
                                        key={i}
                                        onClick={() => setMockupTemplate(`tshirt-${i}`)}
                                        className={`p-3 aspect-square rounded-xl border transition-all flex flex-col items-center justify-center gap-2 ${mockupTemplate === `tshirt-${i}` ? 'bg-brand-red/10 border-brand-red ring-2 ring-brand-red/20' : 'bg-black/20 border-white/5 hover:border-white/20'}`}
                                    >
                                        <div className="w-8 h-8 rounded-full border border-white/10" />
                                        <span className="text-[10px] font-bold text-gray-500">FRONT</span>
                                    </button>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Middle: Mockup Canvas */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="bg-[#111] border border-white/5 rounded-3xl p-12 min-h-[600px] flex items-center justify-center relative shadow-inner">
                            {isMocking && (
                                <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-md z-30 flex flex-col items-center justify-center">
                                    <div className="w-16 h-16 border-4 border-brand-red border-t-transparent rounded-full animate-spin mb-4" />
                                    <p className="text-sm font-black uppercase text-brand-red animate-pulse tracking-widest">Applying Texture Labels...</p>
                                </div>
                            )}

                            {!mockupResult ? (
                                <div className="text-center space-y-6">
                                    {/* Mock T-Shirt Wireframe */}
                                    <div className="w-64 h-80 border-2 border-dashed border-white/10 rounded-full flex items-center justify-center opacity-30">
                                        <PenTool size={48} className="text-gray-500" />
                                    </div>
                                    <p className="text-gray-500 font-bold">T-Shirt Canvas Selected</p>
                                </div>
                            ) : (
                                <div className="relative group animate-scale-in">
                                    <div className="w-80 h-[450px] bg-white rounded-sm shadow-2xl relative overflow-hidden">
                                        {/* Mockup Texture Simulation */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-white shadow-inner"></div>
                                        <div className="absolute inset-12 bg-brand-red rounded shadow-lg transform rotate-[-2deg] flex items-center justify-center p-4">
                                            <span className="text-white font-black text-2xl tracking-tighter italic">LAZY STYLE</span>
                                        </div>
                                        {/* Texture Overlay */}
                                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/fabric-plaid.png')]"></div>
                                    </div>

                                    {/* Controls overlay */}
                                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                                        <button className="p-2 bg-black/60 backdrop-blur-xl rounded-lg border border-white/10 text-white hover:bg-brand-red transition-colors">
                                            <RefreshCw size={16} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={handleMockupGenerate}
                                className="flex-1 bg-white text-black font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-all shadow-xl"
                            >
                                <PenTool size={20} /> Preview Mockup
                            </button>
                            <button className="px-6 bg-brand-zinc border border-white/5 text-white rounded-xl hover:bg-white/5 transition-all">
                                <Plus size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Right Panel: Export */}
                    <div className="lg:col-span-3 space-y-6">
                        <section className="bg-brand-zinc border border-white/5 rounded-2xl p-6">
                            <h3 className="text-sm font-bold text-gray-300 mb-6 uppercase tracking-wider">Export Settings</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center text-xs font-bold font-mono">
                                    <span className="text-gray-500">FORMAT</span>
                                    <span className="text-white">PNG (.transparency)</span>
                                </div>
                                <div className="flex justify-between items-center text-xs font-bold font-mono">
                                    <span className="text-gray-500">RESOLUTION</span>
                                    <span className="text-white">300 DPI (PRINT)</span>
                                </div>
                                <div className="flex justify-between items-center text-xs font-bold font-mono">
                                    <span className="text-gray-500">SMART_OBJECT</span>
                                    <span className="text-brand-green">ENABLED</span>
                                </div>
                            </div>

                            <button className="w-full bg-brand-zinc border border-white/10 text-white font-bold py-3 rounded-xl mb-3 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                                <Monitor size={16} /> Save for Web
                            </button>
                            <button className="w-full bg-brand-red text-white font-bold py-4 rounded-xl hover:bg-red-600 transition-all shadow-lg shadow-brand-red/20 flex items-center justify-center gap-2 group">
                                <Download size={20} className="group-hover:translate-y-1 transition-transform" /> Download Production File
                            </button>
                        </section>

                        <section className="bg-gradient-to-br from-brand-red/10 to-transparent border border-brand-red/10 rounded-2xl p-6">
                            <h4 className="text-xs font-black text-brand-red uppercase mb-2">Pro Tip</h4>
                            <p className="text-xs text-gray-400 leading-relaxed italic">
                                "Our mockup engine automatically adjusts for fabric texture and shadow depth."
                            </p>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Generator;
