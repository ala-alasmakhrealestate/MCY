"use client"

import {useForm} from "react-hook-form"
import {useTranslations} from "next-intl";
import {Slide, toast, ToastContainer} from 'react-toastify';
import {useState} from "react";

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
    const t = useTranslations("HomePage.leadFormSection");
    const common = useTranslations("Common");

    const [formData, setFormData] = useState({
        fullName: "",
        movingDate: "",
        offer: "",
        phone: "",
        // agree: false,
    });

    const [errors, setErrors] = useState<{
        fullName: string,
        offer: string,
        movingDate: string,
        phone: string
    }>({
        fullName: "",
        movingDate: "",
        offer: "",
        phone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors: {
            fullName: string,
            offer: string,
            movingDate: string,
            phone: string
        } = {
            fullName: "",
            offer: "",
            movingDate: "",
            phone: ""
        };

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Name is required";

        }
        // if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.offer.trim()) newErrors.offer = "Offer is required";
        if (!formData.movingDate.trim()) newErrors.movingDate = "Moving date is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        // if (!formData.message.trim()) newErrors.message = "Message is required";
        // if (!formData.agree) newErrors.agree = "You must agree to save your information";

        setErrors(newErrors);

        return Object.values(newErrors).map(item => {
                if (item.length > 0)
                    return false
            }
        )
        return true
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate()) return;

        fetch("/api/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
            .then(() => {
                toast.success('Thanks for registering, we will contact you soon!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
            })
            .catch(() => {
                toast.error('Please try again later!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
                alert("Please try again later!");
            });
    };

    return (
        <section className="py-0 bg-gray-100">
            <div className="w-screen mx-auto px-4">
                <div className="flex flex-col lg:flex-row bg-white rounded-none shadow-xl overflow-hidden">
                    {/* Left Column */}
                    <div
                        className="f-form-sec-left lg:w-5/12 bg-[#04264d] text-white flex flex-col justify-center items-start p-10 md:p-16">
                        <h2 className="text-3xl md:text-4xl font-avenirHeavy leading-snug">
                            <span className="text-lg md:text-xl font-avenirMedium">{t("firstSentence")}</span>
                            <br/>
                            {t("secondSentence")}
                        </h2>
                        <p className="mt-4 text-sm font-avenirLight md:text-base opacity-90">
                            {t("descriptionSentence")}
                        </p>
                        <p className="mt-4 text-sm font-avenirLight md:text-base opacity-90">
                            Offer Validity: Until December 31, 2025
                        </p>
                        {/*<p className="mt-4 text-sm font-avenirLight md:text-base opacity-90">*/}
                        {/*    {t("callCenter")}:*/}
                        {/*    <a href={"tel:+97440410888"} className={"rtl:hidden"}>+974 4041 0888</a>*/}
                        {/*    <a href={"tel:+97440410888"} className={"ltr:hidden"}>0888 4041 974+</a>*/}
                        {/*</p>*/}
                    </div>

                    {/* Right Column (Form) */}
                    <div className="lg:w-7/12 p-8 md:p-16">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div>
                                    {/*<label className="block text-gray-700 font-avenirMedium mb-2">Full Name</label>*/}
                                    <input
                                        type="text"
                                        value={formData.fullName}
                                        name="fullName"
                                        onChange={handleChange}
                                        placeholder={common("form.yourName")}
                                        className="w-full px-4 py-3 border rounded-none font-avenirMedium focus:outline-none focus:ring-2 focus:ring-[#04264d]"
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    {/*<label className="block text-gray-700 font-avenirMedium mb-2">Phone Number</label>*/}
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        name="phone"
                                        onChange={handleChange}
                                        placeholder={common("form.phone")}
                                        className="w-full px-4 py-3 border rounded-none font-avenirMedium focus:outline-none focus:ring-2 focus:ring-[#04264d]"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm">{errors.phone.phone}</p>
                                    )}
                                </div>

                                {/* Moving Date */}
                                <div>
                                    {/*<label className="block text-gray-700 font-avenirMedium mb-2">Moving Date</label>*/}
                                    <select
                                        value={formData.movingDate}
                                        name="movingDate"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border rounded-none font-avenirMedium focus:outline-none focus:ring-2 focus:ring-[#04264d]"
                                    >
                                        <option value="">{common("form.selectMovingDate")}</option>
                                        <option value="Less than one month">Less than one month</option>
                                        <option value="One month">One month</option>
                                        <option value="2 Months">2 Months</option>
                                        <option value="Casually Browsing">Casually Browsing</option>
                                    </select>
                                    {errors.movingDate && (
                                        <p className="text-red-500 text-sm">{errors.movingDate.message}</p>
                                    )}
                                </div>

                                {/* Offer Dropdown */}
                                <div>
                                    {/*<label className="block text-gray-700 font-medium mb-2">Offer</label>*/}
                                    <select
                                        value={formData.offer}
                                        name="offer"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border rounded-none font-avenirMedium focus:outline-none focus:ring-2 focus:ring-[#04264d]"
                                    >
                                        <option value="">{common("form.selectOffer")}</option>
                                        <option value="1 Year Contract – 2 Months Free">1 Year Contract – 2 Months Free</option>
                                        <option value="2 Year Contract – 3 Months Free">2 Year Contract – 3 Months Free</option>
                                    </select>
                                    {errors.offer && (
                                        <p className="text-red-500 text-sm">{errors.offer.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="bg-[#04264d] text-white font-avenirLight px-8 py-3 rounded-none transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </section>
    )
}