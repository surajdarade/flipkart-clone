import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import PageNotFound from "./../pages/PageNotFound.jsx";
import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";
import ForgotPassword from "../pages/Auth/ForgotPassword.jsx";
import Dashboard from "../pages/user/Dashboard.jsx";
import AdminDashboard from "../pages/Admin/AdminDashboard.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AdminRoute from "./AdminRoute.jsx";
import Products from "../pages/Products/Products.jsx";
import ProductPage from "../pages/Products/ProductPage.jsx";
import Orders from "./../pages/user/Orders/Orders.jsx";
import Wishlist from "../pages/user/Wishlist/Wishlist.jsx";
import Cart from "../pages/user/Cart/Cart.jsx";
import Shipping from "../pages/user/Cart/Shipping.jsx";
import OrderSuccess from "../pages/user/Cart/OrderSuccess.jsx";
import OrderFailed from "../pages/user/Cart/OrderFailed.jsx";
import OrderDetails from "../pages/user/Orders/OrderDetails.jsx";
import AdminOrders from "../pages/Admin/AdminOrders.jsx";
import UpdateOrders from "../pages/Admin/UpdateOrders.jsx";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/products" element={<Products />} />
            <Route path="/search" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" element={<PrivateRoute />}>
                <Route path="" element={<Shipping />} />
                <Route path="confirm" element={<OrderSuccess />} />
                <Route path="failed" element={<OrderFailed />} />
            </Route>
            <Route path="product/:productId" element={<ProductPage />} />
            <Route path="/user" element={<PrivateRoute />}>
                <Route path="dashboard/*" element={<Dashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route
                    path="orders/order_details/:id"
                    element={<OrderDetails />}
                />
                <Route path="wishlist" element={<Wishlist />} />
            </Route>
            <Route path="/admin" element={<AdminRoute />}>
                <Route path="dashboard/*" element={<AdminDashboard />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route
                    path="orders/order_details/:id"
                    element={<UpdateOrders />}
                />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default Routers;
