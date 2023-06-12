import React from "react";
import UseAuth from "../../../hooks/UseAuth";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/Sectiontitle/SectionTitle";

const img_hosting_token = import.meta.env.Vite_Image_Upload_Token
const AddClass = () => {
  const { user } = UseAuth();
  const img_hosting_url =  `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData
    formData.append('image',data.image[0])
    fetch(img_hosting_url,{
        method:'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imageResponse => {
        if(imageResponse.succes){
            const imgURL = imageResponse.data.display_url
            const{musicClass,instructorName,price,email,availableSeat} = data
            const newitem = {musicClass,instructorName,price: parseFloat(price),email,availableSeat: parseFloat(availableSeat),image:imgURL}
            console.log(newitem)
        }
    })
  }
  return (
    <div className="mt-4">
      <SectionTitle subHeading={"Add class"}></SectionTitle>
      <div className="card card-body bg-base-300 text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="gap-3">
            <label className="label">
              <span className="label-text font-bold">Music Class:</span>
            </label>
            <input
              placeholder="Music-class"
              type="text"
              {...register("musicClass")}
            />
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Music Picture</span>
              </label>
              <input
                type="file" {...register("image")}
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <label className="label">
              <span className="label-text font-bold">Instructor Name:</span>
            </label>
            <input
              value={user?.displayName}
              type="text"
              placeholder="Instructor-Name"
              {...register("instructorName")}
            />
          </div>
          <div className="gap-3 mt-3">
            <label className="label">
              <span className="label-text font-bold">Price:</span>
            </label>
            <input placeholder="Price" {...register("price")} />
          </div>
          <div className="gap-3 mt-3">
            <label className="label">
              <span className="label-text font-bold">Instructor Email:</span>
            </label>
            <input
              value={user?.email}
              type="email"
              placeholder="Seller Email"
              {...register("email")}
            />
          </div>
          <div className="gap-3 mt-3">
            <label className="label">
              <span className="label-text font-bold">Available Seats:</span>
            </label>
            <input
              placeholder="Available-Seat"
              {...register("availableSeat")}
            />
          </div>
          <input className="mt-4 btn" type="submit" value="Add Class" />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
