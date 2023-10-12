
import SectionTitle from "./SectionTitle";
export default function ContactSection() {
  const inputClasses =
    "text-white rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-opacity-50 ";

  return (
    <div className="text-[#D81F35]">
      <SectionTitle text="Contact" />
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
        <div className="space-y-1 w-[300px]">
          <label htmlFor="yourmessage" className="font-medium text-gray-700">
            {" "}
            Message<span className="text-red-600">*</span>
          </label>{" "}
          <br />
          <textarea
            name="message"
            id="yourmessage"
            required
            className={inputClasses + "w-[300px]"}
            rows={4}
          ></textarea>
        </div>
        <p>
          <button type="submit" className="btn-accent btn text-lg">
            内容を送信
          </button>
        </p>
      </form>
    </div>
  );
}
