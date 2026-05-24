interface Action {
    label: string;
    url: string;
}
interface Props {
    cta: Action;
    accentColor: string;
}
export default function HeroActions({ cta, accentColor }: Props): import("react/jsx-runtime").JSX.Element;
export {};
