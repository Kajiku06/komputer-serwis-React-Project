import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme } from '@mui/material';
import Baner from '../components/Baner/Baner';

const laptopServices = [
    { name: 'Wymiana płyty głównej', minPrice: '120,00 zł', maxPrice: '250,00 zł' },
    { name: 'Konserwacja – czyszczenie wentylatorów, wymiana pasty termoprzewodzącej', minPrice: '100,00 zł', maxPrice: '200,00 zł' },
    { name: 'Wymiana inwertera', minPrice: '70,00 zł', maxPrice: '130,00 zł' },
    { name: 'Wymiana klawiatury', minPrice: '50,00 zł', maxPrice: '250,00 zł' },
    { name: 'Wymiana dysku twardego', minPrice: '30,00 zł', maxPrice: '100,00 zł' },
    { name: 'Wymiana lub dodatnie pamięci RAM', minPrice: '50,00 zł', maxPrice: '90,00 zł' },
    { name: 'Wymiana taśmy matrycy', minPrice: '90,00 zł', maxPrice: '200,00 zł' },
    { name: 'Wymiana uszkodzonej matrycy LCD', minPrice: '100,00 zł', maxPrice: '250,00 zł' },
    { name: 'Wymiana układu chłodzenia', minPrice: '100,00 zł', maxPrice: '200,00 zł' },
    { name: 'Wymiana karty WIFI', minPrice: '50,00 zł', maxPrice: '110,00 zł' },
    { name: 'Wymiana baterii dla układu CMOS', minPrice: '80,00 zł', maxPrice: '160,00 zł' },
    { name: 'Czyszczenie klawiatury', minPrice: '70,00 zł', maxPrice: '130,00 zł' },
    { name: 'Wymiana procesora', minPrice: '90,00 zł', maxPrice: '200,00 zł' },
    { name: 'Wymiana gniazda zasilania', minPrice: '60,00 zł', maxPrice: '150,00 zł' },
    { name: 'Wymiana wentylatora', minPrice: '80,00 zł', maxPrice: '180,00 zł' },
];

const dataRecoveryServices = [
    { name: 'Przywracanie danych z dysku twardego', minPrice: '150,00 zł', maxPrice: '400,00 zł' },
    { name: 'Przywracanie danych z pendrive', minPrice: '100,00 zł', maxPrice: '300,00 zł' },
    { name: 'Przywracanie danych z karty pamięci', minPrice: '100,00 zł', maxPrice: '300,00 zł' },
    { name: 'Instalacja systemu operacyjnego', minPrice: '100,00 zł', maxPrice: '200,00 zł' },
    { name: 'Instalacja oprogramowania biurowego', minPrice: '50,00 zł', maxPrice: '150,00 zł' },
    { name: 'Instalacja oprogramowania antywirusowego', minPrice: '50,00 zł', maxPrice: '100,00 zł' },
];

const ServicesPage = () => {
    const theme = useTheme();

    return (
        <div>
            <Baner pageName="Usługi" />
            <Container maxWidth="md" style={{ padding: theme.spacing(4), backgroundColor: theme.palette.background.paper }}>
                <Typography variant="h4" align="center" style={{ marginBottom: theme.spacing(4), color: theme.palette.text.primary }}>
                    Nasze Usługi
                </Typography>
                <Typography variant="h6" align="center" style={{ marginBottom: theme.spacing(2), color: theme.palette.text.primary }}>
                    Usługi dotyczące wymiany części w laptopach
                </Typography>
                <TableContainer component={Paper} style={{ marginBottom: theme.spacing(4) }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Usługa</TableCell>
                                <TableCell style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Cena minimalna</TableCell>
                                <TableCell style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Cena maksymalna</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {laptopServices.map((service, index) => (
                                <TableRow key={index}>
                                    <TableCell>{service.name}</TableCell>
                                    <TableCell>{service.minPrice}</TableCell>
                                    <TableCell>{service.maxPrice}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography variant="h6" align="center" style={{ marginBottom: theme.spacing(2), color: theme.palette.text.primary }}>
                    Usługi dotyczące przywracania danych i instalacji oprogramowania
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Usługa</TableCell>
                                <TableCell style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Cena minimalna</TableCell>
                                <TableCell style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Cena maksymalna</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataRecoveryServices.map((service, index) => (
                                <TableRow key={index}>
                                    <TableCell>{service.name}</TableCell>
                                    <TableCell>{service.minPrice}</TableCell>
                                    <TableCell>{service.maxPrice}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default ServicesPage;
