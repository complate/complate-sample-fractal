import { createElement } from "complate-stream";

export default function List(params, ...children) {
	let tag = (params && params.ordered) ? "ol" : "ul";
	return createElement(tag, null, children.map(child => {
		return <li>{child}</li>;
	}));
}
