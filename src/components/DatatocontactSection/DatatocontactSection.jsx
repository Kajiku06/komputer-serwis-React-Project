import React from 'react';
import { Container, Grid, Typography, Box, Link, useTheme } from '@mui/material';
import { FaFacebookF, FaInstagram, FaDiscord, FaYoutube, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const DatatocontactSection = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="md" style={{ padding: theme.spacing(4), backgroundColor: theme.palette.background.paper }}>
            <Typography variant="h4" align="center" style={{ marginBottom: theme.spacing(4), color: theme.palette.text.primary }}>
                Dane Kontaktowe
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center" style={{ marginBottom: theme.spacing(2) }}>
                        <FaPhone size={24} style={{ marginRight: theme.spacing(2), color: theme.palette.primary.main }} />
                        <Typography variant="body1" style={{ color: theme.palette.text.primary }}>
                            +48 123 456 789
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" style={{ marginBottom: theme.spacing(2) }}>
                        <FaEnvelope size={24} style={{ marginRight: theme.spacing(2), color: theme.palette.primary.main }} />
                        <Typography variant="body1" style={{ color: theme.palette.text.primary }}>
                            kontakt@serwis.com
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" style={{ marginBottom: theme.spacing(2) }}>
                        <FaMapMarkerAlt size={24} style={{ marginRight: theme.spacing(2), color: theme.palette.primary.main }} />
                        <Typography variant="body1" style={{ color: theme.palette.text.primary }}>
                            ul. Przykładowa 123, 84-230 Rumia
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" style={{ marginBottom: theme.spacing(2), color: theme.palette.text.primary }}>
                        Śledź nas
                    </Typography>
                    <Box display="flex" justifyContent="space-around">
                        <Link href="https://www.facebook.com/profile.php?id=61572732928218" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                            <FaFacebookF size={32} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                            <FaInstagram size={32} />
                        </Link>
                        <Link href="https://discord.gg/GSGAqnWM3N" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                            <FaDiscord size={32} />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                            <FaYoutube size={32} />
                        </Link>
                        <Link href="https://github.com/Kajiku06" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                            <FaGithub size={32} />
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DatatocontactSection;
