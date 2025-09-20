"use client"

import {useForm} from "react-hook-form"

type LeadFormInputs = {
    fullName: string
    phone: string
    movingDate: string
    offer: string
}

export default function LeadForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LeadFormInputs>()

    const today = new Date()
    today.setDate(today.getDate() + 1) // minimum tomorrow
    const minDate = today.toISOString().split("T")[0]

    const onSubmit = async (data: LeadFormInputs) => {
        console.log("Lead submitted:", data)
        await fetch("https://alasmakhrealestate.com/wp-json/wp/v2/leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Basic " + btoa("lead_qualification:Lead0000"),
            },
            body: JSON.stringify({
                title: data.phone, // will be the lead's "post title"
                fields: {
                    fullName: data.fullName,
                    phone: data.phone,
                    moving_date: data.movingDate,
                    offer: data.offer
                },
                status: "publish",
            }),
        });

    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
        >
            {/* Full Name */}
            <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                    type="text"
                    {...register("fullName", {required: "Full name is required"})}
                    className="w-full border rounded-md p-2"
                />
                {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                )}
            </div>

            {/* Phone */}
            <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                    type="tel"
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^(?:974)?[0-9]{8}$/,
                            message:
                                "Phone must be either 8 digits or start with 974 followed by 8 digits",
                        },
                    })}
                    placeholder="974XXXXXXXX or XXXXXXXX"
                    className="w-full border rounded-md p-2"
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
            </div>

            {/* Moving Date */}
            <div>
                <label className="block mb-1 font-medium">Moving Date</label>
                <input
                    type="date"
                    {...register("movingDate", {
                        required: "Moving date is required",
                        validate: (value) =>
                            new Date(value) >= today || "Date must be at least tomorrow",
                    })}
                    min={minDate}
                    className="w-full border rounded-md p-2"
                />
                {errors.movingDate && (
                    <p className="text-red-500 text-sm">{errors.movingDate.message}</p>
                )}
            </div>

            {/* Offer Dropdown */}
            <div>
                <label className="block mb-1 font-medium">Offer</label>
                <select
                    {...register("offer", {required: "Please select an offer"})}
                    className="w-full border rounded-md p-2"
                >
                    <option value="">Select offer</option>
                    <option value="1-year">1 YEAR - 2 Months Free</option>
                    <option value="2-years">2 YEARS - 3 Months Free</option>
                </select>
                {errors.offer && (
                    <p className="text-red-500 text-sm">{errors.offer.message}</p>
                )}
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="bg-[#C7A386] text-white py-2 rounded-md font-medium hover:bg-[#b38b70] transition"
            >
                Submit
            </button>
        </form>
    )
}
