import type {
  SampleTemplateContent,
  SampleTemplateTheme,
} from "@/templates/sample-template/types";
import {
  defaultContent,
  defaultTheme,
} from "@/templates/sample-template/defaults";
import HeroBackground from "@/templates/sample-template/components/HeroBackground";
import HeroBadge from "@/templates/sample-template/components/HeroBadge";
import HeroHeadline from "@/templates/sample-template/components/HeroHeadline";
import HeroTagline from "@/templates/sample-template/components/HeroTagline";
import HeroActions from "@/templates/sample-template/components/HeroActions";

interface Props {
  content?: SampleTemplateContent;
  theme?: SampleTemplateTheme;
}

export default function Landing({ content, theme }: Props) {
  const resolvedContent: SampleTemplateContent = {
    ...defaultContent,
    ...content,
  };
  const resolvedTheme: SampleTemplateTheme = { ...defaultTheme, ...theme };

  const { hero, background } = resolvedContent;
  const alignment = hero.alignment ?? "center";
  const alignClassByValue: Record<typeof alignment, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };
  const textAlignClass = alignClassByValue[alignment];

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: background.value,
        fontFamily: `"${resolvedTheme.fontFamily}", sans-serif`,
      }}
    >
      <HeroBackground />

      <div className={`relative z-10 max-w-3xl mx-auto px-6 ${textAlignClass}`}>
        {hero.badge && <HeroBadge text={hero.badge} />}

        <HeroHeadline text={hero.headline} />

        <HeroTagline text={hero.tagline} alignment={alignment} />

        <HeroActions
          accentColor={resolvedTheme.accentColor}
          alignment={alignment}
          cta={{ label: hero.ctaLabel, url: hero.ctaUrl }}
        />
      </div>
    </div>
  );
}
