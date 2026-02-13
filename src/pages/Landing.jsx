import { Link } from 'react-router-dom';
import { Bot, Check, Zap, Image, BarChart3, ArrowRight } from 'lucide-react';

function Landing() {
    return (
        <div className="min-h-screen bg-brand-black text-white font-sans overflow-x-hidden">
            {/* Navbar */}
            <nav className="flex justify-between items-center py-6 px-6 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-2">
                    <div className="bg-brand-red p-1.5 rounded-lg shadow-[0_0_15px_rgba(215,30,40,0.5)]">
                        <Bot size={20} className="text-white" />
                    </div>
                    <span className="text-lg font-black tracking-wider">LAZY GORILLA</span>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-sm font-medium hover:text-brand-red transition-colors hidden sm:block">Login</Link>
                    <Link to="/signup" className="bg-brand-white text-brand-black text-xs font-bold px-4 py-2.5 rounded-full hover:bg-gray-200 transition-colors">
                        Sign Up
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-6 pt-12 pb-20 text-center relative">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-zinc border border-white/5 mb-6 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">AI Marketing Engine v1.0</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
                    Your AI Marketing Team <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-white to-gray-500">for $8/month.</span>
                </h1>

                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Stop overpaying agencies. Get high-converting social assets, automated copy, and scheduled growth in one click.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <Link to="/signup" className="w-full sm:w-auto bg-brand-red text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-red-600 transition-all shadow-[0_0_30px_rgba(215,30,40,0.4)] hover:shadow-[0_0_50px_rgba(215,30,40,0.6)] flex items-center justify-center gap-2 group">
                        Start Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="w-full sm:w-auto bg-brand-zinc text-white font-bold text-lg px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                        View Demo
                    </button>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {[
                        { icon: Image, title: "One-Click Creative", desc: "Drop your logo and let AI generate a month's worth of social media ads, posts, and stories in seconds." },
                        { icon: Zap, title: "Auto-Pilot Marketing", desc: "Integrated scheduling that knows when your audience is awake. Set it, forget it, watch the leads grow." },
                        { icon: BarChart3, title: "Brand Intelligence", desc: "Our AI learns your specific brand voice. No more generic ChatGPT fluff. It sounds like you, but better." }
                    ].map((feature, i) => (
                        <div key={i} className="bg-brand-zinc/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-brand-zinc transition-colors group">
                            <div className="w-12 h-12 bg-brand-zinc rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-brand-red/50 transition-colors">
                                <feature.icon size={24} className="text-brand-red" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </main>

            {/* Pricing Section */}
            <section className="bg-brand-zinc py-24 px-6 border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-black italic mb-2">SIMPLE PRICING.</h2>
                    <p className="text-gray-400 mb-12">No tiers. No lock-ins. Just growth.</p>

                    <div className="relative bg-brand-black p-8 md:p-12 rounded-3xl border border-white/10 max-w-md mx-auto overflow-hidden">
                        <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-bl-xl">MOST POWERFUL</div>

                        <div className="flex items-baseline justify-center gap-1 mb-8">
                            <span className="text-6xl font-black">$8</span>
                            <span className="text-gray-500 font-bold uppercase text-sm">/ Month</span>
                        </div>

                        <ul className="space-y-4 mb-10 text-left">
                            {['Unlimited AI Asset Generation', 'Multi-Platform Auto-Scheduler', 'Custom Brand Voice Training', 'Priority 24/7 Hustle Support'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                                        <Check size={12} className="text-brand-red" />
                                    </div>
                                    <span className="font-medium text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full bg-brand-red text-white font-bold text-lg py-4 rounded-xl hover:bg-red-600 transition-all shadow-lg shadow-brand-red/20">
                            CLAIM MY PLAN
                        </button>
                        <p className="text-center text-xs text-gray-500 mt-4">7-Day Free Trial. Cancel Anytime.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
                    <Bot size={16} />
                    <span className="font-bold tracking-wider">LAZY GORILLA</span>
                </div>
                <p>© 2026 Lazy Gorilya Inc. Designed for the side-hustlers who want more.</p>
            </footer>
        </div>
    );
}

export default Landing;
