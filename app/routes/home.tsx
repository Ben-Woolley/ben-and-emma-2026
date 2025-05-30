import type { Route } from "./+types/home";
import { HomePage } from "../homepage/homepage";
import Container from "@mui/material/Container";
import { Box, Grid, Typography } from "@mui/material";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Container maxWidth={false} disableGutters>
    <Header />
    <HomePage />
  </Container>;
}

function Header() {
  return <Box >
    <Container maxWidth={false} sx={{p:5}}>
    <Typography fontFamily={'Petit Formal Script'} variant="h4" align="center">The wedding of</Typography>
    <Grid container alignItems="center" justifyContent={"center"} letterSpacing={2} spacing={2}>
        <Typography fontFamily={"Cormorant Garamond Variable"} variant="h1" align="center">BEN</Typography>
        <Typography fontFamily={'Petit Formal Script'} variant="h5"> and </Typography>
        <Typography fontFamily={"Cormorant Garamond Variable"} letterSpacing={2}  variant="h1" align="center">EMMA</Typography>
    </Grid>
    <Typography fontFamily={"Cormorant Garamond Variable"} fontWeight={"bold"} variant="h5" align="center">Saturday 30th May 2026</Typography>
    <Typography fontFamily={"Cormorant Garamond Variable"} variant="h5" align="center">Dorothy Clive Garden, TF9 4EU</Typography>
  </Container>
  </Box>
}