import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/templates/sample-template/defaults.ts
var r = {
	hero: {
		badge: "✨ Welcome",
		headline: "Build something beautiful",
		tagline: "A minimal, distraction-free starting point. Add your own words, style, and purpose.",
		ctaLabel: "Get Started",
		ctaUrl: "#",
		alignment: "center"
	},
	background: {
		type: "gradient",
		value: "linear-gradient(135deg, #1e3c72 0%, #2a5298 60%, #3b82f6 100%)"
	}
}, i = {
	accentColor: "#1e3c72",
	textColor: "#ffffff",
	fontFamily: "Inter"
};
//#endregion
//#region src/templates/sample-template/components/HeroBackground.tsx
function a() {
	return /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("div", { className: "absolute -top-15 -right-15 w-70 h-70 rounded-full bg-white/5 pointer-events-none" }), /* @__PURE__ */ t("div", { className: "absolute -bottom-10 -left-10 w-50 h-50 rounded-full bg-white/4 pointer-events-none" })] });
}
//#endregion
//#region src/templates/sample-template/components/HeroBadge.tsx
function o({ text: e }) {
	return /* @__PURE__ */ t("div", {
		className: "inline-flex items-center bg-white/15 border border-white/25 rounded-full px-4 py-1 mb-6 backdrop-blur-sm",
		children: /* @__PURE__ */ t("span", {
			className: "text-white font-semibold text-xs",
			children: e
		})
	});
}
//#endregion
//#region src/templates/sample-template/components/HeroHeadline.tsx
function s({ text: e }) {
	return /* @__PURE__ */ t("h1", {
		className: "relative text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-5",
		children: e
	});
}
//#endregion
//#region src/templates/sample-template/components/HeroTagline.tsx
function c({ text: e, alignment: n = "center" }) {
	return /* @__PURE__ */ t("p", {
		className: `relative text-white/80 max-w-xl leading-relaxed mb-8 text-base ${{
			left: "mr-auto",
			center: "mx-auto",
			right: "ml-auto",
			justify: "mx-auto"
		}[n]}`,
		children: e
	});
}
//#endregion
//#region src/templates/sample-template/components/HeroActions.tsx
function l({ cta: e, accentColor: n, alignment: r = "center" }) {
	return /* @__PURE__ */ t("div", {
		className: `flex flex-wrap items-center gap-4 ${{
			left: "justify-start",
			center: "justify-center",
			right: "justify-end",
			justify: "justify-center"
		}[r]}`,
		children: /* @__PURE__ */ t("a", {
			href: e.url,
			className: "relative inline-block bg-white font-extrabold text-sm px-8 py-3 rounded-xl no-underline shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200",
			style: { color: n },
			children: e.label
		})
	});
}
//#endregion
//#region src/templates/sample-template/pages/Landing.tsx
function u({ content: e, theme: u }) {
	let d = {
		...r,
		...e
	}, f = {
		...i,
		...u
	}, { hero: p, background: m } = d, h = p.alignment ?? "center", g = {
		left: "text-left",
		center: "text-center",
		right: "text-right",
		justify: "text-justify"
	}[h];
	return /* @__PURE__ */ n("div", {
		className: "min-h-screen w-full flex items-center justify-center relative overflow-hidden",
		style: {
			background: m.value,
			fontFamily: `"${f.fontFamily}", sans-serif`
		},
		children: [/* @__PURE__ */ t(a, {}), /* @__PURE__ */ n("div", {
			className: `relative z-10 max-w-3xl mx-auto px-6 ${g}`,
			children: [
				p.badge && /* @__PURE__ */ t(o, { text: p.badge }),
				/* @__PURE__ */ t(s, { text: p.headline }),
				/* @__PURE__ */ t(c, {
					text: p.tagline,
					alignment: h
				}),
				/* @__PURE__ */ t(l, {
					accentColor: f.accentColor,
					alignment: h,
					cta: {
						label: p.ctaLabel,
						url: p.ctaUrl
					}
				})
			]
		})]
	});
}
//#endregion
//#region src/templates/sample-template/manifest.ts
var d = Object.freeze({
	id: "sample-template",
	name: "Sample Template",
	description: "A clean, full-page hero section with a centered headline, tagline, and call-to-action button.",
	version: "0.1.0",
	templateType: "hero",
	category: "General",
	tags: Object.freeze([
		"hero",
		"landing-page",
		"minimal",
		"centered"
	]),
	icon: "layout",
	thumbnail: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20280'%20width='400'%20height='280'%3e%3c!--%20Background%20--%3e%3crect%20width='400'%20height='280'%20fill='%23f1f5f9'/%3e%3c!--%20Hero%20section%20--%3e%3cdefs%3e%3clinearGradient%20id='heroGrad'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20style='stop-color:%231e3c72'/%3e%3cstop%20offset='60%25'%20style='stop-color:%232a5298'/%3e%3cstop%20offset='100%25'%20style='stop-color:%233b82f6'/%3e%3c/linearGradient%3e%3clinearGradient%20id='ctaGrad'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20style='stop-color:%231e3c72'/%3e%3cstop%20offset='100%25'%20style='stop-color:%233b82f6'/%3e%3c/linearGradient%3e%3c/defs%3e%3c!--%20Hero%20bg%20--%3e%3crect%20width='400'%20height='110'%20fill='url(%23heroGrad)'/%3e%3c!--%20Decorative%20circles%20--%3e%3ccircle%20cx='360'%20cy='20'%20r='55'%20fill='rgba(255,255,255,0.05)'/%3e%3ccircle%20cx='330'%20cy='70'%20r='30'%20fill='rgba(255,255,255,0.04)'/%3e%3c!--%20Badge%20pill%20--%3e%3crect%20x='155'%20y='18'%20width='90'%20height='14'%20rx='7'%20fill='rgba(255,255,255,0.18)'/%3e%3crect%20x='163'%20y='23'%20width='74'%20height='4'%20rx='2'%20fill='rgba(255,255,255,0.6)'/%3e%3c!--%20Headline%20--%3e%3crect%20x='80'%20y='40'%20width='240'%20height='10'%20rx='3'%20fill='rgba(255,255,255,0.9)'/%3e%3crect%20x='110'%20y='56'%20width='180'%20height='7'%20rx='2'%20fill='rgba(255,255,255,0.7)'/%3e%3c!--%20Tagline%20--%3e%3crect%20x='70'%20y='72'%20width='260'%20height='5'%20rx='2'%20fill='rgba(255,255,255,0.45)'/%3e%3crect%20x='90'%20y='81'%20width='220'%20height='5'%20rx='2'%20fill='rgba(255,255,255,0.35)'/%3e%3c!--%20CTA%20Button%20--%3e%3crect%20x='140'%20y='93'%20width='120'%20height='18'%20rx='9'%20fill='rgba(255,255,255,0.92)'/%3e%3crect%20x='163'%20y='99'%20width='74'%20height='6'%20rx='3'%20fill='%232563EB'/%3e%3c!--%20Stats%20bar%20--%3e%3crect%20x='0'%20y='110'%20width='400'%20height='38'%20fill='white'/%3e%3c!--%204%20stat%20blocks%20--%3e%3c!--%20Stat%201%20--%3e%3crect%20x='30'%20y='119'%20width='30'%20height='8'%20rx='2'%20fill='%231e3c72'/%3e%3crect%20x='25'%20y='130'%20width='40'%20height='5'%20rx='1.5'%20fill='%2394a3b8'/%3e%3c!--%20Stat%202%20--%3e%3crect%20x='128'%20y='119'%20width='30'%20height='8'%20rx='2'%20fill='%232563EB'/%3e%3crect%20x='123'%20y='130'%20width='40'%20height='5'%20rx='1.5'%20fill='%2394a3b8'/%3e%3c!--%20Stat%203%20--%3e%3crect%20x='226'%20y='119'%20width='30'%20height='8'%20rx='2'%20fill='%231e3c72'/%3e%3crect%20x='221'%20y='130'%20width='40'%20height='5'%20rx='1.5'%20fill='%2394a3b8'/%3e%3c!--%20Stat%204%20--%3e%3crect%20x='324'%20y='119'%20width='30'%20height='8'%20rx='2'%20fill='%232563EB'/%3e%3crect%20x='319'%20y='130'%20width='40'%20height='5'%20rx='1.5'%20fill='%2394a3b8'/%3e%3c!--%20Dividers%20between%20stats%20--%3e%3cline%20x1='100'%20y1='118'%20x2='100'%20y2='146'%20stroke='%23e2e8f0'%20stroke-width='1'/%3e%3cline%20x1='200'%20y1='118'%20x2='200'%20y2='146'%20stroke='%23e2e8f0'%20stroke-width='1'/%3e%3cline%20x1='300'%20y1='118'%20x2='300'%20y2='146'%20stroke='%23e2e8f0'%20stroke-width='1'/%3e%3c!--%20Features%20section%20--%3e%3crect%20x='0'%20y='148'%20width='400'%20height='88'%20fill='%23f8fafc'/%3e%3c!--%20Section%20title%20--%3e%3crect%20x='130'%20y='156'%20width='140'%20height='8'%20rx='2'%20fill='%230f172a'/%3e%3crect%20x='150'%20y='168'%20width='100'%20height='5'%20rx='1.5'%20fill='%2394a3b8'/%3e%3c!--%203%20feature%20cards%20--%3e%3c!--%20Card%201%20--%3e%3crect%20x='18'%20y='180'%20width='110'%20height='48'%20rx='6'%20fill='white'%20stroke='%23e2e8f0'%20stroke-width='1'/%3e%3crect%20x='28'%20y='190'%20width='14'%20height='14'%20rx='4'%20fill='%23dbeafe'/%3e%3crect%20x='28'%20y='207'%20width='80'%20height='5'%20rx='1.5'%20fill='%231e293b'/%3e%3crect%20x='28'%20y='215'%20width='70'%20height='4'%20rx='1.5'%20fill='%2394a3b8'/%3e%3crect%20x='28'%20y='221'%20width='60'%20height='4'%20rx='1.5'%20fill='%2394a3b8'/%3e%3c!--%20Card%202%20--%3e%3crect%20x='145'%20y='180'%20width='110'%20height='48'%20rx='6'%20fill='white'%20stroke='%23e2e8f0'%20stroke-width='1'/%3e%3crect%20x='155'%20y='190'%20width='14'%20height='14'%20rx='4'%20fill='%23dbeafe'/%3e%3crect%20x='155'%20y='207'%20width='80'%20height='5'%20rx='1.5'%20fill='%231e293b'/%3e%3crect%20x='155'%20y='215'%20width='70'%20height='4'%20rx='1.5'%20fill='%2394a3b8'/%3e%3crect%20x='155'%20y='221'%20width='60'%20height='4'%20rx='1.5'%20fill='%2394a3b8'/%3e%3c!--%20Card%203%20--%3e%3crect%20x='272'%20y='180'%20width='110'%20height='48'%20rx='6'%20fill='white'%20stroke='%23e2e8f0'%20stroke-width='1'/%3e%3crect%20x='282'%20y='190'%20width='14'%20height='14'%20rx='4'%20fill='%23dbeafe'/%3e%3crect%20x='282'%20y='207'%20width='80'%20height='5'%20rx='1.5'%20fill='%231e293b'/%3e%3crect%20x='282'%20y='215'%20width='70'%20height='4'%20rx='1.5'%20fill='%2394a3b8'/%3e%3crect%20x='282'%20y='221'%20width='60'%20height='4'%20rx='1.5'%20fill='%2394a3b8'/%3e%3c!--%20CTA%20banner%20--%3e%3crect%20x='0'%20y='236'%20width='400'%20height='44'%20fill='url(%23ctaGrad)'/%3e%3crect%20x='100'%20y='244'%20width='200'%20height='8'%20rx='2'%20fill='rgba(255,255,255,0.9)'/%3e%3crect%20x='130'%20y='256'%20width='140'%20height='5'%20rx='1.5'%20fill='rgba(255,255,255,0.55)'/%3e%3crect%20x='155'%20y='265'%20width='90'%20height='12'%20rx='6'%20fill='rgba(255,255,255,0.9)'/%3e%3crect%20x='170'%20y='269'%20width='60'%20height='4'%20rx='2'%20fill='%231e3c72'/%3e%3c/svg%3e",
	accentColor: "#1e3c72",
	accentGradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 60%, #3b82f6 100%)",
	schema: [{
		type: "group",
		name: "hero",
		label: "Hero",
		admin: { alignable: !0 },
		fields: [
			{
				type: "text",
				name: "badge",
				label: "Badge",
				admin: {
					placeholder: "e.g. ✨ Welcome",
					description: "Optional pill shown above the headline."
				}
			},
			{
				type: "text",
				name: "headline",
				label: "Headline",
				required: !0,
				admin: { placeholder: "e.g. Build something beautiful" }
			},
			{
				type: "textarea",
				name: "tagline",
				label: "Tagline",
				required: !0,
				admin: {
					rows: 3,
					placeholder: "Supporting subtitle beneath the headline"
				}
			},
			{
				type: "text",
				name: "ctaLabel",
				label: "Primary CTA label",
				required: !0,
				admin: { placeholder: "e.g. Get Started" }
			},
			{
				type: "url",
				name: "ctaUrl",
				label: "Primary CTA URL",
				required: !0,
				admin: { placeholder: "https://" }
			}
		]
	}, {
		type: "group",
		name: "background",
		label: "Background",
		fields: [{
			type: "select",
			name: "type",
			label: "Type",
			required: !0,
			defaultValue: "gradient",
			options: [{
				label: "Solid color",
				value: "color"
			}, {
				label: "Gradient",
				value: "gradient"
			}]
		}, {
			type: "text",
			name: "value",
			label: "CSS value",
			required: !0,
			admin: {
				placeholder: "#3b82f6 or linear-gradient(...)",
				description: "Style input: any valid CSS background value."
			}
		}]
	}]
}), f = Object.freeze({
	manifest: d,
	mainView: u,
	defaultValues: Object.freeze({
		"hero.badge": r.hero.badge ?? "",
		"hero.headline": r.hero.headline,
		"hero.tagline": r.hero.tagline,
		"hero.ctaLabel": r.hero.ctaLabel,
		"hero.ctaUrl": r.hero.ctaUrl,
		"hero.alignment": r.hero.alignment ?? "center",
		"background.type": r.background.type,
		"background.value": r.background.value
	})
}), p = u;
//#endregion
export { p as n, f as t };
