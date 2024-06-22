// import React from 'react';
// import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AboutUs from './components/AboutUs/AboutUs';
// import OurMission from './components/OurMission/OurMission';
// import ContactUs from './components/ContactUs/ContactUs';
// import BlogPage from './components/Blogs/BlogPage';
// import Tools from './components/Tools/Tools'; // Import Tools component
// import NavBar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';

// const AppLayout = () => {
//   return (
//     <div>
//       <NavBar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <AppLayout />,
//     children: [
//       {
//         path: '/',
//         element: <AboutUs />,
//       },
//       {
//         path: '/our-mission',
//         element: <OurMission />,
//       },
//       {
//         path: '/tools',
//         element:<Tools />,
//       },
//       {
//         path: '/blogs',
//         element: <BlogPage />,
//       },
//       {
//         path: '/contact',
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={appRouter} />;
// };

// export default App;
import React from 'react';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs/AboutUs';
import OurMission from './components/OurMission/OurMission';
import ContactUs from './components/ContactUs/ContactUs';
import BlogPage from './components/Blogs/BlogPage';
import Tools from './components/Tools/Tools';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <AboutUs />,
      },
      {
        path: '/our-mission',
        element: <OurMission />,
      },
      {
        path: '/tools',
        element: <Tools />,
      },
      {
        path: '/blogs',
        element: <BlogPage />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
