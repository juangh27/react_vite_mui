import { Divider } from "@mui/material";
import  { ControlledComponent, DatePickerBase, DatePickerBase2 } from "./DatePickers";

export default function DateTimesPickers() {
    return(
        <>
        <h1>Date Pickers</h1>
        <DatePickerBase />
        <Divider>Saved data</Divider>
        <div>
        <ControlledComponent />
        </div>
        <Divider>Español</Divider>
        <div>
        <DatePickerBase2 />
        </div>
        </>

    )
}