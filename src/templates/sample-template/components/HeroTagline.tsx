interface Props {
  text: string;
  alignment?: "left" | "center" | "right" | "justify";
}

export default function HeroTagline({ text, alignment = "center" }: Props) {
  const alignClassByValue: Record<typeof alignment, string> = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
    justify: "mx-auto",
  };
  return (
    <p
      className={`relative text-white/80 max-w-xl leading-relaxed mb-8 text-base ${alignClassByValue[alignment]}`}
    >
      {text}
    </p>
  );
}
