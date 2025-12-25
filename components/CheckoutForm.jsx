"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const CheckoutForm = ({ booking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const price = booking?.totalCost || 0;

  // 1️⃣ Create PaymentIntent on server
  useEffect(() => {
    if (price > 0) {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId: booking._id, amount: price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
        .catch((err) => console.error("PaymentIntent error:", err));
    }
  }, [price, booking._id]);

  // 2️⃣ Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setLoading(true);
    setError("");

    // 2a. Create Payment Method
    const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        email: booking?.userEmail || "anonymous@example.com",
        name: booking?.userName || "Anonymous",
      },
    });

    if (pmError) {
      setError(pmError.message);
      setLoading(false);
      return;
    }

    // 2b. Confirm Card Payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (confirmError) {
      setError(confirmError.message);
      setLoading(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      // 2c. Update booking status in backend
      try {
        const paymentInfo = { status: "Paid", transactionId: paymentIntent.id };
        const res = await fetch(`/api/bookings/${booking._id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(paymentInfo),
        });
        const data = await res.json();

        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: `Transaction ID: ${paymentIntent.id}`,
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          router.push("/payment/success?session_id=" + paymentIntent.id);
        });
      } catch (err) {
        console.error("Booking update error:", err);
        setError("Payment succeeded but failed to update booking.");
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": { color: "#aab7c4" },
            },
            invalid: { color: "#9e2146" },
          },
        }}
      />

      <button
        type="submit"
        className="btn btn-primary btn-sm mt-4 w-full"
        disabled={!stripe || !clientSecret || loading}
      >
        {loading ? "Processing..." : `Pay $${price}`}
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}
      {transactionId && <p className="text-green-600 mt-2">Transaction ID: {transactionId}</p>}
    </form>
  );
};

export default CheckoutForm;
