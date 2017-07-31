import { registerMacro, createElement } from "complate-stream";

export default createElement;

registerMacro("preview-layout", (params, ...children) => {
	return <html>
		<head>
			<meta charset="utf-8" />
			<title>Preview Layout</title>
			{renderStyleSheets(params.stylesheets)}
		</head>

		<body>
			{children}

			{renderScripts(params.scripts)}
		</body>
	</html>;
});

function renderStyleSheets(items) {
	if(!items || !items.length) {
		return;
	}

	return items.map(uri => {
		return <link rel="stylesheet" href={uri} />;
	});
}

function renderScripts(items) {
	if(!items || !items.length) {
		return;
	}

	return items.map(uri => {
		return <script src={uri} />;
	});
}
