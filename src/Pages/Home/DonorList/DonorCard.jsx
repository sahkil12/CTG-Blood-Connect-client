import { FaPhoneAlt } from "react-icons/fa";

const DonorCard = ({ donor }) => {
  const { name, bloodGroup, area, phone } = donor;

  return (
    <div className="bg-white rounded-xl border border-neutral-300 shadow-md p-7 flex flex-col justify-between">
      {/* Blood Group */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl font-bold text-red-600">
          {bloodGroup}
        </span>
        <span className="badge badge-outline text-gray-600">
          Available
        </span>
      </div>

      {/* Donor Info */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900">
          {name}
        </h3>
        <p className="text-gray-600 mt-1">
          Area: {area}
        </p>
        <p className="text-gray-600 mt-1">
          Phone: {phone}
        </p>
      </div>
      {/* Call Button */}
      <a
        href={`tel:${phone}`}
        className="btn btn-primary mt-6 flex items-center gap-2"
      >
        <FaPhoneAlt />
        Call Now
      </a>
    </div>
  );
};

export default DonorCard;
