# Scrolia - Vanilla

This is the documentation for using Scrolia without any framework.

## Usage

For using Scrolia in page:

```html
<body>
    <div id="container">
        <!-- content here -->
    </div>
</body>
```

```ts
import { pageScrollbar } from "@scrolia/vanilla";

const ct: HTMLElement | null = document.getElementById("container");

ct && pageScrollbar(ct);
```

For using Scrolia inside component:

```html
<div style="width: 250px; height: 500px;">
    <div id="container">
        <!-- content here -->
    </div>
</div>
```

```ts
import { componentScrollbar } from "@scrolia/vanilla";

const ct: HTMLElement | null = document.getElementById("container");

ct && componentScrollbar(ct);
```
