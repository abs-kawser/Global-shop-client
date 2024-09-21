import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
  {
    title: "Pages",
    items: ["Products", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ position: "relative", width: "100%", bgcolor: "#335c67", py: 6, }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography color="white" variant="h5" className="mb-6">
              Global Shop
            </Typography>
          </Grid>
          {LINKS.map(({ title, items }) => (
            <Grid key={title} item xs={12} sm={6} md={2.4}>
              <Typography color="gray" fontWeight={600} fontSize={18}>
                {title}
              </Typography>
              {items.map((link) => (
                <Typography color="white" fontSize={14} key={link}>
                  <Link href="#" color="gray">
                    {link}
                  </Link>
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
        <Divider color="white" sx={{ my: 4 }} />

        <Typography
            sx={{
              mb: { xs: 4, md: 0 },
              textAlign: "center",
              fontWeight: "normal",
              color: "white",
            }}
          >
            &copy; {currentYear} <a href="/">Best Cleaning</a>. All Rights
            Reserved.
          </Typography>
      </Container>
    </Box>
  );
}

