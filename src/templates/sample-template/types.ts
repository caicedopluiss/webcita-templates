export interface SampleTemplateContent {
  hero: {
    badge?: string;
    headline: string;
    tagline: string;
    ctaLabel: string;
    ctaUrl: string;
    alignment?: "left" | "center" | "right" | "justify";
  };
  background: {
    type: "color" | "gradient";
    value: string;
  };
}

export interface SampleTemplateTheme {
  accentColor: string;
  textColor: string;
  fontFamily: string;
}
