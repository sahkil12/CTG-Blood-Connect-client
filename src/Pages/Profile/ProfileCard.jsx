const ProfileCard = ({ donor }) => {
  return (
    <div className="bg-white border rounded-xl shadow-md p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Left */}
      <div className="text-center">
        <img
          src={donor.profileImage}
          alt={donor.name}
          className="w-40 h-40 mx-auto rounded-full object-cover"
        />
        <h3 className="text-xl font-semibold mt-4">{donor.name}</h3>
        <p className="text-sm text-gray-500">{donor.bloodGroup}</p>
        <span className="inline-block mt-2 px-4 py-1 text-sm rounded-full bg-green-100 text-green-700">
          {donor.status}
        </span>
      </div>

      {/* Right */}
      <div className="md:col-span-2 space-y-3">
        <p><strong>Email:</strong> {donor.email}</p>
        <p><strong>Phone:</strong> {donor.phone}</p>
        <p><strong>Gender:</strong> {donor.gender}</p>
        <p><strong>Area:</strong> {donor.area}</p>
        <p><strong>Address:</strong> {donor.address}</p>
        <p>
          <strong>Last Donate:</strong>{" "}
          {donor.lastDonateDate || "Not yet"}
        </p>
      </div>

    </div>
  );
};

export default ProfileCard;
