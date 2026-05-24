// ─── Sample Template — template entry point ─────────────────────────────────────

import type { TemplateEntry } from "@/templates/types";
import Landing from "@/templates/sample-template/pages/Landing";
import { manifest } from "@/templates/sample-template/manifest";

export type {
  SampleTemplateContent,
  SampleTemplateTheme,
} from "@/templates/sample-template/types";

export const sampleTemplate: TemplateEntry = Object.freeze({
  manifest,
  mainView: Landing,
});

export default Landing;
