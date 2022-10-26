import { ColorKey, ColorCodes, ColorNames, MeasuredColorCodes } from './colors';
import { cmykToRgb, rgbToHex } from './utils';
import type { ColorInfo } from './types';

const buildDictionary = (): Record<ColorKey, ColorInfo> => {
    const dictionary = Object.keys(ColorKey).map((key) => {
        const name = ColorNames[key];
        const cmyk = ColorCodes[key];
        const rgb = MeasuredColorCodes[key] || cmykToRgb(cmyk);
        const hex = rgbToHex(rgb);

        return { key, name, cmyk, rgb, hex };
    }).reduce((acc, cur) => Object.assign(acc, { [cur.key]: cur }), {} as Record<ColorKey, ColorInfo>);

    return dictionary;
}

class ColorDictionaryService {
    private dictionary: Record<ColorKey, ColorInfo>;

    constructor() {
        this.dictionary = buildDictionary();
    }

    getDictionary() {
        return this.dictionary;
    }
}

const singleton = new ColorDictionaryService();

export default singleton;