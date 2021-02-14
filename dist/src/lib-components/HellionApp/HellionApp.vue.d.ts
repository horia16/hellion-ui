import { PropType } from "vue";
import { HellionOptions } from "../../hooks/hellion-app/interfaces";
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<HellionOptions>;
        default: null;
    };
}, {
    hellionApp: {
        init: (userOptions: HellionOptions | null) => void;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options: HellionOptions;
} & {}>, {
    options: HellionOptions;
}>;
export default _default;
