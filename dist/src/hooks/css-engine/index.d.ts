import { CSSEngineClass } from "./interfaces";
declare function updateClass(engineClass: CSSEngineClass, renew?: boolean): void;
declare function deleteClass(className: string): void;
declare function inject(className: string, propertyName: string, propertyData: string): void;
declare function injectObject(className: string, propObject: {
    [key: string]: string;
}, clearOld?: boolean, injectOnce?: boolean): void;
declare function init(): void;
declare const cssEngine: {
    init: typeof init;
    inject: typeof inject;
    injectObject: typeof injectObject;
    deleteClass: typeof deleteClass;
    updateClass: typeof updateClass;
};
export default cssEngine;
