/* eslint-env browser */
export default class ContentPanel extends HTMLElement {
	connectedCallback() {
		this.classList.add("augmented");

		this.addEventListener("click", this.onToggle.bind(this));
	}

	onToggle(ev) {
		let collapsed = this.getAttribute("aria-expanded") === "false";
		this.setAttribute("aria-expanded", collapsed ? "true" : "false");

		ev.preventDefault();
	}
}
