import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Plus, Filter, MoreHorizontal, Instagram, Twitter, Facebook, Linkedin, Trash2, Edit2, Share2 } from 'lucide-react';

function Scheduler() {
    const [view, setView] = useState('calendar'); // 'calendar' | 'list'

    const events = [
        { id: 1, title: 'Summer Collection Reveal', platform: 'Instagram', time: '10:00 AM', status: 'Scheduled', type: 'Reel' },
        { id: 2, title: 'Flash Sale Announcement', platform: 'Facebook', time: '02:00 PM', status: 'Pending', type: 'Static Ad' },
        { id: 3, title: 'Industry Trends Discussion', platform: 'Twitter', time: '04:30 PM', status: 'Draft', type: 'Thread' },
        { id: 4, title: 'Weekly Recap Story', platform: 'Instagram', time: '06:00 PM', status: 'Scheduled', type: 'Story' },
    ];

    const getPlatformIcon = (platform) => {
        switch (platform) {
            case 'Instagram': return <Instagram size={16} />;
            case 'Twitter': return <Twitter size={16} />;
            case 'Facebook': return <Facebook size={16} />;
            case 'Linkedin': return <Linkedin size={16} />;
            default: return <Share2 size={16} />;
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black mb-1">Campaign Planner</h1>
                    <p className="text-gray-400">Schedule AI-generated content across all platforms.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-brand-zinc border border-white/5 px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
                        <Filter size={18} /> Filters
                    </button>
                    <button className="bg-brand-red text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-lg shadow-brand-red/20 flex items-center gap-2 hover:bg-red-600 transition-all">
                        <Plus size={18} /> New Campaign
                    </button>
                </div>
            </div>

            {/* Calendar Mockup */}
            <div className="bg-brand-zinc border border-white/5 rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-bold italic">October 2024</h2>
                        <div className="flex gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
                            <button className="p-1 px-3 text-xs font-bold bg-white/10 rounded">Month</button>
                            <button className="p-1 px-3 text-xs font-bold text-gray-500 hover:text-white transition-colors">Week</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex gap-3">
                            {['IG', 'FB', 'TW', 'LI'].map(p => (
                                <div key={p} className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-[10px] font-black text-gray-500 hover:text-white transition-colors cursor-pointer">
                                    {p}
                                </div>
                            ))}
                        </div>
                        <button className="text-brand-red text-xs font-black uppercase tracking-widest border-b border-brand-red">Connect Social Account</button>
                    </div>
                </div>

                {/* Calendar Grid Mock */}
                <div className="p-4 grid grid-cols-7 gap-px bg-white/5 min-h-[400px]">
                    {[...Array(31)].map((_, i) => (
                        <div key={i} className="bg-brand-zinc min-h-[120px] p-2 flex flex-col gap-2 group hover:bg-white/[0.02] transition-colors relative">
                            <span className={`text-[10px] font-bold ${i === 23 ? 'text-brand-red' : 'text-gray-600'}`}>{i + 1}</span>

                            {i === 23 && (
                                <div className="space-y-1">
                                    <div className="p-1.5 bg-brand-red rounded-lg text-white animate-scale-in">
                                        <p className="text-[10px] font-black leading-tight truncate">Campaign #1</p>
                                    </div>
                                    <div className="p-1.5 bg-blue-500 rounded-lg text-white">
                                        <p className="text-[10px] font-black leading-tight truncate">Social Post</p>
                                    </div>
                                </div>
                            )}

                            {i === 25 && (
                                <div className="p-1.5 bg-black/40 border border-brand-red/30 rounded-lg text-brand-red">
                                    <p className="text-[10px] font-black leading-tight truncate">Draft Post</p>
                                </div>
                            )}

                            <button className="absolute bottom-2 right-2 p-1.5 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 hover:text-white">
                                <Plus size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Scheduler;
