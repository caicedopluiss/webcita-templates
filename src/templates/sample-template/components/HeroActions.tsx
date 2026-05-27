interface Action {
  label: string;
  url: string;
}

interface Props {
  cta: Action;
  accentColor: string;
  alignment?: "left" | "center" | "right" | "justify";
}

export default function HeroActions({
  cta,
  accentColor,
  alignment = "center",
}: Props) {
  const justifyClassByValue: Record<typeof alignment, string> = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
    justify: "justify-center",
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-4 ${justifyClassByValue[alignment]}`}
    >
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
