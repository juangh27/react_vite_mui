import { ThemeProvider , Box} from "@mui/material";

export default function Boxes_1() {
    return (
        <>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                This Box renders as an HTML section element.
            </Box>

            <Box
                height={200}
                width={200}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}
            >
                This Box uses MUI System props for quick customization.
            </Box>

            <ThemeProvider
                theme={{
                    palette: {
                        primary: {
                            main: 'red',
                            dark: '#0066CC',
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        width: 100,
                        height: 100,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                    }}
                />
            </ThemeProvider>
        </>
    )
}