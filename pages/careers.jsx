export default function Careers() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-5xl font-extrabold mb-4">
          Join <span className="text-purple-600">Texas AGI Labs</span>
        </h1>
        <p className="text-lg text-gray-600">
          Be part of our mission to build the intelligent future.
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-10 mb-16 border border-gray-100">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-6"
        >
          {/* Replace with your Web3Forms access key */}
          <input
            type="hidden"
            name="access_key"
            value="YOUR_WEB3FORMS_ACCESS_KEY"
          />
          <input
            type="hidden"
            name="redirect"
            value="https://texasagilabs.com/thank-you"
          />

          <h2 className="text-2xl font-bold text-center mb-6">
            Apply for a Role
          </h2>

          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Role Applying For</label>
            <input
              type="text"
              name="role"
              placeholder="e.g., AI Research Engineer"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Resume Link (Google Drive / Dropbox)
            </label>
            <input
              type="url"
              name="resume_link"
              placeholder="Paste your resume link here"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              * Make sure your link is viewable (anyone with the link can
              access).
            </p>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Message / Cover Letter
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us why you’d like to join Texas AGI Labs..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}

