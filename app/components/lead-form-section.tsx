"use client"

import {useForm} from "react-hook-form"

type LeadFormInputs = {
    fullName: string
    phone: string
    movingDate: string
    offer: string
}

export default function LeadFormSection() {
    const today = new Date()
    today.setDate(today.getDate() + 1) // minimum tomorrow
    const minDate = today.toISOString().split("T")[0]

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<LeadFormInputs>()

    const onSubmit = async (data: LeadFormInputs) => {

        try {
            // await fetch("https://alasmakhrealestate.com/wp-json/wp/v2/leads", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         Authorization: "Basic " + btoa("lead_qualification:AEAP nNub o3zA UQ9f 7SXU z86M"),
            //     },
            //     body: JSON.stringify({
            //         title: data.phone,
            //         meta: {
            //             fullName: data.fullName,
            //             phone: data.phone,
            //             moving_date: data.movingDate,
            //             offer: data.offer,
            //         },
            //         status: "publish",
            //     }),
            // })

            // await fetch("https://www.alasmakhrealestate.com/wp-json/fluentform/v1/webhook/29", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         Authorization: "Basic " + btoa("lead_qualification:AEAP nNub o3zA UQ9f 7SXU z86M"),
            //     },
            //     body: JSON.stringify({
            //         data: {
            //             fullName: data.fullName,
            //             phone: data.phone,
            //             moving_date: data.movingDate,
            //             offer: data.offer,
            //         }
            //     }),
            // }).then(res => {
            //     reset()
            //     alert("Form submitted successfully!")
            //     return res.json()
            // })

            const formData: LeadFormInputs = {
                fullName: data.fullName,
                phone: data.phone,
                movingDate: data.movingDate,
                offer: data.offer
            }

            // Convert to URL-encoded string
            const formBody = new URLSearchParams(formData).toString()

            // let formData = new URLSearchParams();
            // formData.append('fullName', data.fullName);
            // formData.append('phone', data.phone);
            // formData.append('movingDate', data.movingDate);
            // formData.append('offer', data.offer);

            const res = await fetch("https://alasmakhrealestate.com/wp-json/mcy-lead-plugin/v1/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Basic " + btoa("lead_qualification:AEAP nNub o3zA UQ9f 7SXU z86M"),
                },
                // body: formBody,
                body: JSON.stringify({
                    fullName: data.fullName,
                    phone: data.phone,
                    movingDate: data.movingDate,
                    offer: data.offer
                }),
            })

            console.log(res)
            if (res.status === 200) {
                alert("Form submitted successfully!")
                reset() // React Hook Form reset
            } else {
                alert("Submission failed, try again.")
            }


        } catch (error) {
            console.error(error)
            alert("Something went wrong. Please try again.")
        }
    }

    return (
        <section className="lead-form-wrapper py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Left Column */}
                    <div
                        className="f-form-sec-left lg:w-5/12 bg-[#C7A386] text-white flex flex-col justify-center items-start p-10 md:p-16">
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                            <span className="text-lg md:text-xl font-medium">WE’D LOVE TO</span>
                            <br/>
                            Hear From You
                        </h2>
                        <p className="mt-4 text-sm md:text-base opacity-90">
                            Fill out the form and we’ll get back to you with your personalized offer.
                        </p>
                    </div>

                    {/* Right Column (Form) */}
                    <div className="lg:w-7/12 p-8 md:p-16">
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        {...register("fullName", {required: "Full name is required"})}
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A386]"
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        {...register("phone", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^(?:974)?[0-9]{8}$/,
                                                message:
                                                    "Phone must be 8 digits or start with 974 followed by 8 digits",
                                            },
                                        })}
                                        placeholder="974XXXXXXXX or XXXXXXXX"
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A386]"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm">{errors.phone.message}</p>
                                    )}
                                </div>

                                {/* Moving Date */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Moving Date</label>
                                    <input
                                        type="date"
                                        {...register("movingDate", {
                                            required: "Moving date is required",
                                            validate: (value) =>
                                                new Date(value) >= today || "Date must be at least tomorrow",
                                        })}
                                        min={minDate}
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A386]"
                                    />
                                    {errors.movingDate && (
                                        <p className="text-red-500 text-sm">{errors.movingDate.message}</p>
                                    )}
                                </div>

                                {/* Offer Dropdown */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Offer</label>
                                    <select
                                        {...register("offer", {required: "Please select an offer"})}
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A386]"
                                    >
                                        <option value="">Select offer</option>
                                        <option value="2-months">1 Year Contract – 2 Months Free</option>
                                        <option value="3-months">2 Year Contract – 3 Months Free</option>
                                    </select>
                                    {errors.offer && (
                                        <p className="text-red-500 text-sm">{errors.offer.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="bg-[#C7A386] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#a9876d] transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}