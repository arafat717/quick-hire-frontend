"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* ── DESKTOP layout ── */}
        <div className="hidden sm:grid grid-cols-4 gap-10">

          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-indigo-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" /></svg>
              </div>
              <span className="text-[#FFFFFF] font-extrabold text-[24px]">QuickHire</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Great platform for the job seeker that passionates about startups. Find your dream job easier.
            </p>
          </div>

          {/* Col 2: About */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">About</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              {["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              {["Help Docs", "Guide", "Updates", "Contact Us"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm mb-2">Get job notifications</h4>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ── MOBILE layout ── */}
        <div className="flex flex-col gap-8 sm:hidden">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-indigo-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" /></svg>
              </div>
              <span className="text-white font-extrabold text-lg">QuickHire</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Great platform for the job seeker that passionates about startups. Find your dream job easier.
            </p>
          </div>

          {/* About + Resources side by side */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold text-sm mb-4">About</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                {["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Resources</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                {["Help Docs", "Guide", "Updates", "Contact Us"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm mb-2">Get job notifications</h4>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 mb-3"
            />
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* ── Bottom bar (shared) ── */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 order-2 sm:order-1">
            2021 © QuickHire. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 order-1 sm:order-2">
            {[
              { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { label: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z" },
              { label: "Dribbble", path: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm6.93-10.845c-.17-.05-1.57-.475-3.165-.218a18.3 18.3 0 011.26 3.408c1.689-1.143 2.565-2.828 1.905-3.19zM12 4.1a7.9 7.9 0 00-6.256 12.704 17.06 17.06 0 013.748-3.83c-.174-.4-.356-.8-.543-1.185-1.98.593-4.024.513-4.204.505l-.002-.094A7.861 7.861 0 0112 4.1z" },
              { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
              { label: "Twitter", path: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-400 hover:fill-white">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}