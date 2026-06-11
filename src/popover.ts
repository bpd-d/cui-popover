const STYLES = `
:host {
    display: block;
}
`;

class CuiPopover extends HTMLElement {
    private shadow: ShadowRoot;
    private styleEl: HTMLStyleElement;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });

        this.styleEl = document.createElement("style");
        this.styleEl.textContent = STYLES;

        this.shadow.appendChild(this.styleEl);
        this.shadow.appendChild(document.createElement("slot"));
    }

    connectedCallback() {
    }

    disconnectedCallback() {
    }
}

customElements.define('cui-popover', CuiPopover);