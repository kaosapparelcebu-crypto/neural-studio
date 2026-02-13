import {
    LayoutGrid,
    CreditCard,
    Users,
    ArrowUpRight,
    Zap,
    TrendingUp,
    Calendar,
    Clock,
    CheckCircle2,
    Sparkles,
    ChevronRight,
    Play
} from 'lucide-react';

function Overview() {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-xs text-brand-red font-black tracking-[4px] mb-2 uppercase">Command Center</h2>
                    <h1 className="text-3xl font-black">Good Morning, Hustler ⚡</h1>
                </div>
                <div className="text-right">
                    <p className="text-xs font-bold text-gray-500 uppercase">Current Month Reach</p>
                    <p className="text-2xl font-black text-brand-green">+24.8%</p>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Designs Generated', value: '142', trend: '+12', icon: LayoutGrid },
                    { label: 'AI Credits Used', value: '380', trend: '-20', icon: Zap },
                    { label: 'Active Campaigns', value: '4', trend: 'Healthy', icon: Calendar },
                    { label: 'Reach Growth', value: '2.4K', trend: '+14%', icon: TrendingUp },
                ].map((stat, i) => (
                    <div key={i} className="bg-brand-zinc border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-brand-red/30 transition-all">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:bg-brand-red/10 transition-colors"></div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-black/40 rounded-xl flex items-center justify-center text-brand-red border border-white/5">
                                <stat.icon size={20} />
                            </div>
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${stat.trend.startsWith('+') ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-red/10 text-brand-red'}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</h3>
                        <p className="text-2xl font-black">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Today's Designs */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <Sparkles size={20} className="text-brand-red" /> Today&apos;s AI Generations
                        </h2>
                        <button className="text-xs font-bold text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
                            VIEW GALLERY <ChevronRight size={14} />
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="aspect-[4/5] bg-brand-zinc border border-white/5 rounded-2xl overflow-hidden group relative cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent opacity-60"></div>
                                {/* Mock design visual */}
                                <div className="w-full h-full bg-gradient-to-br from-brand-zinc to-black p-6 flex flex-col justify-end">
                                    <p className="text-[10px] font-bold text-brand-red tracking-widest uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Design #{i}</p>
                                    <h4 className="font-bold text-xs truncate">Instagram Fashion Ad - Alpha Style</h4>
                                </div>
                                <div className="absolute top-4 right-4 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                    <button className="p-2 bg-brand-red text-white rounded-lg shadow-lg">
                                        <ArrowUpRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Action Prompt */}
                    <div className="bg-gradient-to-r from-brand-red/10 to-transparent border border-brand-red/10 rounded-3xl p-8 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-black mb-2 italic">Ready for more?</h3>
                            <p className="text-gray-400 text-sm">Tell Lazy AI what you want to create next.</p>
                        </div>
                        <button className="bg-brand-red text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-red/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                            OPEN GENERATOR <Zap size={18} className="fill-white" />
                        </button>
                    </div>
                </div>

                {/* Right: Schedule & Activity */}
                <div className="lg:col-span-4 space-y-6">
                    <h2 className="text-xl font-bold">Upcoming Posts</h2>
                    <div className="bg-brand-zinc border border-white/5 rounded-2xl overflow-hidden divide-y divide-white/5">
                        {[
                            { time: '14:00', platform: 'Instagram', title: 'New Arrival Teaser', status: 'ready' },
                            { time: '18:30', platform: 'Facebook', title: 'Flash Sale Reminder', status: 'ready' },
                            { time: 'Tomorrow', platform: 'LinkedIn', title: 'Team Milestone Story', status: 'draft' },
                        ].map((post, i) => (
                            <div key={i} className="p-4 flex items-center gap-4 hover:bg-white/5 transition-colors group">
                                <div className="w-12 h-12 bg-black/40 rounded-xl flex flex-col items-center justify-center border border-white/5 group-hover:border-brand-red/30 transition-all">
                                    <span className="text-[10px] font-black text-brand-red">{post.time}</span>
                                    <Clock size={12} className="text-gray-500" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{post.platform}</p>
                                    <h4 className="font-bold text-sm truncate">{post.title}</h4>
                                </div>
                                <div className={post.status === 'ready' ? 'text-brand-green' : 'text-gray-600'}>
                                    <CheckCircle2 size={18} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-brand-zinc to-brand-black border border-white/5 p-6 rounded-2xl">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Hustle Streak</h4>
                        <div className="flex gap-2">
                            {[1, 1, 1, 1, 1, 0, 0].map((active, i) => (
                                <div key={i} className={`h-8 flex-1 rounded-sm ${active ? 'bg-brand-red' : 'bg-white/5'}`}></div>
                            ))}
                        </div>
                        <p className="text-[10px] text-gray-400 mt-4 text-center">You've reached 85% more people this week!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
