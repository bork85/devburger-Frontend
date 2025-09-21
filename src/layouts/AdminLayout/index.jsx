import { Navigate, Outlet } from "react-router-dom";
import { Footer, SideNavAdmin } from "../../components";
import { Container } from "./style";

export function AdminLayout() {
    const { admin: isAdmin } = JSON.parse(localStorage?.getItem('devburger:UserData'))

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