import { ColorKey } from './colors';

export type CMYK = [number, number, number, number];

export type RGB = [number, number, number];

export interface ColorInfo {
    key: ColorKey;
    name: string;
    cmyk: CMYK;
    rgb: RGB;
    hex: string;
}