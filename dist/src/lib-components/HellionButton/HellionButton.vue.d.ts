declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    roundness: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    xSmall: {
        type: BooleanConstructor;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    big: {
        type: BooleanConstructor;
        default: boolean;
    };
    xBig: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    iconLeft: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    outlined: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    id: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color: string;
    roundness: string | number;
    xSmall: boolean;
    small: boolean;
    big: boolean;
    xBig: boolean;
    icon: string;
    iconLeft: boolean;
    disabled: boolean;
    loading: boolean;
    outlined: boolean;
} & {}>, {
    color: string;
    roundness: string | number;
    xSmall: boolean;
    small: boolean;
    big: boolean;
    xBig: boolean;
    icon: string;
    iconLeft: boolean;
    disabled: boolean;
    loading: boolean;
    outlined: boolean;
}>;
export default _default;
