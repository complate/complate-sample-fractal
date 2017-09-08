import { createElement } from "complate-stream";

export default function Panel({ title }, ...children) {
	return <content-panel aria-expanded={true}>
		<h3>{title}</h3>
		{children}
	</content-panel>;
}
