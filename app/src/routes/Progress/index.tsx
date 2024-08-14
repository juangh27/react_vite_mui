import { CircularColor, CircularInd, CircularDet, CircularVal } from "./Circular";
import CircularInt from "./Interactive";

import Divider from '@mui/material/Divider';
import {  LinearBuf, LinearCol, LinearDef, LinearDet, LinearLab } from "./Linear";
import DelayingAppearance from "./Delayed";

export default function Progress() {
    return (
        <><h1>Progress Elements</h1>
            <Divider>Circular default</Divider>
            <div>
                <CircularInd />
            </div>
            <Divider>Circular colors</Divider>
            <div>
                <CircularColor />
            </div>
            <div>

                <Divider>Circular determinate</Divider>
                <CircularDet />
            </div>
            <Divider>Circular with value</Divider>
            <CircularVal />
            <div>
                <Divider>Interactive</Divider>
                <CircularInt />
            </div>
            <div>
                <Divider>Linear Default</Divider>
                <LinearDef />
            </div>
            <div>
                <Divider>Linear Colors</Divider>
                <LinearCol />
            </div>
            <Divider>Linear Determinate</Divider>
            <div>
                <LinearDet />
            </div>
            <Divider>Linear Buffer</Divider>
            <div>
                <LinearBuf />
            </div>
            <Divider>Linear with Label</Divider>
            <div>
                <LinearLab />
            </div>
            <Divider>Delayed Appearence</Divider>
            <div>
                <DelayingAppearance />
            </div>
        </>
    )
}