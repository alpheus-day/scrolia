[@scrolia/react](../README.md) / Scrollbar

# Function: Scrollbar()

```ts
function Scrollbar(props): Element;
```

Defined in: [packages/react/src/components/scrollbar.tsx:42](https://github.com/alpheustangs/scrolia/blob/6e40d863f64abf882be181a26502e5d480dddfc9/packages/react/src/components/scrollbar.tsx#L42)

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
