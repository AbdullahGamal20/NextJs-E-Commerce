import { CartContext } from "@/app/_context/CartContext";
import { useUser } from "@clerk/nextjs";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import orderApis from "../../_utils/orderApis";
import CartApis from "@/app/_utils/CartApis";
const CheckoutForm = ({ amount }) => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    createOrder_();
    sendEmail();
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    // Fetch the client secret from your API
    const res = await fetch("/api/create-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount }),
    });

    // Extract the client secret
    const { client_secret } = await res.json(); // Make sure it's `client_secret`

    // Confirm payment with the client_secret string
    const result = await stripe.confirmPayment({
      elements,
      clientSecret: client_secret, // Pass only the string
      confirmParams: {
        return_url: "http://localhost:3005/payment-confirmed",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  const createOrder_ = () => {
    let productsId = [];
    cart.forEach((i) => {
      productsId.push(i?.product?.id);
    });
    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        amount,
        products: productsId,
      },
    };
    orderApis.createOrder(data).then((res) => {
      if (res) {
        cart.forEach((i) => {
          CartApis.DeleteCartItem(i?.id).then((result) => {});
        });
      }
    });
  };

  const sendEmail = async () => {
    const res = await fetch("/api/send-email", {
      method: "POST",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-32 md:mx-[320px] mt-16">
        <PaymentElement />
        <div className="flex justify-center">
          <button
            disabled={!stripe}
            className="bg-primary text-white pt-2 pb-2 px-8 rounded-md mt-6 w-72"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
