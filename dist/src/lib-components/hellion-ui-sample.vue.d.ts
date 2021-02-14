interface SampleData {
    counter: number;
    initCounter: number;
    message: {
        action: string | null;
        amount: number | null;
    };
}
declare const _default: import("vue").DefineComponent<{}, {}, SampleData, {
    changedBy(): string;
}, {
    increment(arg: Event | number): void;
    decrement(arg: Event | number): void;
    reset(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
export default _default;
