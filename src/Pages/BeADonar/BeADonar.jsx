import { useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import donorAnimation from "../../assets/lottie/Find-Blood-Donor.json";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const BeADonor = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    // Add userId from Firebase
    const donorData = {
      ...data,
      userId: user.uid,
      email: user.email,
    };
    console.log(donorData);

    // try {
    //   const res = await fetch("https://your-backend-url.com/donors", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(donorData),
    //   });

    //   if (!res.ok) throw new Error("Failed to save donor info");

    //   toast.success("You are now registered as a donor!");
    //   reset(); // clear form
    // } catch (error) {
    //   console.error(error);
    //   toast.error("Something went wrong. Try again!");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <section className="bg-base-100 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Form */}
        <div className="bg-white p-6 ">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Become a Donor</h2>
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
            {/* Blood Group */}
            <div className="flex flex-col gap-2">
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
            {/* Phone Number */}
            <div className="flex flex-col gap-2">
               <label className="font-medium text-sm text-gray-700">Your valid Phone number</label>
              <input
                type="text"
                placeholder="Phone Number *"
                className="input border-2 py-5 lg:py-6 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-400"
                {...register("phone", { required: true, pattern: /^[0-9]{10,14}$/ })}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">Valid phone number required</p>}
            </div>
            {/* Area */}
            <div className="flex flex-col gap-2">
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
            {/* Submit */}
            <button
              type="submit"
              className={`bg-red-400 text-white w-full py-2.5 font-semibold rounded-sm mt-4 ${loading ? "loading" : ""}`}
            >
              {loading ? "Submitting..." : "Register as Donor"}
            </button>
          </form>
        </div>
        {/* Right: Animation */}
        <div className="hidden lg:flex justify-end">
          <Lottie className="max-w-lg 2xl:max-w-xl" animationData={donorAnimation} loop={true} />
        </div>

      </div>
    </section>
  );
};

export default BeADonor;
