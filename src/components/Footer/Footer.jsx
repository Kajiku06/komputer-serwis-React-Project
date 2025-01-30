import { useEffect, useRef } from 'react';
import { Container, Grid, Typography, Link, useTheme } from '@mui/material';
import { FaFacebookF, FaInstagram, FaDiscord, FaYoutube, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const theme = useTheme();
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <footer ref={footerRef} className="footer" style={{ backgroundColor: theme.palette.primary.main, padding: '2rem 0', position: 'relative' }}>
            <div className="footer-decoration right-circle-1" style={{ backgroundColor: theme.palette.primary.dark }}></div>
            <div className="footer-decoration right-circle-2" style={{ backgroundColor: theme.palette.primary.dark }}></div>
            <Container maxWidth="lg">
                <Grid container spacing={4} className="footer-content">
                    <Grid item xs={12} sm={6} md={2} className="footer-logo">
                        
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} className="footer-about">
                        <Typography variant="h6" style={{ color: theme.palette.primary.contrastText }}>O nas</Typography>
                        <Link href="/about" color="inherit" style={{ color: theme.palette.primary.contrastText }}>O nas</Link><br />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} className="footer-services">
                        <Typography variant="h6" style={{ color: theme.palette.primary.contrastText }}>Usługi</Typography>
                        <Link href="/services" color="inherit" style={{ color: theme.palette.primary.contrastText }}>Co oferujemy</Link><br />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} className="footer-contact">
                        <Typography variant="h6" style={{ color: theme.palette.primary.contrastText }}>Kontakt</Typography>
                        <Link href="/contact" color="inherit" style={{ color: theme.palette.primary.contrastText }}>Skontaktuj się z nami</Link><br />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} className="footer-collaborations">
                        <Typography variant="h6" style={{ color: theme.palette.primary.contrastText }}>Współpraca</Typography>
                        <Link href="/partners" color="inherit" style={{ color: theme.palette.primary.contrastText }}>Nasi partnerzy</Link><br />

                    </Grid>
                </Grid>
                <Grid container spacing={4} className="footer-social" justifyContent="center" style={{ marginTop: '1rem' }}>
                    <Grid item>
                        <Typography variant="h6" align="center" style={{ color: theme.palette.primary.contrastText }}>Śledź nas</Typography>
                        <Link href="https://www.facebook.com/profile.php?id=61572732928218" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.contrastText, margin: '0 0.5rem' }}>
                            <FaFacebookF size={24} />
                        </Link>
                        <Link href="https://discord.gg/GSGAqnWM3N" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.contrastText, margin: '0 0.5rem' }}>
                            <FaDiscord size={24} />
                        </Link>
                        <Link href="https://github.com/Kajiku06" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.contrastText, margin: '0 0.5rem' }}>
                            <FaGithub size={24} />
                        </Link>
                    </Grid>
                </Grid>
                <Grid container spacing={4} className="footer-bottom" justifyContent="center" style={{ marginTop: '1rem' }}>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="textSecondary" align="center" style={{ color: theme.palette.primary.contrastText }}>
                            &copy; 2025 Bajtownik. Wszelkie prawa zastrzeżone.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;