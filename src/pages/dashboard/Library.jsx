import { useState } from 'react';
import { Download, Trash2, Search, Video, Image as ImageIcon } from 'lucide-react';

function Library() {
    const [activeTab, setActiveTab] = useState('All');

    const mockAssets = [
        { id: 1, type: 'image', title: 'Summer Sale Post', date: 'Oct 24, 2024', platform: 'Instagram' },
        { id: 2, type: 'image', title: 'Product Showcase', date: 'Oct 23, 2024', platform: 'Facebook' },
        { id: 3, type: 'video', title: 'Story Ad', date: 'Oct 22, 2024', platform: 'TikTok' },
        { id: 4, type: 'image', title: 'Hiring Post', date: 'Oct 20, 2024', platform: 'LinkedIn' },
        { id: 5, type: 'image', title: 'Meme Content', date: 'Oct 19, 2024', platform: 'Twitter' },
        { id: 6, type: 'video', title: 'Reel Teaser', date: 'Oct 18, 2024', platform: 'Instagram' },
    ];

    const filteredAssets = activeTab === 'All' ? mockAssets : mockAssets.filter(a => a.type === activeTab.toLowerCase() || (activeTab === 'Images' && a.type === 'image') || (activeTab === 'Videos' && a.type === 'video'));

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black mb-2">Content Library</h1>
                    <p className="text-gray-400">Manage and organize your AI-generated assets.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-brand-red text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg shadow-brand-red/20">
                        Generate New
                    </button>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-brand-zinc p-2 rounded-xl border border-white/5">
                <div className="flex gap-1 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    {['All', 'Images', 'Videos', 'Campaigns'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab ? 'bg-white text-black' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="relative w-full md:w-64">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input type="text" placeholder="Search library..." className="w-full bg-brand-black border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-white/20" />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {filteredAssets.map((asset) => (
                    <div key={asset.id} className="group relative aspect-[4/5] bg-brand-zinc rounded-xl overflow-hidden border border-white/5 hover:border-brand-red/50 transition-colors">
                        {/* Preview Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            {asset.type === 'video' ? <Video size={32} className="text-gray-600" /> : <ImageIcon size={32} className="text-gray-600" />}
                        </div>

                        {/* Overlay Info */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                            <h3 className="font-bold text-sm truncate">{asset.title}</h3>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[10px] text-gray-400">{asset.platform}</span>
                                <div className="flex gap-2">
                                    <button className="text-white hover:text-brand-red"><Download size={14} /></button>
                                    <button className="text-white hover:text-red-500"><Trash2 size={14} /></button>
                                </div>
                            </div>
                        </div>

                        {/* Type Badge */}
                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white/80">
                            {asset.type}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Library;
