"use client";

import type { Format, Partial } from "ts-vista";

import type {
    CompleteOptionsBase,
    IndividualOptionsBase,
    SharedIndividualOptions,
} from "#/@types/options";

import * as React from "react";

type ScrollCoreStatesOptions = Format<
    SharedIndividualOptions & Partial<IndividualOptionsBase>
>;

type ScrollCoreStates = {
    options: ScrollCoreStatesOptions;
    hvTrack: boolean;
    setHvTrack: React.Dispatch<React.SetStateAction<boolean>>;
    hvThumb: boolean;
    setHvThumb: React.Dispatch<React.SetStateAction<boolean>>;
    timeout: React.RefObject<NodeJS.Timeout | null>;
    total: React.RefObject<number>;
    view: React.RefObject<number>;
    viewOffset: React.RefObject<number>;
    scrollbarLength: number;
    setScrollbarLength: React.Dispatch<React.SetStateAction<number>>;
    scrollbarOffset: number;
    setScrollbarOffset: React.Dispatch<React.SetStateAction<number>>;
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

type ScrollCoreOptions = CompleteOptionsBase;

type ScrollCore = {
    options: ScrollCoreOptions;
    ref: React.RefObject<HTMLDivElement | null>;
    x: ScrollCoreStates;
    y: ScrollCoreStates;
};

const ScrollCoreContext: React.Context<ScrollCore | null> =
    React.createContext<ScrollCore | null>(null);

const useScrollCore = (): ScrollCore => {
    const core: ScrollCore | null = React.useContext(ScrollCoreContext);

    if (core === null) {
        throw new Error("useScrollCore must be used within a provider");
    }

    return core;
};

export type {
    ScrollCoreOptions,
    ScrollCoreStatesOptions,
    ScrollCoreStates,
    ScrollCore,
};
export { ScrollCoreContext, useScrollCore };
