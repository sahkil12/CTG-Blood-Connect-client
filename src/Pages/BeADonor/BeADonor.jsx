import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Lottie from "lottie-react";
import donorAnimation from "../../assets/lottie/Find-Blood-Donor.json";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";

const image_hosting_key = import.meta.env.VITE_IMGBB_KEY
const image_upload_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BeADonor = () => {
  const { user } = useAuth();
  const axiosPublic = useAxios()
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate()

  const onSubmit = async (data) => {

    try {
      if (!user) {
        toast.error("Please login first");
        navigate('/login')
        return;
      }
      let imageUrl = "";

      // upload image to imgbb
      if (data.profileImage[0]) {
        setUploading(true);
        const formData = new FormData();
        formData.append("image", data.profileImage[0]);
        // image post in imgbb
        const res = await fetch(image_upload_url, {
          method: "POST",
          body: formData,
        });

        const imgData = await res.json();
        imageUrl = imgData?.data?.display_url;
        setUploading(false);
      }
      // Add userId from Firebase
      const donorData = {
        name: data.name,
        gender: data.gender,
        bloodGroup: data.bloodGroup,
        phone: data.phone,
        area: data.area,
        lastDonateDate: data.lastDonateDate || null,
        address: data.address,
        profileImage: imageUrl,
        email: user.email,
        status: "available",
        createdAt: new Date().toISOString(),
      };

      const res = await axiosPublic.post('/donors', donorData)
      if (res.data.insertedId) {
        toast.success("Donor registered successfully");
        reset();
        navigate("/");
      }
    }
    catch (error) {
      if (error.response?.status === 409) {
        toast.error(error.response.data.message);
        reset()
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }

  };

  return (
    <section className="bg-base-100 py-10">
      <div className=" mx-auto px-4 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        {/* Left: Form */}
        <div className="bg-white p-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Become a Donor</h2>
          <p className="text-gray-600 mb-6">
            Fill in your details to help people in your city
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-gray-700">Your Full Name</label>
              <input
                type="text"
                placeholder="Full Name "
                className="input border-2 py-5 lg:py-6 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-400"
                {...register("name", { required: true, minLength: 5 })}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Name must be at least 5 characters</p>}
            </div>
            {/* 2 column filed */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Gender */}
              <div className="flex-1 flex-col gap-2">
                <label className="font-medium text-sm text-gray-700">Select Gender</label>
                <select
                  className="select select-lg border-2 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-400"
                  {...register("gender", { required: true })}
                >
                  <option value="">Select Gender *</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">
                    Gender is required
                  </p>
                )}
              </div>
              {/* Blood Group */}
              <div className="flex-1 flex-col gap-2">
                <label className="font-medium text-sm text-gray-700">Select Your Blood Group</label>
                <select
                  className="select select-lg border-2 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-400"
                  {...register("bloodGroup", { required: true })}
                >
                  <option value="">Select Blood Group *</option>
                  <option>A+</option><option>A-</option>
                  <option>B+</option><option>B-</option>
                  <option>AB+</option><option>AB-</option>
                  <option>O+</option><option>O-</option>
                </select>
                {errors.bloodGroup && <p className="text-red-500 text-sm mt-1">Blood Group is required</p>}
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-gray-700">Your valid Phone number</label>
              <input
                type="number"
                placeholder="Phone Number *"
                className="input border-2 py-5 lg:py-6 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-400"
                {...register("phone", { required: true, pattern: /^[0-9]{10,14}$/ })}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">Valid phone number required</p>}
            </div>
            {/* 2 column */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Area */}
              <div className="flex-1 flex-col gap-2">
                <label className="font-medium text-sm text-gray-700">Select Your Area</label>
                <select
                  className="select select-lg border-2 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-400"
                  {...register("area", { required: true })}
                >
                  <option value="">Select Area </option>
                  <option>Anwara</option>
                  <option>Banshkhali</option>
                  <option>Boalkhali</option>
                  <option>Chandanaish</option>
                  <option>Fatikchhari</option>
                  <option>Hathazari</option>
                  <option>Lohagara</option>
                  <option>Mirsharai</option>
                  <option>Patiya</option>
                  <option>Rangunia</option>
                  <option>Raozan</option>
                  <option>Sandwip</option>
                  <option>Satkania</option>
                  <option>Sitakunda</option>
                  <option>Karnaphuli</option>
                </select>
                {errors.area && <p className="text-red-500 text-sm mt-1">Area is required</p>}
              </div>
              {/* Last Donate Date */}
              <div className="flex-1 flex-col gap-2">
                <label className="font-medium text-sm text-gray-700">Last Donate Date</label>
                <input
                  type="date"
                  className="input border-2 py-5 lg:py-6 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-400"
                  {...register("lastDonateDate")}
                />
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-gray-700">Upload Your Image</label>
              <div className="border-2 p-1 border-dashed border-red-200 w-full outline-none focus:border-gray-400">
                <input
                  type="file"
                  accept="image/*"
                  className="file-input border-none w-full outline-none"
                  {...register("profileImage")}
                />
              </div>
            </div>
            {/* Address */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-gray-700">Your Full Address</label>
              <textarea
                placeholder="Full Address..."
                className="textarea border-2 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-400"
                {...register("address")}
              />
            </div>
            {/* Submit */}
            <button
              type="submit"
              className={`bg-red-400 text-white w-full py-2.5 font-semibold rounded-sm mt-4 `}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Register as Donor"}
            </button>
          </form>
        </div>
        {/* Right: Animation */}
        <div className="hidden lg:flex justify-end">
          <Lottie className="max-w-lg 2xl:max-w-2xl" animationData={donorAnimation} loop={true} />
        </div>

      </div>
    </section>
  );
};

export default BeADonor;
