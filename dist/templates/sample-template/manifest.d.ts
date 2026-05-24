export declare const manifest: Readonly<{
    id: "sample-template";
    name: "Sample Template";
    description: "A clean, full-page hero section with a centered headline, tagline, and call-to-action button.";
    version: "0.1.0";
    templateType: "hero";
    category: "General";
    tags: readonly string[];
    icon: "layout";
    thumbnail: string;
    accentColor: "#1e3c72";
    accentGradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 60%, #3b82f6 100%)";
    schema: ({
        type: "group";
        name: string;
        label: string;
        fields: ({
            type: "text";
            name: string;
            label: string;
            admin: {
                placeholder: string;
                description: string;
                rows?: undefined;
            };
            required?: undefined;
        } | {
            type: "text";
            name: string;
            label: string;
            required: true;
            admin: {
                placeholder: string;
                description?: undefined;
                rows?: undefined;
            };
        } | {
            type: "textarea";
            name: string;
            label: string;
            required: true;
            admin: {
                rows: number;
                placeholder: string;
                description?: undefined;
            };
        } | {
            type: "url";
            name: string;
            label: string;
            required: true;
            admin: {
                placeholder: string;
                description?: undefined;
                rows?: undefined;
            };
        })[];
    } | {
        type: "group";
        name: string;
        label: string;
        fields: ({
            type: "select";
            name: string;
            label: string;
            required: true;
            defaultValue: string;
            options: {
                label: string;
                value: string;
            }[];
            admin?: undefined;
        } | {
            type: "text";
            name: string;
            label: string;
            required: true;
            admin: {
                placeholder: string;
                description: string;
            };
            defaultValue?: undefined;
            options?: undefined;
        })[];
    })[];
}>;
