interface Action {
    label: string;
    url: string;
}
interface Props {
    cta: Action;
    accentColor: string;
    alignment?: "left" | "center" | "right" | "justify";
}
export default function HeroActions({ cta, accentColor, alignment, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
