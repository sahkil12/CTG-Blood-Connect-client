import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import { getDonationStatus } from "../../../Utility/donate-date";

dayjs.extend(relativeTime)

const DonorDetailsModal = ({ donor, onClose }) => {
  if (!donor) return null;
  const {
    name,
    gender,
    bloodGroup,
    phone,
    email,
    address,
    profileImage,
    status,
    lastDonateDate,
  } = donor;

  const donationStatus = getDonationStatus(lastDonateDate);
  return (
    <dialog id="donor_modal" className="modal modal-bottom sm:modal-middle" open>
      <div className="modal-box">
        {/* Close */}
        <button
          onClick={onClose}
          className="btn btn-md btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        {/* Profile */}
        <div className="flex flex-col items-center text-center">
          <img
            src={profileImage}
            className="w-24 h-24 rounded-full object-cover mb-3"
          />
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="text-sm text-base-content/70">{gender}</p>

          <span className="font-semibold px-5 py-1 bg-red-100 text-red-600 rounded-md mt-2.5">
            {bloodGroup}
          </span>
        </div>
        {/* Info */}
        <div className="mt-6 space-y-3.5 text-sm">
          <p className="flex items-center gap-2 font-semibold">
            <FaPhoneAlt /> {phone}
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> {email}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> {address}
          </p>
          <div className="flex flex-wrap gap-2.5 mt-2 items-center">
            {/* Last donate badge */}
            Last Donate:{" "}
            <span className="badge badge-outline text-sm font-medium">
               {donationStatus?.lastDonateText}
            </span>
            {/* Eligibility badge */}
            <span
              className={`badge text-[13px] text-black/90 ${donationStatus?.eligible
                ? "badge-success"
                : "badge-error"
                }`}
            >
              {donationStatus?.eligibilityText}
            </span>
          </div>

          <p className="font-medium">
            Status: <span className="capitalize">{status}</span>
          </p>
        </div>
        {/* Action */}
        <div className="modal-action">
          <a href={`tel:${phone}`} className="w-full text-sm sm:text-base bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2">
            <FaPhoneAlt />
            Call Donor
          </a>
        </div>
      </div>
    </dialog>
  );
};

export default DonorDetailsModal;
