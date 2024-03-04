import { Route, Routes } from "react-router-dom";
import UserMenu from "./UserMenu.jsx";
import SeoMetadata from "../../SEO/SeoMetadata.jsx";
import UserProfile from "../UserProfile.jsx";
import AddressComponent from "../AddressComponent.jsx";
import PanCardComponent from "../PanCardComponent.jsx";
import Deactivate from "../Auth/Deactivate.jsx";
import Reviews from "./Reviews.jsx";
import PaymentCards from "./PaymentCards.jsx";

const Dashboard = () => {
    return (
        <>
            <SeoMetadata title="User Dashboard" />
            <div className="px-[50px] py-[5px]">
                <div className="flex text-[14px] mx-[50px] my-[40px] gap-6">
                    <div className="min-w-[30%]">
                        <UserMenu />
                    </div>
                    <div className="w-[70%] bg-white shadow-md rounded-sm">
                        <Routes>
                            <Route path="" element={<UserProfile />} />
                            <Route path="profile" element={<UserProfile />} />
                            <Route
                                path="address"
                                element={<AddressComponent />}
                            />
                            <Route path="pan" element={<PanCardComponent />} />
                            <Route
                                path="payment-cards"
                                element={<PaymentCards />}
                            />
                            <Route path="user-review" element={<Reviews />} />
                            <Route
                                path="profile/deactivate"
                                element={<Deactivate />}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
