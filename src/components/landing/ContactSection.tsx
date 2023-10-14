import { VStack } from "@kuma-ui/core";
import SectionTitle from "./SectionTitle";
import ShareButtons from "../shared/ShareButtons";
export default function ContactSection() {
  const inputClasses =
    "text-white w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-opacity-50 ";

  return (
    <div className="text-[#D81F35] min-w-full items-center justify-center flex flex-col">
      <SectionTitle text="Contact" />
      <VStack className="min-w-full">
        <ShareButtons />
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="space-y-4 py-7"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="space-y-1">
            <label htmlFor="yourname" className="font-medium">
              Name
            </label>{" "}
            <br />
            <input
              type="text"
              name="name"
              id="yourname"
              className={inputClasses}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="youremail" className="font-medium text-gray-700">
              {" "}
              Email<span className="text-red-600">*</span>
            </label>{" "}
            <br />
            <input
              type="email"
              name="email"
              id="youremail"
              required
              className={inputClasses}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="yourmessage" className="font-medium text-gray-700">
              {" "}
              Message<span className="text-red-600">*</span>
            </label>{" "}
            <br />
            <textarea
              name="message"
              id="yourmessage"
              required
              className={inputClasses}
              rows={4}
            ></textarea>
          </div>
          <p>
            <button type="submit" className="btn-accent btn text-lg">
              内容を送信
            </button>
          </p>
        </form>
      </VStack>
    </div>
  );
}
