"use strict";

let fractal = module.exports = require("@frctl/fractal").create();
let complate = require("complate-fractal");
let path = require("path");

let componentsDir = filepath("components");

fractal.set("project.title", "Pattern Library");
fractal.components.engine(complate({
	rootDir: __dirname,
	generateURI
}));
fractal.components.set("path", componentsDir);
fractal.components.set("ext", ".html");
fractal.docs.set("path", filepath("docs"));
fractal.web.set("static.path", filepath("assets"));
fractal.web.set("builder.dest", filepath("dist"));

// NB: invocation context is `{ assetPath }`, providing access to
//     Fractal-specific URI generation
function generateURI(type, ...args) {
	switch(type) {
	case "common-assets":
		return this.assetPath(args[0]);
	default:
		throw new Error(`invalid URI: ${type}`);
	}
}

function filepath(...args) {
	return path.resolve(__dirname, ...args);
}
