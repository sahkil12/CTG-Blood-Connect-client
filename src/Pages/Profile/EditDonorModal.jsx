import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import { bloodGroups, genders, areas } from "../../Utility/blood-info";

const image_hosting_key = import.meta.env.VITE_IMGBB_KEY;
const image_upload_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditDonorModal = ({ donor, closeModal, refetch }) => {
     const axiosPublic = useAxios();
     const [uploading, setUploading] = useState(false);

     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({
          defaultValues: {
               name: donor.name,
               gender: donor.gender,
               bloodGroup: donor.bloodGroup,
               phone: donor.phone,
               area: donor.area,
               lastDonateDate: donor.lastDonateDate
                    ? donor.lastDonateDate.split("T")[0]
                    : "",
               address: donor.address,
          },
     });

     const onSubmit = async (data) => {
          try {
               let imageUrl = donor.profileImage;

               if (data.profileImage?.[0]) {
                    setUploading(true);
                    const formData = new FormData();
                    formData.append("image", data.profileImage[0]);

                    const res = await fetch(image_upload_url, {
                         method: "POST",
                         body: formData,
                    });

                    const imgData = await res.json();
                    imageUrl = imgData?.data?.url;
                    setUploading(false);
               }

               const updatedDonor = {
                    name: data.name,
                    gender: data.gender,
                    bloodGroup: data.bloodGroup,
                    phone: data.phone,
                    area: data.area,
                    lastDonateDate: data.lastDonateDate || null,
                    address: data.address,
                    profileImage: imageUrl,
               };
               // await axiosPublic.patch(`/donors/${donor.email}`, updatedDonor);

               toast.success("Profile updated successfully");
               refetch();
               closeModal();
          } catch {
               toast.error("Failed to update profile");
          }
     };

     return (
          <dialog className="modal modal-open">
               <div className="modal-box max-w-2xl p-3.5 sm:p-5 rounded-md">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                         Edit Donor Profile
                    </h3>
                    <p className="text-gray-600 mb-7 text-sm">
                         Update your donor information carefully
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                         {/* Name */}
                         <div>
                              <input
                                   placeholder="Full Name"
                                   className={`input border-2 py-5 px-4 text-base w-full outline-none
                                ${errors.name ? "border-red-400" : "border-gray-300"}
                                   focus:border-gray-400`}
                                   {...register("name", { required: true, minLength: 5 })}
                              />
                              {errors.name && (
                                   <p className="text-red-500 text-sm mt-1">
                                        Name must be at least 5 characters
                                   </p>
                              )}
                         </div>
                         {/* Gender + Blood */}
                         <div className="flex flex-col md:flex-row gap-4">
                              <div className="flex-1">
                                   <select
                                        {...register("gender", { required: true })}
                                        className={`select select-lg border-2 px-4 text-base w-full outline-none
                                          ${errors.gender ? "border-red-400" : "border-gray-300"}
                                                   focus:border-gray-400`}
                                   >
                                        <option value="">Select Gender</option>
                                        {genders.map((g) => (
                                             <option key={g}>{g}</option>
                                        ))}
                                   </select>
                                   {errors.gender && (
                                        <p className="text-red-500 text-sm mt-1">
                                             Gender is required
                                        </p>
                                   )}
                              </div>
                              <div className="flex-1">
                                   <select
                                        {...register("bloodGroup", { required: true })}
                                        className={`select select-lg border-2 px-4 text-base w-full outline-none
                  ${errors.bloodGroup ? "border-red-400" : "border-gray-300"}
                  focus:border-gray-400`}
                                   >
                                        <option value="">Blood Group</option>
                                        {bloodGroups.map((b) => (
                                             <option key={b}>{b}</option>
                                        ))}
                                   </select>
                                   {errors.bloodGroup && (
                                        <p className="text-red-500 text-sm mt-1">
                                             Blood group is required
                                        </p>
                                   )}
                              </div>
                         </div>
                         {/* Phone */}
                         <div>
                              <input
                                   placeholder="Phone Number"
                                   className={`input border-2 py-5 px-4 text-base w-full outline-none
                ${errors.phone ? "border-red-400" : "border-gray-300"}
                focus:border-gray-400`}
                                   {...register("phone", { required: true })}
                              />
                              {errors.phone && (
                                   <p className="text-red-500 text-sm mt-1">
                                        Valid phone number required
                                   </p>
                              )}
                         </div>
                         {/* Area + Date */}
                         <div className="flex flex-col md:flex-row gap-4">
                              <div className="flex-1">
                                   <select
                                        {...register("area", { required: true })}
                                        className={`select select-lg border-2 px-4 text-base w-full outline-none
                  ${errors.area ? "border-red-400" : "border-gray-300"}
                  focus:border-gray-400`}
                                   >
                                        <option value="">Select Area</option>
                                        {areas.map((a) => (
                                             <option key={a}>{a}</option>
                                        ))}
                                   </select>
                                   {errors.area && (
                                        <p className="text-red-500 text-sm mt-1">
                                             Area is required
                                        </p>
                                   )}
                              </div>
                              <div className="flex-1">
                                   <input
                                        type="date"
                                        className="input border-2 py-5 px-4 text-base border-gray-300 w-full outline-none focus:border-gray-400"
                                        {...register("lastDonateDate")}
                                   />
                              </div>
                         </div>
                         {/* Image */}
                         <div>
                              <div
                                   className={`border-2 p-1 border-dashed
                ${errors.profileImage ? "border-red-300" : "border-red-200"}`}
                              >
                                   <input
                                        type="file"
                                        className="file-input border-none w-full outline-none"
                                        {...register("profileImage")}
                                   />
                              </div>
                              {errors.profileImage && (
                                   <p className="text-red-500 text-sm mt-1">
                                        Please upload an image
                                   </p>
                              )}
                         </div>
                         {/* Address */}
                         <div>
                              <textarea
                                   placeholder="Full Address"
                                   className={`textarea border-2 text-base w-full outline-none
                ${errors.address ? "border-red-400" : "border-gray-300"}
                focus:border-gray-400`}
                                   {...register("address")}
                              />
                         </div>
                         {/* Actions */}
                         <div className="flex justify-end gap-3 pt-3">
                              <button
                                   type="button"
                                   onClick={closeModal}
                                   className="btn btn-ghost outline outline-gray-200"
                              >
                                   Cancel
                              </button>
                              <button
                                   type="submit"
                                   disabled={uploading}
                                   className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 font-semibold rounded-sm transition"
                              >
                                   {uploading ? <span className="loading loading-dots loading-md"></span> : "Update Profile"}
                              </button>
                         </div>
                    </form>
               </div>
          </dialog>
     );
};

export default EditDonorModal;
