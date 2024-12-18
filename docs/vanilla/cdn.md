# Scrolia - Vanilla (CDN)

This is the documentation for using Scrolia through CDN.

## Usage

Following is the usage of Scrolia in page and component.

### Use Scrolia in Page

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
var ct = document.getElementById("container");
ct && scrolia.pageScrollbar(ct);
```

### Use Scrolia in Component

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
var ct = document.getElementById("container");
ct && scrolia.componentScrollbar(ct);
```
