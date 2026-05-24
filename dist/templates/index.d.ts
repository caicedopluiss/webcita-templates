import { TemplateEntry } from './types';
export type { TemplateEntry } from './types';
/** Returns all registered templates. */
export declare function getAllTemplates(): readonly TemplateEntry[];
/** Looks up a single template by its id. Returns undefined if not found. */
export declare function getTemplate(id: string): TemplateEntry | undefined;
