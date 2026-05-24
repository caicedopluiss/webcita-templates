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

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: background.value,
        fontFamily: `"${resolvedTheme.fontFamily}", sans-serif`,
      }}
    >
      <HeroBackground />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {hero.badge && <HeroBadge text={hero.badge} />}

        <HeroHeadline text={hero.headline} />

        <HeroTagline text={hero.tagline} />

        <HeroActions
          accentColor={resolvedTheme.accentColor}
          cta={{ label: hero.ctaLabel, url: hero.ctaUrl }}
        />
      </div>
    </div>
  );
}
