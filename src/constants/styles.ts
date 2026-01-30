export const buttonStyles = {
  primary: `px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl
            hover:bg-blue-700 hover:-translate-y-1 transition-all
            shadow-2xl shadow-blue-200`,
  secondary: `px-10 py-5 bg-slate-50 text-slate-900 border border-slate-200
              rounded-2xl font-black text-xl hover:bg-white transition-all`,
  nav: `px-6 py-2.5 rounded-full text-sm font-black transition-all`,
  card: `w-full py-3 text-xs font-bold rounded-xl transition-colors`,
} as const;

export const cardStyles = {
  base: `p-8 bg-white rounded-3xl border border-slate-200 transition-all group shadow-sm`,
  hover: {
    blue: "hover:border-blue-500",
    emerald: "hover:border-emerald-500",
    indigo: "hover:border-indigo-500",
  },
} as const;
