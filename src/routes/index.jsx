
import { Route, Routes } from "react-router-dom";
import { Login, Register, Home, Menu, Cart, Checkout, CompletePayment, Orders, Products, NewProduct, UpdateProduct, NewCategory, Categories, UpdateCategory } from "../containers"
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />}></Route>
                <Route path="cardapio" element={<Menu />} />
                <Route path="carrinho" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="compra_finalizada" element={<CompletePayment />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/pedidos" element={<Orders />} />
                <Route path="/admin/produtos" element={<Products />} />
                <Route path="/admin/categorias" element={<Categories />} />
                <Route path="/admin/novo-produto" element={<NewProduct />} />
                <Route path="/admin/nova-categoria" element={<NewCategory />} />
                <Route path="/admin/alterar-produto" element={<UpdateProduct />} />
                <Route path="/admin/alterar-categoria" element={<UpdateCategory />} />            
            </Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/cadastro" element={<Register />}></Route>
        </Routes>
    )
}