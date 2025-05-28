[@scrolia/react](../README.md) / Scrollbar

# Function: Scrollbar()

```ts
function Scrollbar(props): Element;
```

Defined in: [packages/react/src/components/scrollbar.tsx:43](https://github.com/alpheusday/scrolia/blob/a1d15b8008e894d5dd6b0e61a1c2164d92ca7b98/packages/react/src/components/scrollbar.tsx#L43)

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
