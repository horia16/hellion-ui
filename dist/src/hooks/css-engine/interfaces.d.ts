export interface CSSEngineClass {
    index: number;
    name: string;
    props: Array<CSSEngineProp>;
}
export interface CSSEngineProp {
    name: string;
    data: string;
}
