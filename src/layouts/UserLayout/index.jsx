import { Navigate, Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

export function UserLayout(){
    const userData = localStorage.getItem('devburger:UserData');
    const token = userData && JSON.parse(userData).token;

    if (!token) return <Navigate to="/login" />;

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}