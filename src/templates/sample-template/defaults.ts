import type {
  SampleTemplateContent,
  SampleTemplateTheme,
} from "@/templates/sample-template/types";

export const defaultContent: SampleTemplateContent = {
  hero: {
    badge: "✨ Welcome",
    headline: "Build something beautiful",
    tagline:
      "A minimal, distraction-free starting point. Add your own words, style, and purpose.",
    ctaLabel: "Get Started",
    ctaUrl: "#",
  },
  background: {
    type: "gradient",
    value: "linear-gradient(135deg, #1e3c72 0%, #2a5298 60%, #3b82f6 100%)",
  },
};

export const defaultTheme: SampleTemplateTheme = {
  accentColor: "#1e3c72",
  textColor: "#ffffff",
  fontFamily: "Inter",
};
