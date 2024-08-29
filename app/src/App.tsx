
import './App.css'
import ClippedDrawer from './dashboard1/SideBar'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import Boxes_1 from './dashboard1/routes/Boxes';
import DashBase from './dashboard1/routes/Dashboard';
import Alltables from './dashboard1/routes/Tables';
import Progress from './dashboard1/routes/Progress';
import CardsMain from './dashboard1/routes/Cards';
import ChartsMain from './dashboard1/routes/Charts';
import DateTimesPickers from './dashboard1/routes/DateTimePickers';
import MarketingPage from './MainWeb/MarketingPage';
import Dashboard from './dashboard2/Dashboard';



let router = createBrowserRouter([
  {
    path: "/",
    element: <MarketingPage />,
  },
  {

    path: "/dashboard1",
    element: <ClippedDrawer />,
    children: [
      {
        path: "/dashboard1",
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

  {
    path: "/dashboard2",
    element: <Dashboard />,
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
