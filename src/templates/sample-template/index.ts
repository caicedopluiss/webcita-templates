// ─── Sample Template — template entry point ─────────────────────────────────────

import type { TemplateEntry } from "@/templates/types";
import Landing from "@/templates/sample-template/pages/Landing";
import { manifest } from "@/templates/sample-template/manifest";
import { defaultContent } from "@/templates/sample-template/defaults";

export type {
  SampleTemplateContent,
  SampleTemplateTheme,
} from "@/templates/sample-template/types";

export const sampleTemplate: TemplateEntry = Object.freeze({
  manifest,
  mainView: Landing,
  defaultValues: Object.freeze({
    "hero.badge": defaultContent.hero.badge ?? "",
    "hero.headline": defaultContent.hero.headline,
    "hero.tagline": defaultContent.hero.tagline,
    "hero.ctaLabel": defaultContent.hero.ctaLabel,
    "hero.ctaUrl": defaultContent.hero.ctaUrl,
    "hero.alignment": defaultContent.hero.alignment ?? "center",
    "background.type": defaultContent.background.type,
    "background.value": defaultContent.background.value,
  }),
});

export default Landing;
