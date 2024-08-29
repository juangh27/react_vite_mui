import { CardBas, CardOut } from "./Basics"
import Divider from '@mui/material/Divider';
import { CardInt } from "./Interaction";
import { CardMed, CardMedInt, CardMedIntSeparated } from "./Media";
import CardMedControl from "./MediaControl";


export default function CardsMain() {
    return (
        <>
            <h1>Cards</h1>
            <Divider>Basic Card</Divider>
            <div>
                <CardBas />
            </div>
            <Divider>Basic card outlined</Divider>
            <div>
                <CardOut />
            </div>
            <Divider>Card with interaction</Divider>
            <CardInt />
            <Divider>Card with media</Divider>
            <CardMed />
            <Divider>Card with media with interaction</Divider>
            <CardMedInt />
            <Divider>Card with media with interaction separated</Divider>
            <CardMedIntSeparated />
            <Divider>Card with media with Controls</Divider>
            <div>

            <CardMedControl />
            </div>
        </>
    )
}