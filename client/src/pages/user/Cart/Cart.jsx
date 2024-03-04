import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem.jsx";
import EmptyCart from "./EmptyCart.jsx";
import PriceSidebar from "./PriceSideBar.jsx";
import SeoMetadata from "../../../SEO/SeoMetadata.jsx";
import { useCart } from "../../../context/cart.jsx";
import SaveForLater from "./SaveForLater.jsx";
import ScrollToTopOnRouteChange from "./../../../utils/ScrollToTopOnRouteChange.jsx";

const Cart = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [cartItems, setCartItems, , , saveLaterItems] = useCart();

    // console.log(cartItems);

    const placeOrderHandler = () => {
        navigate("/shipping");
    };

    return (
        <>
            <ScrollToTopOnRouteChange />
            <SeoMetadata title="Shopping Cart | Flipkart.com" />
            <main className="w-full pt-5">
                {/* <!-- row --> */}
                <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto ">
                    {/* <!-- cart column --> */}
                    <div className="flex-1">
                        {/* <!-- cart items container --> */}
                        <div className="flex flex-col shadow bg-white">
                            <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">
                                My Cart ({cartItems?.length})
                            </span>
                            {cartItems?.length === 0 ? (
                                <EmptyCart />
                            ) : (
                                cartItems?.map((item, i) => (
                                    <CartItem
                                        product={item}
                                        inCart={true}
                                        key={i}
                                    />
                                ))
                            )}
                            {/* <!-- place order btn --> */}
                            <div className="flex justify-end sticky bottom-0 left-0 bg-white">
                                <button
                                    onClick={placeOrderHandler}
                                    disabled={
                                        cartItems.length < 1 ? true : false
                                    }
                                    className={`${
                                        cartItems.length < 1
                                            ? "hidden"
                                            : "bg-orange"
                                    } w-full sm:w-1/3 mx-2 sm:mx-6 my-4 py-4 font-medium text-white shadow hover:shadow-lg rounded-sm `}
                                >
                                    PLACE ORDER
                                </button>
                            </div>
                            {/* <!-- place order btn --> */}
                        </div>
                        {/* <!-- cart items container --> */}

                        {/* <!-- saved for later items container --> */}
                        <div className="flex flex-col mt-5 shadow bg-white mb-8">
                            <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">
                                Saved For Later ({saveLaterItems?.length})
                            </span>
                            {saveLaterItems?.map((item, i) => (
                                <SaveForLater product={item} key={i} />
                            ))}
                        </div>
                        {/* <!-- saved for later container --> */}
                    </div>
                    {/* <!-- cart column --> */}

                    <PriceSidebar cartItems={cartItems} />
                </div>
                {/* <!-- row --> */}
            </main>
        </>
    );
};

export default Cart;
