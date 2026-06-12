interface CommandEvent extends Event {
    readonly command: string;
    readonly source: Element | null;
}

const cuiPopoverStyles = `
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
        this.styleEl.textContent = cuiPopoverStyles;

        this.shadow.appendChild(this.styleEl);
        this.shadow.appendChild(document.createElement("slot"));
    }

    private handleCommand = (event: CommandEvent) => {
        console.log('[CuiPopover] command:', event.command, 'source:', event.source);
        // future actions will be dispatched here based on event.command
    };

    connectedCallback() {
        if (!this.hasAttribute("popover")) {
            this.setAttribute("popover", "");
        }
        this.addEventListener('command', this.handleCommand as EventListener);
    }

    disconnectedCallback() {
        this.removeEventListener('command', this.handleCommand as EventListener);
    }
}

customElements.define('cui-popover', CuiPopover);