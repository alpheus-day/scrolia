import type * as React from "react";
import type { Format } from "ts-vista";

import type { Options } from "#/@types/options";

import { Container } from "#/base/container";
import { Content } from "#/base/content";
import { ThumbX } from "#/base/thumbX";
import { ThumbY } from "#/base/thumbY";
import { TrackX } from "#/base/trackX";
import { TrackY } from "#/base/trackY";

/** Props for the `Scrollbar` component. */
type ScrollbarProps = Format<
    Pick<Options, "disabled" | "page"> & {
        children?: React.ReactNode;
    }
>;

/**
 * Scrollbar component.
 *
 * ### Example
 *
 * ```tsx
 * import type * as React from "react";
 *
 * import { Scrollbar } from "@scrolia/react";
 *
 * const App = (): React.JSX.Element => {
 *     return (
 *         <>
 *             <div>
 *                 <Scrollbar>
 *                     <div>Content</div>
 *                 </Scrollbar>
 *             </div>
 *         </>
 *     );
 * }
 * ```
 */
const Scrollbar = (props: ScrollbarProps): React.JSX.Element => {
    const { children, ...p } = props;

    return (
        <>
            <Container {...p}>
                <Content>{children}</Content>
                <TrackX>
                    <ThumbX />
                </TrackX>
                <TrackY>
                    <ThumbY />
                </TrackY>
            </Container>
        </>
    );
};

export type { ScrollbarProps };
export { Scrollbar };
