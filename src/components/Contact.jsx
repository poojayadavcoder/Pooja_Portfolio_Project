import { useRef } from "react";
import CirclesGroup from "./CirclesGroup";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mfua1t5", "template_hsp1jzm", form.current, {
        publicKey: "OKfDBiqz0vFX4M4q3",
      })
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            className:
              "bg-orange-600 text-zinc-900 border border-orange-600 font-semibold",
            bodyClassName: "text-zinc-900",
            progressClassName: "bg-zinc-900",
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again!", {
            position: "top-right",
            autoClose: 3000,
            className:
              "bg-orange-600 text-zinc-900 border border-orange-600 font-semibold",
            bodyClassName: "text-zinc-900",
            progressClassName: "bg-zinc-900",
          });
        }
      );
  };

  return (
    <div
      className="w-full px-4 min-h-[300px]  flex justify-center items-center boxShadow2 py-[60px] flex-col gap-5"
      id="contact"
    >
      <ToastContainer />
      <h1 className="text-[30px] sm:text-4xl font-bold logo textColor">
        Let's Contact Me
      </h1>
      <div className="w-[130px] h-[1px] bg-gradient-to-t from-black to-orange-600"></div>
      <div className="w-[70px] h-[1px] bg-gradient-to-t bg-orange-600"></div>
      <div className="w-full min-h-[200px] flex justify-center items-center">
        <div className="w-[95%] lg:w-[90%] xl:w-[75%] min-h-[620px] md:min-h-[600px]  rounded-2xl relative py-[50px] overflow-hidden boxShadow4 mt-5 sm:mt-0">
          <CirclesGroup />

          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full h-full flex justify-center items-center gap-5 flex-col px-8"
          >
            <div className="w-full sm:w-[500px] h-[80px] flex justify-center items-start gap-3 flex-col">
              <label className="text-gray-100 logo">Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full h-[50px] border border-dashed border-orange-600 rounded-[2px] outline-none px-3 py-3 text-gray-100"
              />
            </div>

            <div className="w-full sm:w-[500px] h-[80px] flex justify-center items-start gap-3 flex-col">
              <label className="text-gray-100 logo">Email</label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full h-[50px] border border-dashed border-orange-600 rounded-[2px] outline-none px-3 py-3 text-gray-100"
              />
            </div>

            <div className="w-full sm:w-[500px] min-h-[150px] flex justify-center items-start gap-3 flex-col">
              <label htmlFor="message" className="text-gray-100 logo">
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full min-h-[150px] border border-dashed border-orange-600 rounded-[2px] text-gray-100 outline-none px-3 py-3 resize-none"
              />
            </div>

            <div className="w-full sm:w-[500px] flex justify-start items-start">
              <input
                type="submit"
                value="Send"
                className="w-[100px] h-[40px] border border-dashed border-white rounded-[2px] text-orange-600 hover:bg-gray-100 text-[23px] transition-all duration-150 cursor-pointer font-semibold logo"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
