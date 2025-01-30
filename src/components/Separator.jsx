import React from 'react';
import { Box } from '@mui/material';

const Separator = ({ color = 'primary', thickness = '2px', width = '100%' }) => {
  return (
    <Box
      sx={{
        width: width, // Możesz dostosować szerokość
        height: thickness, // Grubość separatora
        backgroundColor: (theme) => theme.palette[color].main, // Kolor separatora zależny od motywu
      }}
    />
  );
};

export default Separator;

