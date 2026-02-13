import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Coffee, Printer, Scissors, HardHat, Home, Dumbbell, Globe, Building2, PartyPopper, Plus, ArrowRight, Bot } from 'lucide-react';

function Onboarding() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const businessTypes = [
        { id: 'streetwear', label: 'Clothing / Streetwear', icon: ShoppingBag, color: 'text-purple-500' },
        { id: 'food', label: 'Food & Beverage', icon: Coffee, color: 'text-orange-500' },
        { id: 'print', label: 'Printing Services', icon: Printer, color: 'text-blue-500' },
        { id: 'beauty', label: 'Salon / Beauty', icon: Scissors, color: 'text-pink-500' },
        { id: 'construction', label: 'Construction', icon: HardHat, color: 'text-yellow-500' },
        { id: 'realestate', label: 'Real Estate', icon: Home, color: 'text-green-500' },
        { id: 'fitness', label: 'Fitness / Gym', icon: Dumbbell, color: 'text-red-500' },
        { id: 'ecommerce', label: 'E-commerce Shop', icon: Globe, color: 'text-indigo-500' },
        { id: 'corporate', label: 'Corporate Services', icon: Building2, color: 'text-gray-500' },
        { id: 'events', label: 'Events', icon: PartyPopper, color: 'text-yellow-300' },
    ];

    const handleContinue = () => {
        if (step === 1 && selectedBusiness) {
            setIsProcessing(true);
            // Simulate AI Analysis
            setTimeout(() => {
                setIsProcessing(false);
                setStep(2);
            }, 1500);
        } else if (step === 2) {
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-brand-black text-white font-sans flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-red/5 blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl w-full relative z-10">
                <header className="flex items-center gap-3 mb-12 justify-center">
                    <div className="bg-brand-red p-2 rounded-lg shadow-lg shadow-brand-red/20">
                        <Bot size={24} className="text-white" />
                    </div>
                    <span className="text-xl font-black tracking-wide">LAZY GORILLA</span>
                </header>

                {isProcessing ? (
                    <div className="text-center space-y-6 animate-fade-in">
                        <div className="relative w-24 h-24 mx-auto">
                            <div className="absolute inset-0 border-4 border-brand-zinc rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-t-brand-red border-r-brand-red rounded-full animate-spin"></div>
                            <Bot size={32} className="absolute inset-0 m-auto text-brand-red animate-pulse" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Analyzing {businessTypes.find(b => b.id === selectedBusiness)?.label}...</h2>
                            <p className="text-gray-400">Scanning Top 50 Viral Trends • Generating Strategy • Building Brand Voice</p>
                        </div>
                    </div>
                ) : step === 1 ? (
                    <div className="space-y-8 animate-slide-up">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl font-black mb-4">What type of business are you?</h1>
                            <p className="text-gray-400">Our AI will scan industry trends to build your custom marketing strategy.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {businessTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setSelectedBusiness(type.id)}
                                    className={`p-6 rounded-2xl border flex flex-col items-center justify-center gap-4 transition-all hover:scale-105 ${selectedBusiness === type.id ? 'bg-brand-red border-brand-red shadow-lg shadow-brand-red/20' : 'bg-brand-zinc border-white/5 hover:border-white/20 hover:bg-white/5'}`}
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedBusiness === type.id ? 'bg-white/20 text-white' : 'bg-black/40 ' + type.color}`}>
                                        <type.icon size={24} />
                                    </div>
                                    <span className="text-xs font-bold text-center">{type.label}</span>
                                </button>
                            ))}
                            {/* Custom Option */}
                            <button className="p-6 rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center gap-4 transition-all hover:border-brand-red/50 hover:bg-white/5 bg-brand-zinc/50">
                                <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-gray-400">
                                    <Plus size={24} />
                                </div>
                                <span className="text-xs font-bold text-gray-400">Other</span>
                            </button>
                        </div>

                        <div className="flex justify-center pt-8">
                            <button
                                onClick={handleContinue}
                                disabled={!selectedBusiness}
                                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${selectedBusiness ? 'bg-white text-black hover:bg-gray-200 shadow-xl' : 'bg-brand-zinc text-gray-500 cursor-not-allowed'}`}
                            >
                                Continue <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-xl mx-auto space-y-8 animate-slide-up text-center">
                        <div>
                            <h1 className="text-3xl font-black mb-4">Analysis Complete! 🚀</h1>
                            <p className="text-gray-400">We found <span className="text-white font-bold">14 viral trends</span> and <span className="text-white font-bold">3 competitor strategies</span> for your niche.</p>
                        </div>

                        <div className="bg-brand-zinc border border-white/5 p-6 rounded-2xl space-y-4 text-left">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <p className="font-bold">Strategy Generated</p>
                                    <p className="text-xs text-gray-400">Weekly posting plan ready.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <p className="font-bold">Competitors Scanned</p>
                                    <p className="text-xs text-gray-400">Analyzed top 5 performers.</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleContinue}
                            className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-brand-red text-white hover:bg-red-600 shadow-lg shadow-brand-red/20 transition-all"
                        >
                            Go to Dashboard
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Onboarding;
