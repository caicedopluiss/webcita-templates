// ─── Library entry point ───────────────────────────────────────────────────────
// Used only for the dist build (not the dev server / App.tsx playground).
// Importing this module in the dist triggers the bundled Tailwind CSS as a
// side-effect, which Vite extracts into dist/style.css.
import "@/index.css";

export * from "@/templates";
