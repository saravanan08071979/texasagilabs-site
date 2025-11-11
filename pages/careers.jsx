import { useState } from "react";

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-3">
          Thank You!
        </h1>
        <p className="text-gray-700 text-lg">
          Your application has been submitted successfully. Our HR team will get in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white via-gray-50 to-white px-4 py-10">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Join <span className="text-gray-900">Texas AGI Labs</span>
        </h1>

        <p className="text-center text-gray-600 mb-8">
          We’re always looking for passionate engineers and innovators.  
          Submit your application below or email your resume directly.
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-5"
        >
          {/* Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="c9c85691-9980-4120-ac1b-0d652d611d11"
          />

          {/* HR Email for notification */}
          <input type="hidden" name="to" value="hr.apac@texasagilabs.com" />

          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role Applying For</label>
            <input
              type="text"
              name="role"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us briefly about your skills or attach resume links."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200"
          >
            Submit Application
          </button>

          <p className="text-xs text-center text-gray-500 mt-2">
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

