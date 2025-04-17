type runByPositionOptions = {
    enableX: boolean;
    enableY: boolean;
    fnX: () => any;
    fnY: () => any;
};

/** Run function by position. */
const runByPosition = ({
    enableX,
    enableY,
    fnX,
    fnY,
}: runByPositionOptions): void => {
    enableX && fnX();
    enableY && fnY();
};

export type { runByPositionOptions };
export { runByPosition };
