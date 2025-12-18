import { FaPhoneAlt, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";

const DonorCard = ({ donor, setSelectedDonor }) => {
  const {
    name,
    bloodGroup,
    area,
    phone,
    profileImage,
    status,
    available,
  } = donor;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 sm:p-5 flex flex-col justify-between">
      
      {/* Top */}
      <div className="flex items-center gap-4">
        <img
          src={profileImage}
          alt={name}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
            <FaMapMarkerAlt />
            {area}
          </p>
        </div>

        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-50 flex items-center justify-center">
          <span className="text-xl font-bold text-red-600">
            {bloodGroup}
          </span>
        </div>
      </div>

      {/* Phone */}
      <div className="mt-3 text-sm flex items-center gap-2 text-gray-600">
        <FaPhoneAlt />
        {phone}
      </div>
      {/* Status */}
      <div className="mt-4">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            available
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Actions */}
      <div className="mt-5 flex gap-1.5 sm:gap-3">
        <a
          href={`tel:${phone}`}
          className="flex-1 sm:flex-2 text-sm sm:text-base bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2"
        >
          <FaPhoneAlt />
          Call
        </a>

        <button
          onClick={() => setSelectedDonor(donor)}
          className="flex-1 text-xs sm:text-base border border-gray-300 hover:bg-gray-100 font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2"
        >
          <FaInfoCircle />
          Details
        </button>
      </div>
    </div>
  );
};

export default DonorCard;
