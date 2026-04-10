import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { cn } from "../../lib/utils";

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      {/* Info Grid */}
      <div
        className="text-neutral-surface grid grid-cols-1 gap-4 sm:grid-cols-2"
        aria-label="Contact information"
      >
        <div
          className={cn(
            "flex flex-col gap-2 border p-4 max-sm:col-span-2",
            "bg-near-black border-neutral-surface/10 rounded-xl",
            "bg-[radial-gradient(ellipse_at_100%_100%,#251539,transparent_50%)]",
          )}
        >
          <div className="flex items-center gap-2.5">
            <Mail className="text-white" strokeWidth={1.8} size={20} />
            <span className="text-[18px] font-semibold">E-mail</span>
          </div>
          <a
            href="mailto:hyanx22@gmail.com"
            className="text-[14px] font-medium transition-colors hover:text-purple-400"
          >
            hyanx22@gmail.com
          </a>
        </div>
        <div
          className={cn(
            "flex flex-col gap-2 border p-4 max-sm:col-span-2",
            "bg-near-black border-neutral-surface/10 rounded-xl",
            "bg-[radial-gradient(ellipse_at_100%_100%,#251539,transparent_50%)]",
          )}
        >
          <div className="flex items-center gap-2.5">
            <Phone className="text-white" strokeWidth={1.8} size={20} />
            <span className="text-[18px] font-semibold">Phone</span>
          </div>
          <a
            href="mailto:Admin@xtract.com"
            className="text-[14px] font-medium transition-colors hover:text-purple-400"
          >
            +1(969) 819-8061
          </a>
        </div>

        <div
          className="bg-near-black border-neutral-surface/10 col-span-2 rounded-xl border p-6"
          aria-label="Send us a message"
        >
          <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="firstName"
                className="text-neutral-surface text-[15px] font-semibold"
              >
                First Name
              </label>
              <input
                required
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Wassim"
                className="border-neutral-surface/10 rounded-lg border p-2.5 text-[14px]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lastName"
                className="text-neutral-surface text-[15px] font-semibold"
              >
                Last Name
              </label>
              <input
                required
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Alilou"
                className="border-neutral-surface/10 rounded-lg border p-2.5 text-[14px]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-neutral-surface text-[15px] font-semibold"
              >
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Hyan@mail.com"
                className="border-neutral-surface/10 rounded-lg border p-2.5 text-[14px]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone"
                className="text-neutral-surface text-[15px] font-semibold"
              >
                Phone
              </label>
              <input
                required
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1(969) 819-8061"
                className="border-neutral-surface/10 rounded-lg border p-2.5 text-[14px]"
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label
                htmlFor="message"
                className="text-neutral-surface text-[15px] font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi, I am hyan i want help with…."
                className="resize-vertical text-[14px border-neutral-surface/10 min-h-27.5 rounded-lg border p-2.5"
              />
            </div>

            <button
              type="submit"
              className="bg-primary mt-1 cursor-pointer rounded-lg py-3 text-[14px] font-semibold text-white transition-all hover:bg-[#6d28d9] active:scale-[0.99] sm:col-span-2"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
