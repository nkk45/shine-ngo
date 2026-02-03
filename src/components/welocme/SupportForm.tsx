import Razorpay from "../razorpay/Razorpay";

const SupportForm = () => {
  return (
    <form className="space-y-4">
      <input
        className="w-full border rounded-lg px-4 py-2"
        placeholder="Your Name"
      />
      <input
        className="w-full border rounded-lg px-4 py-2"
        placeholder="Donation Amount (₹)"
      />
       <Razorpay />
    </form>
  );
};

export default SupportForm;
