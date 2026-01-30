interface SectionTitleProps {
  subtitle: string;
  title: string;
  dark?: boolean;
}

export function SectionTitle({ subtitle, title, dark = false }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2
        className={`text-base font-bold tracking-widest uppercase mb-3
                    ${dark ? "text-blue-400" : "text-blue-600"}`}
      >
        {subtitle}
      </h2>
      <h3
        className={`text-4xl lg:text-5xl font-black tracking-tighter
                    ${dark ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h3>
    </div>
  );
}
