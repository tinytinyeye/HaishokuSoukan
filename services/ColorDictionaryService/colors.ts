import { CMYK } from "./types";

export enum ColorKey {
    HermosaPink = 'HermosaPink',
    CorinthianPink = 'CorinthianPink',
    CameoPink = 'CameoPink',
    Fawn = 'Fawn',
    LightBrownDrab = 'LightBrownDrab',
    CoralRed = 'CoralRed',
    FreshColor = 'FreshColor'
}

export const ColorNames: Record<ColorKey, string> = {
    [ColorKey.HermosaPink]: 'Hermosa Pink',
    [ColorKey.CorinthianPink]: 'Corinthian Pink',
    [ColorKey.CameoPink]: 'Cameo Pink',
    [ColorKey.Fawn]: 'Fawn',
    [ColorKey.LightBrownDrab]: 'Light Brown Drab',
    [ColorKey.CoralRed]: 'Coral Red',
    [ColorKey.FreshColor]: 'Fresh Color'
};

export const ColorCodes: Record<ColorKey, CMYK> = {
    [ColorKey.HermosaPink]: [0, 30, 6, 0],
    [ColorKey.CorinthianPink]: [0, 35, 15, 0],
    [ColorKey.CameoPink]: [10, 32, 19, 0],
    [ColorKey.Fawn]: [18, 31, 30, 0],
    [ColorKey.LightBrownDrab]: [8, 30, 20, 35],
    [ColorKey.CoralRed]: [0, 55, 40, 0],
    [ColorKey.FreshColor]: [0, 53, 45, 0]
};

export const MeasuredColorCodes = {
    [ColorKey.HermosaPink]: [238, 175, 202],
    [ColorKey.CorinthianPink]: [232, 161, 175],
    [ColorKey.CameoPink]: [206, 160, 164],
    [ColorKey.Fawn]: [193, 156, 130],
    [ColorKey.LightBrownDrab]: [168, 124, 128],
    [ColorKey.CoralRed]: [225, 117, 103],
    [ColorKey.FreshColor]: [225, 126, 94]
}