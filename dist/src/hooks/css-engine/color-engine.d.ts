/**
 * Set a color with a specific luminance and return it
 * @param property The property name
 * @param hex The hex code
 * @param lum The luminance factor between -1 and 1
 */
declare function createColorVariant(hex: string, lum: number): string;
/**
 * Return a bright or dark color based on the current text luminance
 * @param bgColor The color that we are matching against
 */
declare function assignTextColor(bgColor: string): "#111111" | "#ffffff";
declare const colorEngine: {
    createColorVariant: typeof createColorVariant;
    assignTextColor: typeof assignTextColor;
};
export default colorEngine;
