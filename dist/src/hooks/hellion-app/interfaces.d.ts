export interface HellionOptions {
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        warning: string;
        info: string;
        error: string;
        [key: string]: string;
    };
    dark: boolean;
    font: string;
}
