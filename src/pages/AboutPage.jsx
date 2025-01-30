import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Link, Box, useTheme, useMediaQuery } from '@mui/material';
import { FaUser, FaGithub } from 'react-icons/fa';
import Baner from '../components/Baner/Baner';

const AboutPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: theme.palette.background.default }}>
            <Baner pageName="O nas" />
            <Container maxWidth="md" style={{ padding: theme.spacing(4), backgroundColor: theme.palette.background.paper, flex: 1 }}>
                <Typography variant="h4" align="center" style={{ marginBottom: theme.spacing(4), color: theme.palette.text.primary, fontWeight: 'bold' }}>
                    O nas
                </Typography>
                <Typography variant="body1" align="center" style={{ marginBottom: theme.spacing(6), color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    Jesteśmy mobilnym serwisem komputerowym działającym elastycznie na terenie całej Rumi. Obsługujemy paczkomaty i dojeżdżamy do klientów po odbiór sprzętu.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ boxShadow: theme.shadows[5], borderRadius: theme.shape.borderRadius }}>
                            <CardMedia
                                component="div"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 140,
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.primary.contrastText,
                                }}
                            >
                                <FaUser size={64} />
                            </CardMedia>
                            <CardContent>
                                <Typography variant="h5" component="div" align="center" style={{ color: theme.palette.text.primary, fontWeight: 'bold' }}>
                                    Kazimierz Kiper
                                </Typography>
                                <Typography variant="body2" align="center" style={{ color: theme.palette.text.secondary, marginBottom: theme.spacing(2) }}>
                                    Specjalista ds. napraw komputerów i wsparcia technicznego.
                                </Typography>
                                <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                                    <Link href="https://github.com/Kajiku06" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                                        <FaGithub size={32} />
                                    </Link>
                                    <Link href="http://kazimierz-kiper.duckdns.org" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                                        Portfolio
                                    </Link>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AboutPage;
