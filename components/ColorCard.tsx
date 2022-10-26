import React from 'react';
import { Paper, useTheme } from '@mui/material';

interface ColorCardProps {
    hex: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ hex }) => {
    const theme = useTheme();

    return <Paper sx={{ background: hex, padding: theme.spacing[2], textAlign: 'center', color: theme.palette.text.secondary, minWidth: '5vw', minHeight: '5vh' }}>{hex}</Paper>
}

export default ColorCard;