import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";

// ✅ Esquema de validación con Zod
const FormSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters" }),
});

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_id", // 👉 remplaza con tu Service ID
        "template_id", // 👉 remplaza con tu Template ID
        {
          name: data.name,
          email: data.email,
          company: data.company,
          message: data.message,
        },
        "user_public_key" // 👉 remplaza con tu Public Key
      );
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <footer className="bg-dark text-white px-8 pt-16 pb-4 text-xs lg:text-base">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Left section */}
        <div className="flex-1">
          <h2 className="lg:text-8xl text-6xl font-bold mb-4">Let's Connect</h2>
          <p className="mb-6 text-base lg:text-2xl lg:max-w-[60%] text-gray-400">
            Tell us about your business. Let's get this conversation started.
            <br className="hidden lg:block" />
            Fill in the form or send us an email.
          </p>
          <a
            href="mailto:info@ddcdevelopments.com"
            className="lg:text-4xl text-xl underline"
          >
            info@ddcdevelopments.com
          </a>

          <div className="mt-8 flex flex-col gap-2 text-xl text-white">
            <p className="text-gray-400 pb-2">(Connect)</p>
            <p>Youtube</p>
            <p className="">Instagram</p>
            <p>
              Phone Number:<a href=" tel:305-915-0002"> 305-915-0002</a>
            </p>
          </div>

          <div className="mt-8 text-gray-300 text-lg">
            <p className="text-gray-400 pb-2">(Visit Us)</p>
            <a
              href="https://maps.app.goo.gl/5MWU4AVmGP8TjggM8"
              class="text-xl hover-underline-animation left"
            >
              3470 NW 82nd Ave, Suite 790
            </a>
          </div>
        </div>

        {/* Right section - Form */}
        <div className="flex-1 lg:max-w-[30vw]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <div>
              <label className="text-xl text-white pl-2 pb-4">Name*</label>
              <input
                type="text"
                placeholder="Jhon Dow"
                {...register("name")}
                className="w-full p-3 rounded-xl bg-gray-800 text-white text-xl"
              />
              {errors.name && (
                <p className="text-red-400 text-xl">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-xl text-white pl-2 pb-4">Email*</label>
              <input
                type="email"
                placeholder="jhon@gmail.com"
                {...register("email")}
                className="w-full p-3 rounded-xl bg-gray-800 text-white text-xl"
              />
              {errors.email && (
                <p className="text-red-400 text-xl">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="text-xl text-white pl-2 pb-4">
                Company Name*
              </label>
              <input
                type="text"
                placeholder="Company Name"
                {...register("Jhon Company")}
                className="w-full p-3 rounded-xl bg-gray-800 text-white text-xl"
              />
              {errors.company && (
                <p className="text-red-400 text-xl">{errors.company.message}</p>
              )}
            </div>

            <div>
              <label className="text-xl text-white pl-2 pb-4">Message*</label>
              <textarea
                placeholder="I have an idea.."
                {...register("message")}
                className="w-full p-3 rounded-xl bg-gray-800 text-white text-xl"
              />
              {errors.message && (
                <p className="text-red-400 text-xl">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gold text-black font-semibold py-2 px-4 rounded-xl text-xl hover:bg-gold transition"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-20 pt-4 border-t border-t-white flex justify-between text-gray-400 text-base lg:text-2xl relative">
        <div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{ transform: "translateY(-50%)" }}
        ></div>
        <p>Copyright © 2025 DDC Developments. All rights reserved.</p>
        <a href="#top" className="hidden lg:block underline">
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
