import type { TemplateManifest, TemplateField } from "@/templates/types";
import thumbnailUrl from "@/templates/sample-template/thumbnail.svg";

export const manifest = Object.freeze({
  id: "sample-template",
  name: "Sample Template",
  description:
    "A clean, full-page hero section with a centered headline, tagline, and call-to-action button.",
  version: "0.1.0",
  templateType: "hero",
  category: "General",
  tags: Object.freeze(["hero", "landing-page", "minimal", "centered"]),
  icon: "layout",
  thumbnail: thumbnailUrl,
  accentColor: "#1e3c72",
  accentGradient:
    "linear-gradient(135deg, #1e3c72 0%, #2a5298 60%, #3b82f6 100%)",
  schema: [
    {
      type: "group",
      name: "hero",
      label: "Hero",
      fields: [
        {
          type: "text",
          name: "badge",
          label: "Badge",
          admin: {
            placeholder: "e.g. ✨ Welcome",
            description: "Optional pill shown above the headline.",
          },
        },
        {
          type: "text",
          name: "headline",
          label: "Headline",
          required: true,
          admin: { placeholder: "e.g. Build something beautiful" },
        },
        {
          type: "textarea",
          name: "tagline",
          label: "Tagline",
          required: true,
          admin: {
            rows: 3,
            placeholder: "Supporting subtitle beneath the headline",
          },
        },
        {
          type: "text",
          name: "ctaLabel",
          label: "Primary CTA label",
          required: true,
          admin: { placeholder: "e.g. Get Started" },
        },
        {
          type: "url",
          name: "ctaUrl",
          label: "Primary CTA URL",
          required: true,
          admin: { placeholder: "https://" },
        },
      ],
    },
    {
      type: "group",
      name: "background",
      label: "Background",
      fields: [
        {
          type: "select",
          name: "type",
          label: "Type",
          required: true,
          defaultValue: "gradient",
          options: [
            { label: "Solid color", value: "color" },
            { label: "Gradient", value: "gradient" },
          ],
        },
        {
          type: "text",
          name: "value",
          label: "Value",
          required: true,
          admin: {
            placeholder: "#3b82f6 or linear-gradient(...)",
            description: "Any valid CSS background value.",
          },
        },
      ],
    },
  ] satisfies readonly TemplateField[],
}) satisfies Readonly<TemplateManifest>;
