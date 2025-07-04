"use client";

import type { StyleProp, View, ViewProps, ViewStyle } from "react-native";
import type { SharedValue, StyleProps } from "react-native-reanimated";

import type { ScrollCore } from "@scrolia/react-native-core";

import * as React from "react";
import Reanimated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

import { styles, useScrollCore } from "@scrolia/react-native-core";

type AnimatedThumbYProps = ViewProps;

const Thumb = (
    props: AnimatedThumbYProps,
    ref: React.Ref<View>,
): React.JSX.Element => {
    const { children, ...p } = props;

    const core: ScrollCore = useScrollCore();

    const { headless } = core.options;

    const {
        options: { thumbColor },
        isActive,
        trackHover,
        thumbHover,
        drag,
        scrollbarLength,
        scrollbarOffset,
    } = core.y;

    const opct: SharedValue<number> = useSharedValue<number>(0);
    const bgColor: SharedValue<string> = useSharedValue<string>(
        thumbColor.base,
    );

    React.useEffect((): void => {
        opct.value = withTiming(isActive || trackHover || thumbHover ? 1 : 0, {
            duration: 200,
        });
    }, [opct, isActive, trackHover, thumbHover]);

    React.useEffect((): void => {
        bgColor.value = withTiming(
            drag
                ? thumbColor.press
                : thumbHover
                  ? thumbColor.hover
                  : thumbColor.base,
            { duration: 200 },
        );
    }, [bgColor, drag, thumbHover, thumbColor]);

    const animatedStyles: StyleProps = useAnimatedStyle(
        (): StyleProps => ({
            opacity: opct.value,
            backgroundColor: bgColor.value,
        }),
    );

    const thumb: StyleProp<ViewStyle>[] = [
        !headless && styles.thumbY,
        p.style,
        {
            height: Number.isNaN(scrollbarLength) ? 0 : scrollbarLength,
            top: Number.isNaN(scrollbarOffset) ? 0 : scrollbarOffset,
        },
        !headless && animatedStyles,
    ];

    return (
        <>
            <Reanimated.View
                {...p}
                ref={ref}
                style={thumb}
            >
                {children}
            </Reanimated.View>
        </>
    );
};

const AnimatedThumbY: React.ForwardRefExoticComponent<
    AnimatedThumbYProps & React.RefAttributes<View>
> = React.forwardRef(Thumb);

AnimatedThumbY.displayName = "AnimatedThumbY";

export type { AnimatedThumbYProps };
export { AnimatedThumbY };
