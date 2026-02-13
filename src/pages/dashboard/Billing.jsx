import { Check, Download, Clock } from 'lucide-react';

function Billing() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-black mb-2">Billing & Subscription</h1>
                <p className="text-gray-400">Manage your plan and payment methods.</p>
            </div>

            {/* Current Plan */}
            <section className="bg-gradient-to-br from-brand-zinc to-black border border-white/5 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">ACTIVE</div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-brand-red mb-1">CURRENT PLAN</h2>
                        <h3 className="text-3xl font-black mb-4">Pro Hustler <span className="text-lg font-medium text-gray-500">($8/mo)</span></h3>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center gap-2 text-sm text-gray-300"><Check size={16} className="text-brand-green" /> Unlimited AI Generations</li>
                            <li className="flex items-center gap-2 text-sm text-gray-300"><Check size={16} className="text-brand-green" /> Auto-Posting to 3 Platforms</li>
                            <li className="flex items-center gap-2 text-sm text-gray-300"><Check size={16} className="text-brand-green" /> Priority Support</li>
                        </ul>
                        <div className="flex gap-4">
                            <button className="bg-white text-black font-bold px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-colors">
                                Manage Subscription
                            </button>
                            <button className="text-gray-400 font-bold hover:text-white px-4 py-2.5">
                                Cancel Plan
                            </button>
                        </div>
                    </div>

                    {/* Usage Stats (Mini) */}
                    <div className="bg-black/40 p-6 rounded-xl border border-white/5 w-full md:w-64">
                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Monthly Usage</h4>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs font-bold mb-1">
                                    <span>AI Credits</span>
                                    <span className="text-brand-green">120/500</span>
                                </div>
                                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-green w-[24%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold mb-1">
                                    <span>Storage</span>
                                    <span className="text-blue-500">2.4GB/10GB</span>
                                </div>
                                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[24%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payment Methods */}
            <section className="bg-brand-zinc border border-white/5 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Payment Methods</h2>
                    <button className="text-brand-red text-sm font-bold">+ Add Method</button>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                                {/* Mock Visa Logo */}
                                <span className="text-blue-800 font-black italic text-xs">VISA</span>
                            </div>
                            <div>
                                <p className="font-bold text-sm">Visa ending in 4242</p>
                                <p className="text-xs text-gray-500">Expires 12/28</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded text-gray-300">Default</span>
                    </div>
                </div>
            </section>

            {/* Invoice History */}
            <section className="bg-brand-zinc border border-white/5 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-6">Invoice History</h2>
                <div className="space-y-1">
                    {[
                        { date: 'Oct 01, 2024', amount: '$8.00', status: 'Paid', id: 'INV-0012' },
                        { date: 'Sep 01, 2024', amount: '$8.00', status: 'Paid', id: 'INV-0009' },
                        { date: 'Aug 01, 2024', amount: '$8.00', status: 'Paid', id: 'INV-0005' },
                    ].map((inv, i) => (
                        <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover:text-white">
                                    <Clock size={16} />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Pro Hustler Plan</p>
                                    <p className="text-xs text-gray-500">{inv.date} • {inv.id}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="font-bold text-sm">{inv.amount}</span>
                                <span className="text-xs font-bold bg-green-500/20 text-green-500 px-2 py-1 rounded">{inv.status}</span>
                                <button className="text-gray-500 hover:text-white">
                                    <Download size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Billing;
