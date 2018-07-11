import { createElement } from "complate-stream";

export default function List({ ordered }, ...children) {
	return createElement(ordered ? "ol" : "ul", null, children.map(item => (
		<li>{item}</li>
	)));
}
