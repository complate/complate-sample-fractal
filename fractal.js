"use strict";

let fractal = module.exports = require("@frctl/fractal").create();
let path = require("path");

let complateAdapter = require("complate-fractal")({
	bundlePath: path.join(__dirname, "dist", "views.js")
});

fractal.set("project.title", "Pattern Library");
fractal.components.set("path", filepath("components"));
fractal.components.engine(complateAdapter);
fractal.components.set("ext", ".jsx");
fractal.docs.set("path", filepath("docs"));
fractal.web.set("static.path", filepath("assets"));
fractal.web.set("builder.dest", filepath("dist", "site"));

function filepath(...args) {
	return path.join(__dirname, ...args);
}
