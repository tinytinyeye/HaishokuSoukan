import { CMYK, RGB } from "./types";

export const cmykToRgb = (cmyk: CMYK): RGB => {
    const [C, M, Y, K] = cmyk;

    const R = Math.round(255 * (1 - C / 100) * (1 - K / 100));
    const G = Math.round(255 * (1 - M / 100) * (1 - K / 100));
    const B = Math.round(255 * (1 - Y / 100) * (1 - K / 100));

    return [R, G, B];
}

const valueToHex = (val: number) => val.toString(16);

export const rgbToHex = (rgb: RGB): string => {
    const [R, G, B] = rgb;

    return `#${valueToHex(R)}${valueToHex(G)}${valueToHex(B)}`;
}