import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <div>
        <Header />
        <Box className="mt-20 min-h-[100vh]">
            <Outlet />
        </Box>
        <Footer />
    </div>
  );
};

export default Layout;