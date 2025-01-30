import React from 'react';
import { Container, Grid, Typography, Box, Link, Card, CardContent, Button, useTheme, useMediaQuery } from '@mui/material';
import { FaFacebookF, FaInstagram, FaDiscord, FaYoutube, FaGithub, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DatatocontactSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isLaptop = useMediaQuery(theme.breakpoints.up('md'));

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Container maxWidth="md" style={{ padding: theme.spacing(4), backgroundColor: theme.palette.background.paper, minHeight: isLaptop ? '60vh' : 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" align="center" style={{ marginBottom: theme.spacing(4), color: theme.palette.text.primary, fontWeight: 'bold' }}>
                Dane Kontaktowe
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ duration: 0.5, delay: 0.1 }}>
                        <Card>
                            <CardContent>
                                <Box display="flex" alignItems="center" style={{ marginBottom: theme.spacing(2) }}>
                                    <FaPhone size={24} style={{ marginRight: theme.spacing(2), color: theme.palette.primary.main }} />
                                    <Typography variant="body1" style={{ color: theme.palette.text.primary }}>
                                        +48 669 233 392
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" style={{ marginBottom: theme.spacing(2) }}>
                                    <FaEnvelope size={24} style={{ marginRight: theme.spacing(2), color: theme.palette.primary.main }} />
                                    <Typography variant="body1" style={{ color: theme.palette.text.primary }}>
                                       kiperkazik@gmail.com
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" style={{ marginBottom: theme.spacing(2) }}>
                                    <FaClock size={24} style={{ marginRight: theme.spacing(2), color: theme.palette.primary.main }} />
                                    <Typography variant="body1" style={{ color: theme.palette.text.primary }}>
                                        Poniedziałek - Piątek: 16:00 - 20:00
                                    </Typography>
                                </Box>
                                <Typography variant="body1" style={{ color: theme.palette.text.primary, marginTop: theme.spacing(2) }}>
                                    Działamy głównie zdalnie i dojeżdżamy do klientów po odbiór sprzętu w umówionym miejscu.
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ duration: 0.5, delay: 0.2 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" style={{ marginBottom: theme.spacing(2), color: theme.palette.text.primary, fontWeight: 'bold' }}>
                                    Śledź nas
                                </Typography>
                                <Box display="flex" justifyContent={isMobile ? 'center' : 'space-around'} flexWrap="wrap" gap={2}>
                                    <Link href="https://www.facebook.com/profile.php?id=61572732928218" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                                        <FaFacebookF size={32} />
                                    </Link>                          
                                    <Link href="https://discord.gg/GSGAqnWM3N" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                                        <FaDiscord size={32} />
                                    </Link>               
                                    <Link href="https://github.com/Kajiku06" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                                        <FaGithub size={32} />
                                    </Link>
                                </Box>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DatatocontactSection;
