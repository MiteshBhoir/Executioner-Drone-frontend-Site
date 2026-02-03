'use client';
import { droneData } from '@/data/droneData';
import { motion } from 'framer-motion';

export default function PricingTiers() {
    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold font-space text-white mb-6">ACQUISITION</h2>
                    <div className="h-1 w-24 bg-blue-600 mx-auto" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {droneData.pricing.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative bg-zinc-900/40 backdrop-blur-sm border border-white/10 p-10 rounded-2xl group hover:border-blue-500/50 transition-colors duration-500`}
                        >
                            {index === 1 && (
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold font-space px-3 py-1 rounded-bl-xl tracking-widest">
                                    RECOMMENDED
                                </div>
                            )}
                            <h3 className="text-xl font-bold font-space text-white mb-2">{tier.name}</h3>
                            <p className="text-4xl font-rajdhani font-medium text-gray-200 mb-8">{tier.price}</p>

                            <ul className="space-y-4 mb-10">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-rajdhani text-gray-400">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 rounded font-bold font-space text-xs tracking-widest uppercase">
                                Configure
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
