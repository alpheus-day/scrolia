# Scrolia - React Native

This is the documentation for using Scrolia in React Native Web.

## Usage

> Make sure `react-native-web` and `react-native-reanimated` were installed.

```tsx
import type { ScrollView } from "react-native";

import * as React from "react";
import { View } from "react-native";

import { Scrollbar } from "@scrolia/react-native";

const Component = (): React.JSX.Element => {
    return (
        <>
            <View style={{ width: 250, height: 500 }}>
                <Scrollbar>
                    {/* content here */}
                </Scrollbar>
            </View>
        </>
    );
};

export { Component };
```
