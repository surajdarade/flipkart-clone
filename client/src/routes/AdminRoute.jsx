import { useState, useEffect } from "react";
import { useAuth } from "../context/auth.jsx";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { toast } from "react-toastify";

const AdminRoute = () => {
    const [ok, setOk] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [auth, setAuth, LogOut, isContextLoading] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const authCheck = async () => {
        try {
            // console.log("authCheck called");
            const res = await axios.get("http://localhost:4000/api/v1/auth/admin-auth", {
                headers: {
                    Authorization: auth?.token,
                },
            });
            // console.log("isContextLoading:" + isContextLoading);
            // console.log(res.data);

            setOk(res.data.ok === true); // Update ok based on the response
            // console.log("func:" + (res.data.ok === true)); // Log the updated value
            // console.log("func:" + ok);
        } catch (error) {
            console.log(error);

            if (error.response?.status === 401 && !isContextLoading) {
                // When isContextLoading becomes false, it means the context has been loaded
                setTimeout(() => {
                    toast.error("Admin Privileges Required!", {
                        toastId: "userNotAdmin",
                    });

                    navigate("/", {
                        state: location.pathname,
                    });
                }, 500);
            }
        }
    };

    useEffect(() => {
        !isContextLoading && authCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isContextLoading]);

    return ok ? <Outlet /> : <Spinner />;
};

export default AdminRoute;
