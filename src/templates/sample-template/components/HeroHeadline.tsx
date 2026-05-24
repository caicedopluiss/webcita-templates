interface Props {
  text: string;
}

export default function HeroHeadline({ text }: Props) {
  return (
    <h1 className="relative text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-5">
      {text}
    </h1>
  );
}
