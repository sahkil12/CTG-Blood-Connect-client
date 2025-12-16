import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Lottie from "lottie-react";
import donorAnimation from "../../assets/lottie/blood-donor.json";
import toast from "react-hot-toast";

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

    try {
      const res = await fetch("https://your-backend-url.com/donors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donorData),
      });

      if (!res.ok) throw new Error("Failed to save donor info");

      toast.success("You are now registered as a donor!");
      reset(); // clear form
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-base-100 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left: Form */}
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a Donor</h2>
          <p className="text-gray-600 mb-6">
            Fill in your details to help people in your city
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name *"
                className="input input-bordered w-full"
                {...register("name", { required: true, minLength: 5 })}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Name must be at least 5 characters</p>}
            </div>

            {/* Blood Group */}
            <div>
              <select
                className="select select-bordered w-full"
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
            <div>
              <input
                type="text"
                placeholder="Phone Number *"
                className="input input-bordered w-full"
                {...register("phone", { required: true, pattern: /^[0-9]{10,14}$/ })}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">Valid phone number required</p>}
            </div>

            {/* Area */}
            <div>
              <select
                className="select select-bordered w-full"
                {...register("area", { required: true })}
              >
                <option value="">Select Area *</option>
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
              className={`btn btn-primary w-full py-3 mt-4 ${loading ? "loading" : ""}`}
            >
              {loading ? "Submitting..." : "Register as Donor"}
            </button>
          </form>
        </div>

        {/* Right: Animation */}
        <div className="hidden lg:block">
          <Lottie animationData={donorAnimation} loop={true} />
        </div>

      </div>
    </section>
  );
};

export default BeADonor;
