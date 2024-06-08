import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import CreateBlogPage from "./pages/CreateBlogPage/CreateBlogPage";
import Appbar from "./ui/Appbar";
import MainLayout from "./MainLayout";
function App() {
  return (
    <div className="overflow-x-hidden">
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path={"/"} element={<BlogsPage/>} />
          <Route path={"/blog/:id"} element={<BlogPage />} />
          <Route path={"/blog/create"} element={<CreateBlogPage />} />
          </Route>
          <Route path={"/signup"} element={<AuthPage isSignUp={true}/>} />
          <Route path={"/signin"} element={<AuthPage isSignUp={false}/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
