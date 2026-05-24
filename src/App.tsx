import SampleTemplate from "@/templates/sample-template";

/*
import { useState } from "react";
import { getAllTemplates } from "@/templates";
import type { TemplateEntry } from "@/templates/types";
import { defaultContent as hbDefault } from "@/templates/hello-business/defaults";
import { defaultContent as stDefault } from "@/templates/sample-template/defaults";

const templates = getAllTemplates();
const initialContents: Record<string, unknown> = {
  "hello-business": hbDefault,
  "sample-template": stDefault,
};

export default function App() {
  const [activeId, setActiveId] = useState<string>(templates[0].meta.id);
  const active = templates.find((t) => t.meta.id === activeId) as TemplateEntry;
  const [contents, setContents] =
    useState<Record<string, unknown>>(initialContents);

  const content = contents[activeId];
  const { Preview, Sidebar } = active;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-100">
      <nav className="flex items-center gap-1 bg-white border-b border-slate-200 px-4 py-2 shrink-0">
        {templates.map((t) => (
          <button
            key={t.meta.id}
            onClick={() => setActiveId(t.meta.id)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              t.meta.id === activeId
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {t.meta.name}
          </button>
        ))}
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <Preview content={content} />
        </div>

        {Sidebar && (
          <aside className="w-80 shrink-0 overflow-y-auto border-l border-slate-200 bg-white shadow-lg">
            <div className="sticky top-0 z-10 border-b border-slate-100 bg-white px-4 py-3">
              <h1 className="text-sm font-bold text-slate-800">{active.meta.name}</h1>
              <p className="text-xs text-slate-400">{active.meta.description}</p>
            </div>
            <Sidebar
              content={content}
              onChange={(updated: unknown) =>
                setContents((prev) => ({ ...prev, [activeId]: updated }))
              }
            />
          </aside>
        )}
      </div>
    </div>
  );
}
*/

export default function App() {
  return <SampleTemplate />;
}
