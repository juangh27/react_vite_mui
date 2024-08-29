import Grid from "@mui/material/Grid";
import ChartDemo from "./DemoChart";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { ChartBar } from "./Bars";

export default function ChartsMain() {
    return (
        <div>
            <h1>Charts</h1>
            {/* <ChartDemo /> */}

            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <ChartDemo />
                    </Paper>
                </Grid>
            </Grid>
            <Divider>Linear Colors</Divider>
            <ChartBar />
        </div>
    )
}