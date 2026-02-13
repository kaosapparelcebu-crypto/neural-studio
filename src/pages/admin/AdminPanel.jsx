import {
    Bot,
    TrendingUp,
    Users,
    Star,
    Clock,
    CreditCard,
    Palette,
    Plus,
    LayoutGrid,
    FileText,
    Settings
} from 'lucide-react';

function AdminPanel() {
    return (
        <div className="min-h-screen bg-brand-black text-white font-sans pb-20">
            {/* Header */}
            <header className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-brand-red p-2 rounded-lg shadow-lg shadow-brand-red/20">
                        <Bot size={24} color="white" />
                    </div>
                    <div>
                        <h2 className="text-xs text-brand-red font-bold tracking-wider mb-0.5">SUPER ADMIN</h2>
                        <h1 className="text-xl font-black tracking-wide">LAZY GORILLA</h1>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white/10">
                        <img src="https://i.pravatar.cc/150?u=lazy" alt="Profile" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-brand-green rounded-full border-2 border-brand-black"></div>
                </div>
            </header>

            <main className="px-6 space-y-6">

                {/* Global AI Usage Card */}
                <div className="bg-brand-dark rounded-2xl p-6 relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-gray-400 text-sm font-medium mb-1">Global AI Usage</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold">1.2M</span>
                            <span className="text-brand-red text-sm font-bold">+14%</span>
                        </div>
                    </div>

                    {/* Decorative Curve */}
                    <div className="absolute right-0 bottom-4 w-1/2 h-12">
                        <svg viewBox="0 0 100 40" className="w-full h-full stroke-brand-red fill-none stroke-[3] opacity-80">
                            <path d="M0,40 C30,40 30,10 50,20 C70,30 70,0 100,5" />
                        </svg>
                    </div>
                </div>

                {/* User Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-brand-dark rounded-2xl p-5">
                        <h3 className="text-gray-400 text-xs font-medium mb-2">Total Users</h3>
                        <div className="flex justify-between items-end">
                            <span className="text-2xl font-bold">12,482</span>
                            <TrendingUp size={16} className="text-brand-red mb-1" />
                        </div>
                    </div>
                    <div className="bg-brand-dark rounded-2xl p-5">
                        <h3 className="text-gray-400 text-xs font-medium mb-2">Active Subs</h3>
                        <div className="flex justify-between items-end">
                            <span className="text-2xl font-bold">842</span>
                            <Star size={16} className="text-brand-red mb-1 fill-brand-red" />
                        </div>
                    </div>
                </div>

                {/* Approve Posts Section */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                            <h2 className="text-lg font-bold">Approve Posts</h2>
                            <span className="bg-brand-red/20 text-brand-red text-[10px] font-bold px-2 py-1 rounded-full">4 PENDING</span>
                        </div>
                        <button className="text-brand-red text-xs font-bold">View All</button>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
                        {/* Post Card 1 */}
                        <div className="min-w-[280px] bg-brand-dark rounded-xl overflow-hidden shadow-lg">
                            <div className="h-40 bg-gray-200 relative group">
                                <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">
                                    Instagram Feed
                                </div>
                                {/* Placeholder Image */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] text-orange-600 font-bold">C</div>
                                    <span className="text-sm font-medium truncate">Cafe &apos;The Bean&apos; - Promo</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-brand-red hover:bg-red-700 text-white text-xs font-bold py-2.5 rounded transition-colors">
                                        APPROVE
                                    </button>
                                    <button className="flex-1 bg-brand-gray hover:bg-gray-700 text-gray-300 text-xs font-bold py-2.5 rounded transition-colors">
                                        REJECT
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Post Card 2 */}
                        <div className="min-w-[280px] bg-brand-dark rounded-xl overflow-hidden shadow-lg opacity-50">
                            <div className="h-40 bg-gray-200 relative">
                                <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">
                                    LinkedIn Ad
                                </div>
                                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] text-blue-600 font-bold">N</div>
                                    <span className="text-sm font-medium truncate">NexGen Tech</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-brand-red text-white text-xs font-bold py-2.5 rounded">
                                        APPROVE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activities */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">Recent Activities</h2>
                        <Clock size={18} className="text-gray-500" />
                    </div>

                    <div className="space-y-3">
                        {[
                            { icon: Users, color: 'text-brand-red', bg: 'bg-brand-red/10', title: 'New SME Onboarded', desc: 'Zen Yoga Studio joined the platform', time: '2m ago' },
                            { icon: Palette, color: 'text-brand-red', bg: 'bg-brand-red/10', title: 'Asset Batch Generated', desc: "12 Facebook Ads created for 'Pizza Hub'", time: '15m ago' },
                            { icon: CreditCard, color: 'text-brand-red', bg: 'bg-brand-red/10', title: 'Subscription Renewed', desc: 'Enterprise plan renewed for BlueSky Logistics', time: '1h ago' },
                        ].map((item, i) => (
                            <div key={i} className="bg-brand-dark p-4 rounded-xl flex items-start gap-4">
                                <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                                    <item.icon size={18} className={item.color} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-sm truncate">{item.title}</h4>
                                        <span className="text-[10px] text-gray-500 whitespace-nowrap ml-2">{item.time}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-0.5 truncate">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Manage Templates */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">Manage Templates</h2>
                        <button className="w-8 h-8 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red">
                            <Plus size={18} />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-40 bg-brand-dark rounded-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gray-700/50 mix-blend-overlay"></div>
                            {/* Mockup */}
                            <div className="absolute inset-4 bg-white/5 shadow-inner border border-white/5 mx-auto rounded-sm transform scale-75 group-hover:scale-90 transition-transform"></div>

                            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                                <span className="text-[10px] text-brand-red font-bold block">MODERN</span>
                                <span className="text-xs font-bold">Corporate Minimal</span>
                            </div>
                        </div>
                        <div className="h-40 bg-brand-dark rounded-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gray-700/50 mix-blend-overlay"></div>
                            {/* Mockup */}
                            <div className="absolute inset-4 bg-white/5 shadow-inner border border-white/5 mx-auto rounded-sm transform scale-75 group-hover:scale-90 transition-transform"></div>

                            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                                <span className="text-[10px] text-brand-red font-bold block">DYNAMIC</span>
                                <span className="text-xs font-bold">Food & Dining</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 inset-x-0 bg-brand-black border-t border-white/5 py-3 px-6 flex justify-between items-center z-50">
                <button className="flex flex-col items-center gap-1 text-brand-red">
                    <LayoutGrid size={20} />
                    <span className="text-[10px] font-medium">Dashboard</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
                    <Users size={20} />
                    <span className="text-[10px] font-medium">Users</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
                    <FileText size={20} />
                    <span className="text-[10px] font-medium">Reports</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
                    <Settings Icon size={20} />
                    <span className="text-[10px] font-medium">System</span>
                </button>
            </nav>
        </div>
    );
}

export default AdminPanel;
