# Scrolia - React

This is the documentation for using Scrolia in React.

## Usage

For using Scrolia in page:

```tsx
import type * as React from "react";

import * as ReactDOM from "react-dom/client";
import { PageScrollbar } from "@scrolia/react";

const App = (): React.JSX.Element => {
    return (
        <>
            <PageScrollbar>
                {/* content here */}
            </PageScrollbar>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

For using Scrolia inside component:

```tsx
import type * as React from "react";

import { ComponentScrollbar } from "@scrolia/react";

const Component = (): React.JSX.Element => {
    return (
        <>
            <div style={{ width: 250, height: 500 }}>
                <ComponentScrollbar>
                    {/* content here */}
                </ComponentScrollbar>
            </div>
        </>
    );
};

export { Component };
```
