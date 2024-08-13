
import './App.css'
import ClippedDrawer from './SideBar'




import {
  Await,
  createBrowserRouter,
  defer,
  Form,
  Link,
  Outlet,
  RouterProvider,
  useAsyncError,
  useAsyncValue,
  useFetcher,
  useFetchers,
  useLoaderData,
  useNavigation,
  useParams,
  useRevalidator,
  useRouteError,
} from "react-router-dom";

import Test1 from './SideBar/Test1';
import Test2 from './SideBar/Test2';
import Test3 from './SideBar/Test3';


let router = createBrowserRouter([
  {
    path: "/",
    element: <ClippedDrawer />,
    children: [
      {
        path: "test1/",
        element: <Test1 />

      },
      {
        path: "test2/",
        element: <Test2 />

      },
      {
        path: "test3/",
        element: <Test3 />

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
