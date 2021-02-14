import { DefineComponent, Plugin } from 'vue';


declare const HellionUi: Exclude<Plugin['install'], undefined>;
export default HellionUi;

export const HellionUiSample: DefineComponent<{}, {}, any>;
