import dayjs from "dayjs";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProfileCard = ({ donor, onDelete, setIsEditOpen }) => {
  const {
    name,
    gender,
    address,
    profileImage,
    bloodGroup,
    area,
    phone,
    email,
    lastDonateDate,
    status,
    role,
    age
  } = donor;

  return (
    <div className="bg-gray-100 rounded-2xl shadow-lg border border-gray-300 p-8 lg:p-10">
      {/* top */}
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        <img
          src={profileImage}
          alt={name}
          className="w-48 h-48 rounded-full object-cover border-4 p-1 border-red-300"
        />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-xl sm:text-2xl font-bold">{name}</h3>
            <span className={`px-3 py-1 text-xs rounded-full border capitalize ${role === 'admin' ? 'bg-emerald-100 border-emerald-200 text-emerald-700' : 'bg-red-100 border-red-200 text-red-700'}`}>
              {role}
            </span>
          </div>
          {/* email */}
          <p className="text-gray-500 mt-2">{email}</p>
          {/*  */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-[15px]">
            <p><strong>Blood Group:</strong><span className="text-red-600 font-bold"> {bloodGroup}</span></p>
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
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Age:</strong> <span className="font-medium">{age}</span></p>
          </div>
        </div>
      </div>
      {/* actions */}
      <div className="mt-10 flex gap-4 justify-center md:justify-start">
        <button
          onClick={()=> setIsEditOpen(true)}
          className="btn bg-neutral-200 border border-gray-300 flex items-center gap-2"
        >
          <FaEdit /> Edit Profile
        </button>
        {/* delete profile */}
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
