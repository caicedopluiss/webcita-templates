import { default as React } from 'react';
export interface TemplateManifest {
    id: string;
    name: string;
    description: string;
    version: string;
    templateType: string;
    category: string;
    tags: readonly string[];
    icon: string;
    /** Path or URL to a preview thumbnail image (e.g. "/thumbnails/hello-business.png"). */
    thumbnail?: string;
    accentColor: string;
    accentGradient: string;
    /** Payload CMS–inspired field schema describing every editable property. */
    schema?: readonly TemplateField[];
}
export interface FieldAdmin {
    /** Short helper text rendered below the field. */
    description?: string;
    /** Input placeholder text. */
    placeholder?: string;
    /** Number of rows — textarea only. */
    rows?: number;
}
interface BaseField {
    /** Key path within the content object (dot-notation for nested, e.g. "hero.headline"). */
    name: string;
    /** Human-readable label shown in the editor. */
    label: string;
    required?: boolean;
    admin?: FieldAdmin;
}
export interface TextField extends BaseField {
    type: "text";
    defaultValue?: string;
}
export interface TextareaField extends BaseField {
    type: "textarea";
    defaultValue?: string;
}
export interface URLField extends BaseField {
    type: "url";
    defaultValue?: string;
}
export interface ColorField extends BaseField {
    type: "color";
    defaultValue?: string;
}
export interface SelectOption {
    label: string;
    value: string;
}
export interface SelectField extends BaseField {
    type: "select";
    options: readonly SelectOption[];
    defaultValue?: string;
}
export interface CheckboxField extends BaseField {
    type: "checkbox";
    defaultValue?: boolean;
}
/** Flat field — cannot contain nested groups or arrays. Used inside ArrayField. */
export type FlatTemplateField = TextField | TextareaField | URLField | ColorField | SelectField | CheckboxField;
/** Logical group of related fields (rendered as a collapsible section). */
export interface GroupField extends BaseField {
    type: "group";
    fields: readonly TemplateField[];
}
/** Repeatable list of structured items (rendered as add/remove rows). */
export interface ArrayField extends BaseField {
    type: "array";
    fields: readonly FlatTemplateField[];
}
export type TemplateField = FlatTemplateField | GroupField | ArrayField;
export interface TemplateEntry {
    readonly manifest: Readonly<TemplateManifest>;
    readonly mainView: React.ComponentType<any>;
}
export {};
