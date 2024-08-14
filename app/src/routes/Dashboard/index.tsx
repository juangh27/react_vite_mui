import Divider from "@mui/material/Divider"
import Orders from "../Tables/Orders"
import { CardInt } from "../Cards/Interaction"
import { LinearCol } from "../Progress/Linear"
import { ChartBar } from "../Charts/Bars"

export default function DashBase() {
    return (
        <>
            <h1>Dashboard Main</h1>
            <div>
                <Orders />
            </div>
            <Divider>Card with interaction</Divider>
            <CardInt />
            <Divider>Linear Colors</Divider>
            <LinearCol />
            <Divider>Bar Charts</Divider>
            <ChartBar />
            
        </>
    )
}