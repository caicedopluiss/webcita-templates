import { t as e } from "./sample-template-Dx7JZv2f.js";
//#region src/templates/index.ts
var t = [e];
function n() {
	return [...t];
}
function r(e) {
	return t.find((t) => t.manifest.id === e);
}
//#endregion
export { n as getAllTemplates, r as getTemplate };
