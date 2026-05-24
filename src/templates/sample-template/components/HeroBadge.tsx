interface Props {
  text: string;
}

export default function HeroBadge({ text }: Props) {
  return (
    <div className="inline-flex items-center bg-white/15 border border-white/25 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
      <span className="text-white font-semibold text-xs">{text}</span>
    </div>
  );
}
