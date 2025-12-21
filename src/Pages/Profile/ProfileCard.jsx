import dayjs from "dayjs";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProfileCard = ({ donor, onEdit, onDelete }) => {
  const {
    name,
    profileImage,
    bloodGroup,
    area,
    phone,
    email,
    lastDonateDate,
    status,
    role,
  } = donor;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
      {/* top */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={profileImage}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-red-200"
        />

        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold">{name}</h3>
            <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600 capitalize">
              {role}
            </span>
          </div>

          <p className="text-gray-500 mt-1">{email}</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <p><strong>Blood Group:</strong> {bloodGroup}</p>
            <p><strong>Area:</strong> {area}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span className={status === "available" ? "text-green-600" : "text-red-500"}>
                {status}
              </span>
            </p>
            <p>
              <strong>Last Donate:</strong>{" "}
              {lastDonateDate
                ? dayjs(lastDonateDate).format("DD MMM YYYY")
                : "Not yet"}
            </p>
          </div>
        </div>
      </div>

      {/* actions */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={onEdit}
          className="btn bg-neutral-200 flex items-center gap-2"
        >
          <FaEdit /> Edit Profile
        </button>

        <button
          onClick={onDelete}
          className="btn bg-red-400 text-white flex items-center gap-2"
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
