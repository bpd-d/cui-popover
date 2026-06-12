# Plan: Support Native Invoker Commands API in CuiPopover

## Context

CuiPopover is a custom element wrapping the browser's native HTML popover. The browser's Invoker Commands API lets buttons with `commandfor` / `command` attributes target a popover and trigger actions. Built-in commands (`toggle-popover`, `show-popover`, `hide-popover`) are handled by the browser automatically. For **custom** command values, the browser fires a `command` event on the target element — but currently CuiPopover does nothing with it.

The goal is to intercept that `command` event and handle it internally. No custom event will be re-dispatched — the element will perform actions based on the command value. For now the handler only logs the intercepted command name and source; concrete actions will be added later.

## Implementation

**Only file to change:** `src/popover.ts`

### 1. Declare `CommandEvent` interface

TypeScript's DOM lib does not yet include `CommandEvent`. Declare it at the module scope:

```ts
interface CommandEvent extends Event {
    readonly command: string;
    readonly source: Element | null;
}
```

### 2. Add private `handleCommand` arrow method

Arrow function so `this` is bound correctly when passed to `addEventListener`:

```ts
private handleCommand = (event: CommandEvent) => {
    console.log('[CuiPopover] command:', event.command, 'source:', event.source);
    // future actions will be dispatched here based on event.command
};
```

### 3. Wire up in lifecycle callbacks

`connectedCallback` — register listener:
```ts
this.addEventListener('command', this.handleCommand as EventListener);
```

`disconnectedCallback` — remove listener:
```ts
this.removeEventListener('command', this.handleCommand as EventListener);
```

The cast to `EventListener` is needed because `CommandEvent` is a custom interface, not in lib.dom yet.

## Verification

1. Run `npm run dev` and open `index.html` in a browser that supports the Invoker Commands API (Chrome 135+).
2. Add a button with `commandfor="<popover-id>"` and `command="--my-action"` to the demo.
3. Click the button — the console should log `[CuiPopover] command: --my-action source: <button>`.
4. Confirm built-in commands (`toggle-popover`) still work without interference.
