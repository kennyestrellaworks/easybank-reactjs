import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./sass/main.scss";
import { Homepage } from "./pages/Homepage";
import { RootLayout } from "./layouts/RootLayout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Careers } from "./pages/Careers";
import { Blog } from "./pages/Blog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="careers" element={<Careers />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
