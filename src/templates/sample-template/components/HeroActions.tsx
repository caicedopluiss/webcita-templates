interface Action {
  label: string;
  url: string;
}

interface Props {
  cta: Action;
  accentColor: string;
}

export default function HeroActions({ cta, accentColor }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <a
        href={cta.url}
        className="relative inline-block bg-white font-extrabold text-sm px-8 py-3 rounded-xl no-underline shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
        style={{ color: accentColor }}
      >
        {cta.label}
      </a>
    </div>
  );
}
