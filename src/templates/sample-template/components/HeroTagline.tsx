interface Props {
  text: string;
}

export default function HeroTagline({ text }: Props) {
  return (
    <p className="relative text-white/80 max-w-xl mx-auto leading-relaxed mb-8 text-base">
      {text}
    </p>
  );
}
