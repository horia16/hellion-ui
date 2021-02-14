import { HellionOptions } from "./interfaces";
declare function init(userOptions: HellionOptions | null): void;
declare const hellionApp: {
    init: typeof init;
};
export default hellionApp;
