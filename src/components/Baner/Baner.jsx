import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Baner = ({ pageName }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '8vh',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                padding: theme.spacing(1, 2),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                boxShadow: theme.shadows[3],
                zIndex: 1200,
                marginTop: theme.spacing(14), // Add more margin to the top
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {pageName}
            </Typography>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: theme.spacing(2),
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    gap: theme.spacing(1),
                }}
            >
                <Box
                    sx={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: theme.palette.primary.light,
                        boxShadow: theme.shadows[3],
                    }}
                />
                <Box
                    sx={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: theme.palette.primary.dark,
                        boxShadow: theme.shadows[3],
                    }}
                />
                <Box
                    sx={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: theme.palette.primary.light,
                        boxShadow: theme.shadows[3],
                    }}
                />
            </Box>
        </Box>
    );
};

export default Baner;
