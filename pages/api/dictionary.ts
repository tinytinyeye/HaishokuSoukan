
import type { NextApiRequest, NextApiResponse } from 'next';

import ColorDictionaryService from 'services/ColorDictionaryService';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.statusCode = 200;
    const dictionary = ColorDictionaryService.getDictionary();
    res.json(dictionary);
};

export default handler;