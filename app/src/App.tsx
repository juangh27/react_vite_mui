
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
