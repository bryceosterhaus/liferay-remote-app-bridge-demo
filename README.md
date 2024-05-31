## Demo

This is a simple demo of how to use window.postMessage to communicate between an iframe and a parent page.

### iframe-site

Run site locally with

```bash
cd ./iframe-site && npx serve
```

### `bridge.js`

This is the client-side JavaScript that will be loaded into Liferay. You need to add this either via globalJS client extension or just a global JS snippet on your page. This file is the "listener" for messages from the iframe-site. You can add any logic here as needed.
