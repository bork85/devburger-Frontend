import { Navigate, Outlet } from "react-router-dom";
import { Footer, SideNavAdmin } from "../../components";
import { Container } from "./style";

export function AdminLayout() {
    const userData = localStorage.getItem('devburger:UserData');
    const isAdmin = userData && JSON.parse(userData).admin;

    return isAdmin ?
        (
            <>
                <Container>
                    <SideNavAdmin />
                    <main>
                        <section>
                            <Outlet />
                        </section>
                    </main>                    
                </Container>
                <Footer />
            </>
        ) : <Navigate to="/login" />
}