"use strict";

module.exports = {
	watchDirs: ["./lib", "./components"],
	sass: [{
		source: "./lib/styles/index.scss",
		target: "./assets/bundle.css"
	}],
	js: [{
		source: "./lib/scripts/index.js",
		target: "./assets/bundle.js"
	}]
};
