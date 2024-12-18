# Scrolia - Vanilla

This is the documentation for using Scrolia without any framework.

## Usage

Following is the usage of Scrolia in page and component.

### Use Scrolia in Page

Import the CSS through HTML:

```html
<link
    rel="stylesheet"
    href="https://unpkg.com/@scrolia/vanilla@latest/dist/index.css"
/>
```

Or import the CSS through JavaScript:

```js
import "@scrolia/vanilla/css";
// or
import "@scrolia/vanilla/dist/index.css";
```

Add the following HTML code:

```html
<body>
    <div id="container">
        <!-- content here -->
    </div>
</body>
```

Then add the following code to bind the scrollbar:

```js
import { pageScrollbar } from "@scrolia/vanilla";

const ct = document.getElementById("container");

ct && pageScrollbar(ct);
```

### Use Scrolia in Component

Import the CSS through HTML:

```html
<link
    rel="stylesheet"
    href="https://unpkg.com/@scrolia/vanilla@latest/dist/index.css"
/>
```

Or import the CSS through JavaScript:

```js
import "@scrolia/vanilla/css";
// or
import "@scrolia/vanilla/dist/index.css";
```

Add the following HTML code:

```html
<div style="width: 250px; height: 500px;">
    <div id="container">
        <!-- content here -->
    </div>
</div>
```

Then add the following code to bind the scrollbar:

```js
import { componentScrollbar } from "@scrolia/vanilla";

const ct = document.getElementById("container");

ct && componentScrollbar(ct);
```
