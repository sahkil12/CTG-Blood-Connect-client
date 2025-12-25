import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { bloodGroups, genders, areas } from "../../Utility/blood-info";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMGBB_KEY;
const image_upload_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditDonorModal = ({ donor, closeModal }) => {
     const axiosSecure = useAxiosSecure()
     const [uploading, setUploading] = useState(false);
     const queryClient = useQueryClient();

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
               age: donor.age
          },
     });
     // update mutation
     const updateMutation = useMutation({
          mutationFn: (updatedDonor) => axiosSecure.patch(`/donors/${donor.email}`, updatedDonor),
          onSuccess: () => {
               queryClient.invalidateQueries(["donor-profile", donor.email]);
               toast.success("Profile updated successfully");
               // refetch();
               closeModal();
          },
          onError: () => toast.error("Failed to update profile"),
     });

     const onSubmit = async (data) => {
          setUploading(true);
          try {
               let imageUrl = donor.profileImage;

               if (data.profileImage?.[0]) {

                    const formData = new FormData();
                    formData.append("image", data.profileImage[0]);

                    const res = await fetch(image_upload_url, {
                         method: "POST",
                         body: formData,
                    });

                    const imgData = await res.json();
                    if (!imgData?.success) {
                         throw new Error("Image upload failed");
                    }

                    imageUrl = imgData?.data.url;
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
                    age: data.age
               };
               // mutation function call
               updateMutation.mutate(updatedDonor);
          } catch {
               toast.error("Failed to update profile");
          }
          finally {
               setUploading(false);
          }
     };

     return (
          <dialog className="modal modal-open">
               <div className="modal-box max-w-2xl p-3.5 sm:p-5 rounded-md">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                         Edit Donor Profile
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm">
                         Update your donor information carefully
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                         {/* Name */}
                         <div>
                              <input
                                   placeholder="Full Name"
                                   className={`input border-2 py-4 md:py-5 px-4 text-base w-full outline-none
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
                                        className={`select select-md md:select-lg border-2 px-4 text-base w-full outline-none
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
                                        className={`select select-md md:select-lg border-2 px-4 text-base w-full outline-none
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
                         {/* phone + age  */}
                         <div className="flex flex-col md:flex-row gap-4">
                              {/* Phone */}
                              <div className="flex-1">
                                   <input
                                        placeholder="Phone Number"
                                        className={`input border-2 py-4 md:py-5 px-4 text-base w-full outline-none
                                               ${errors.phone ? "border-red-400" : "border-gray-300"}
                                               focus:border-gray-400`}
                                        {...register("phone", {
                                             required: true,
                                             pattern: /^(?:\+8801|01)[3-9]\d{8}$/
                                        })}
                                   />
                                   {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1">
                                             Valid phone number required
                                        </p>
                                   )}
                              </div>
                              {/* Age */}
                              <div className="flex-1">
                                   <input
                                        type="number"
                                        placeholder="Your Age"
                                        className={`input border-2 py-4 md:py-5 px-4 text-base w-full outline-none
                                               ${errors.age ? "border-red-400" : "border-gray-300"}
                                               focus:border-gray-400`}
                                        {...register("age",
                                             {
                                                  required: true,
                                                  min: 18
                                             })}
                                   />
                                   {errors.age && (
                                        <p className="text-red-500 text-sm mt-1">
                                             Donor Age Must be 18+
                                        </p>
                                   )}
                              </div>
                         </div>
                         {/* Area + Date */}
                         <div className="flex flex-col md:flex-row gap-4">
                              <div className="flex-1">
                                   <select
                                        {...register("area", { required: true })}
                                        className={`select select-md md:select-lg border-2 px-4 text-base w-full outline-none
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
                                        className="input border-2 py-4 md:py-5 px-4 text-base border-gray-300 w-full outline-none focus:border-gray-400"
                                        {...register("lastDonateDate")}
                                   />
                              </div>
                         </div>
                         {/* Image */}
                         <div>
                              <div
                                   className={`border-2 p-0 md:p-1 border-dashed
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
                         <div className="flex justify-end gap-3 pt-2">
                              <button
                                   type="button"
                                   onClick={closeModal}
                                   className="py-2 border rounded-sm font-semibold border-gray-300 px-6 text-xs md:text-sm btn-ghost cursor-pointer"
                              >
                                   Cancel
                              </button>
                              <button
                                   type="submit"
                                   disabled={uploading}
                                   className="bg-red-400 hover:bg-red-500/80 text-white px-6 py-2 font-semibold rounded-sm cursor-pointer transition text-xs md:text-sm"
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
