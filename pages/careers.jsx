import { useState } from "react";

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold text-purple-600">Thank You!</h1>
        <p className="text-gray-700 mt-3">
          Your application has been submitted successfully. Our HR team will contact you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Join Texas AGI Labs
        </h1>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-4 bg-gray-50 p-6 rounded-2xl shadow-md"
        >
          {/* Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="c9c85691-9980-4120-ac1b-0d652d611d11"
          />

          {/* HR Email for notification */}
          <input
            type="hidden"
            name="to"
            value="hr.apac@texasagilabs.com"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role Applying For</label>
            <input
              type="text"
              name="role"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your experience or attach resume links."
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg"
          >
            Submit Application
          </button>

          <p className="text-xs text-gray-500 text-center mt-2">
            Please email your resume directly to{" "}
            <a
              href="mailto:hr.apac@texasagilabs.com"
              className="text-purple-600 font-medium underline"
            >
              hr.apac@texasagilabs.com
            </a>{" "}
            after submitting this form.
          </p>
        </form>
      </div>
    </div>
  );
}

