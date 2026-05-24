import { sampleTemplate } from "@/templates/sample-template";
import type { TemplateEntry } from "@/templates/types";

export type { TemplateEntry } from "@/templates/types";

const templates: readonly TemplateEntry[] = [sampleTemplate];

/** Returns all registered templates. */
export function getAllTemplates(): readonly TemplateEntry[] {
  return [...templates];
}

/** Looks up a single template by its id. Returns undefined if not found. */
export function getTemplate(id: string): TemplateEntry | undefined {
  return templates.find((t) => t.manifest.id === id);
}
