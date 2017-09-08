"use strict";

let sass = {
	manifest: false,
	bundles: [{
		entryPoint: "./lib/styles/index.scss",
		target: "./assets/bundle.css"
	}]
};

let js = {
	manifest: false,
	bundles: [{
		entryPoint: "./lib/scripts/index.js",
		target: "./assets/bundle.js"
	}]
};

module.exports = {
	watchDirs: ["./lib", "./components"],
	sass,
	js
};
