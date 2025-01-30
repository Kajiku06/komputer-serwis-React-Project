import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" style={{ textAlign: 'center', padding: '2rem 0' }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Skontaktuj się z nami
            </Typography>
            <Typography variant="body1" paragraph>
                Oferujemy darmową wycenę i profesjonalne porady. Skontaktuj się z nami, aby dowiedzieć się więcej!
            </Typography>
            <Box mt={4}>
                <Button variant="contained" color="primary" size="large" onClick={() => navigate('/contact')}>
                    Skontaktuj się
                </Button>
            </Box>
        </Container>
    );
};

export default ContactSection;