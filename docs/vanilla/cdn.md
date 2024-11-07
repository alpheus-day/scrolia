# Scrolia - Vanilla (CDN)

This is the documentation for using Scrolia through CDN.

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
const ct: HTMLElement | null = document.getElementById("container");
ct && scrolia.pageScrollbar(ct);
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
const ct: HTMLElement | null = document.getElementById("container");
ct && scrolia.componentScrollbar(ct);
```
