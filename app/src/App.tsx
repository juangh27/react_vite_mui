
import './App.css'
import ClippedDrawer from './SideBar'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import Boxes_1 from './routes/Boxes';
import DashBase from './routes/Dashboard';
import Alltables from './routes/Tables';
import Progress from './routes/Progress';
import CardsMain from './routes/Cards';
import ChartsMain from './routes/Charts';
import DateTimesPickers from './routes/DateTimePickers';



let router = createBrowserRouter([
  {
    path: "/",
    element: <ClippedDrawer />,
    children: [
      {
        path: "/",
        element: <DashBase />

      },
      {
        path: "boxes/",
        element: <Boxes_1 />

      },
      {
        path: "tables/",
        element: <Alltables />

      },
      {
        path: "progress/",
        element: <Progress />

      },
      {
        path: "cards/",
        element: <CardsMain />

      },
      {
        path: "charts/",
        element: <ChartsMain />

      },
      {
        path: "dates/",
        element: <DateTimesPickers />

      },
    ],
  },
]);
 


function App() {

  return (
    <>
<RouterProvider router={router} />
    </>
  )
}

export default App
