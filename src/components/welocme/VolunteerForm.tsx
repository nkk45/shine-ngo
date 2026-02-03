const VolunteerForm = () => {
  return (
    <form className="space-y-4">
      <input
        className="w-full border rounded-lg px-4 py-2"
        placeholder="Full Name"
      />
      <input
        className="w-full border rounded-lg px-4 py-2"
        placeholder="Email"
      />
      <input
        className="w-full border rounded-lg px-4 py-2"
        placeholder="Phone Number"
      />
      <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold">
        Submit
      </button>
    </form>
  );
};

export default VolunteerForm;
