const PartnerForm = () => {
  return (
    <form className="space-y-4">
      <input
        className="w-full border rounded-lg px-4 py-2"
        placeholder="Organization Name"
      />
      <input
        className="w-full border rounded-lg px-4 py-2"
        placeholder="Contact Email"
      />
      <textarea
        className="w-full border rounded-lg px-4 py-2"
        placeholder="Partnership Details"
        rows={4}
      />
      <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold">
        Submit
      </button>
    </form>
  );
};

export default PartnerForm;
