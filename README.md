# Scrolia

A customizable scrollbar component.

Scrolia currently supports Pure JavaScript/TypeScript, React and React Native. More frameworks may be supported in the future if needed or desired.

## Quick Start

```tsx
import type * as React from "react";

import { Scrollbar } from "@scrolia/react";

import "@scrolia/react/css";

const Component = (): React.JSX.Element => {
    return (
        <>
            <div>
                <Scrollbar>
                    <div>Content</div>
                </Scrollbar>
            </div>
        </>
    );
};
```

## Documentation

For using Scrolia through CDN, 
please refer to the [vanilla(CDN) documentation](./docs/vanilla/cdn/README.md).

For using Scrolia without any framework, 
please refer to the [vanilla documentation](./docs/vanilla/import/README.md).

For using Scrolia in React, 
please refer to the [React documentation](./docs/react//README.md).

For using Scrolia in React Native, 
please refer to the [React Native documentation](./docs/react-native/README.md).

## APIs

For vanilla package APIs,
please refer to the [Vanilla APIs](./apis/vanilla/README.md).

For React package APIs,
please refer to the [React APIs](./apis/react/README.md).

For React Native package APIs,
please refer to the [React Native APIs](./apis/react-native/README.md).

## License

This project is licensed under the terms of the MIT license.
