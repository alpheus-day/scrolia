[@scrolia/react](../README.md) / Scrollbar

# Function: Scrollbar()

```ts
function Scrollbar(props): Element;
```

Defined in: [packages/react/src/components/scrollbar.tsx:43](https://github.com/alpheus-day/scrolia/blob/a7062c82222b0dcb500e88f7ca3fff69b13a5fcd/packages/react/src/components/scrollbar.tsx#L43)

Scrollbar component.

### Example

```tsx
import type * as React from "react";

import { Scrollbar } from "@scrolia/react";

const App = (): React.JSX.Element => {
    return (
        <>
            <div>
                <Scrollbar>
                    <div>Content</div>
                </Scrollbar>
            </div>
        </>
    );
}
```

## Parameters

### props

#### children?

`ReactNode`

#### disabled?

`boolean`

Whether disable the scrollbar.

By default, it is `false`.

#### page?

`boolean`

Whether the scrollbar serve for a page.

By default, it is `false`.

## Returns

`Element`
