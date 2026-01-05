"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import ContactForm from "@/app/_types/contact.interface";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export function Contact() {
  const initialForm: ContactForm = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };

  const [form, setForm] = useState<ContactForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors?.length > 0) {
          setErrorMsg(data.errors[0].message);
        } else {
          setErrorMsg(data.error || "Something went wrong.");
        }
        return;
      }

      setSuccessMsg("Your message has been sent! Thank you.");
      setForm(initialForm); // reset form
    } catch (err) {
      setErrorMsg("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-25 
      bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-size-[90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg">Connect with me</h4>

      <h2 className="text-center text-5xl">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        If you'd like to get in touch, have questions, comments or feedback,
        feel free to reach out via the form below.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        {/* Name */}
        <div className="grid sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            name="name"
            type="text"
            placeholder="Name*"
            required
            value={form.name}
            onChange={handleChange}
            className="p-3 border-[0.5px] border-gray-400 rounded-md bg-white"
          />

          {/* Phone */}
          <PhoneInput
            country={"se"}
            onlyCountries={["se"]}
            countryCodeEditable={true}
            autoFormat={false}
            placeholder="Phone (optional)"
            containerClass="phone-input"
            inputClass="!w-full !h-[58px] !border-gray-400 !rounded-md !bg-white !pl-14"
            buttonClass="!h-[58px] !border-gray-400 !rounded-l-md"
            dropdownClass="!w-[300px]"
            value={form.phone}
            onChange={(phone) => {
              setForm({ ...form, phone });
            }}
          />
          
          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email*"
            required
            value={form.email}
            onChange={handleChange}
            className="sm:col-span-2 p-3 border-[0.5px] border-gray-400 rounded-md bg-white"
          />

          {/* Subject */}
          <input
            name="subject"
            type="text"
            placeholder="Subject (optional)"
            value={form.subject}
            onChange={handleChange}
            className="sm:col-span-1 p-3 border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message*"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full p-4 border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>

        {/* Success */}
        {successMsg && (
          <p className="text-green-600 text-center mb-4">{successMsg}</p>
        )}

        {/* Error */}
        {errorMsg && (
          <p className="text-red-600 text-center mb-4">{errorMsg}</p>
        )}

        {/* Send button */}
        <button
          type="submit"
          disabled={loading}
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto duration-500 cursor-pointer
            ${
              loading
                ? "bg-gray-500 cursor-not-allowed text-white"
                : "bg-black/80 text-white hover:bg-black"
            }`}
        >
          {loading ? "Sending..." : "Send"}

          {!loading && (
            <Image
              src={assets.right_arrow_white}
              alt="right_arrow_white"
              className="w-4"
            />
          )}
        </button>
      </form>
    </div>
  );
}
