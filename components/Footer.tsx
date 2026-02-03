export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h4 className="font-space font-bold tracking-widest text-lg">MITESH INDUSTRIES</h4>
                    <p className="text-white/50 text-sm font-rajdhani mt-2">© 2026 Mitesh Industries. All rights reserved.</p>
                </div>
                <div className="flex gap-8">
                    {['PRIVACY', 'TERMS', 'CONTACT'].map((item) => (
                        <a key={item} href="#" className="text-xs font-bold font-space tracking-widest text-white/50 hover:text-white transition">{item}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
