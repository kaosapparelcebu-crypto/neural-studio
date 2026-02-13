import { Outlet, Link, useLocation } from 'react-router-dom';
import {
    LayoutGrid,
    Image,
    Calendar,
    Share2,
    FolderOpen,
    Palette,
    CreditCard,
    Settings,
    Bot,
    Bell,
    Search,
    LogOut,
    Flame
} from 'lucide-react';

function DashboardLayout() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const menuItems = [
        { icon: LayoutGrid, label: 'Overview', path: '/dashboard' },
        { icon: Flame, label: 'Trend Radar', path: '/dashboard/trends' },
        { icon: Image, label: 'Generate Design', path: '/dashboard/generate' },
        { icon: Calendar, label: 'Campaign Planner', path: '/dashboard/campaigns' },
        { icon: Share2, label: 'Social Posting', path: '/dashboard/social' },
        { icon: FolderOpen, label: 'Content Library', path: '/dashboard/library' },
        { icon: Palette, label: 'Brand Kit', path: '/dashboard/brand' },
    ];

    const bottomItems = [
        { icon: CreditCard, label: 'Billing', path: '/dashboard/billing' },
        { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    ];

    return (
        <div className="min-h-screen bg-brand-black text-white font-sans flex">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-zinc border-r border-white/5 flex flex-col fixed inset-y-0 z-50">
                <div className="p-6 flex items-center gap-3">
                    <div className="bg-brand-red p-1.5 rounded-lg shadow-lg shadow-brand-red/20">
                        <Bot size={20} className="text-white" />
                    </div>
                    <span className="font-black tracking-wider text-sm">LAZY GORILLA</span>
                </div>

                <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 mt-4 px-2">Main</div>
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive(item.path) ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <item.icon size={18} />
                            {item.label}
                        </Link>
                    ))}

                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 mt-8 px-2">System</div>
                    {bottomItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive(item.path) ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <item.icon size={18} />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-colors">
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 ml-64 flex flex-col min-h-screen">
                {/* Topbar */}
                <header className="h-16 bg-brand-black border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-40 bg-opacity-80 backdrop-blur-md">
                    {/* Search */}
                    <div className="relative w-96">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search designs, campaigns, or assets..."
                            className="w-full bg-brand-zinc border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-brand-red/50 transition-colors"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 bg-brand-zinc px-3 py-1.5 rounded-full border border-white/5">
                            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                            <span className="text-xs font-bold text-gray-300">120 Credits</span>
                        </div>

                        <button className="relative text-gray-400 hover:text-white transition-colors">
                            <Bell size={20} />
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-red rounded-full border-2 border-brand-black"></span>
                        </button>

                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 border border-white/10 cursor-pointer"></div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
