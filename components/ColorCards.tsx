import * as React from 'react';
import useSWR from 'swr';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ColorCard from './ColorCard';
import { ColorKey } from 'services/ColorDictionaryService/colors';
import { ColorInfo } from 'services/ColorDictionaryService/types';
import { fetcher } from 'utils/network';

const useDictionary = () => {
  const { data, error } = useSWR('/api/dictionary', fetcher);

  return {
    dictionary: data as Record<ColorKey, ColorInfo>,
    isLoading: !error && !data,
    isError: error
  }
}

const ColorCards = () => {
  const { dictionary, isLoading, isError } = useDictionary();

  if (isLoading || isError) return;

  const cards = Object.values(dictionary);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cards.map((card, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ColorCard hex={card.hex} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ColorCards;
