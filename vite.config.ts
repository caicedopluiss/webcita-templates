import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isLib = command === "build";

  return {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    publicDir: isLib ? false : "public",
    plugins: [
      react(),
      tailwindcss(),
      ...(isLib
        ? [
            dts({
              include: ["src/lib.ts", "src/templates"],
              tsconfigPath: "./tsconfig.lib.json",
              entryRoot: "src",
            }),
          ]
        : []),
    ],

    build: isLib
      ? {
          lib: {
            entry: {
              index: "src/lib.ts",
              "sample-template": "src/templates/sample-template/index.ts",
            },
            formats: ["es"],
            cssFileName: "style",
          },
          rollupOptions: {
            external: [
              "react",
              "react/jsx-runtime",
              "react-dom",
              "lucide-react",
            ],
          },
          cssCodeSplit: false,
        }
      : undefined,
  };
});
