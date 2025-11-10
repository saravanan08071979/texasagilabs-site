import { useState } from "react";

export default function Careers() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [tokenSent, setTokenSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendToken = async () => {
    setLoading(true);
    const res = await fetch("/api/send-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.success) {
      setTokenSent(true);
      alert("Verification code sent to your email.");
    } else {
      alert(data.error || "Failed to send code.");
    }
  };

  const verifyToken = async () => {
    const res = await fetch("/api/verify-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });
    const data = await res.json();
    if (data.success) {
      setVerified(true);
      alert("Email verified successfully!");
    } else {
      alert("Invalid code, please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">
          Join <span className="text-purple-600">Texas AGI Labs</span>
        </h1>
        <p className="text-lg text-gray-600">
          Be part of our mission to build the intelligent future.
        </p>
      </section>

      <section className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-10 mb-16 border border-gray-100">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="access_key" value="c9c85691-9980-4120-ac1b-0d652d611d11" />
          <input type="hidden" name="redirect" value="https://texasagilabs.com/thank-you" />

          <h2 className="text-2xl font-bold text-center mb-6">Apply for a Role</h2>

          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input type="text" name="name" required className="w-full border border-gray-300 rounded-lg p-3" />
          </div>

          {/* Email Verification Section */}
          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {!tokenSent && (
              <button
                type="button"
                onClick={sendToken}
                disabled={loading}
                className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                {loading ? "Sending..." : "Send Verification Code"}
              </button>
            )}
          </div>

          {tokenSent && !verified && (
            <div>
              <label className="block font-semibold mb-1">Enter Verification Code</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <button
                type="button"
                onClick={verifyToken}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Verify Code
              </button>
            </div>
          )}

          <div>
            <label className="block font-semibold mb-1">Role Applying For</label>
            <input type="text" name="role" placeholder="e.g., AI Engineer" required className="w-full border border-gray-300 rounded-lg p-3" />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message / Cover Letter</label>
            <textarea name="message" rows="5" placeholder="Tell us why you’d like to join Texas AGI Labs…" className="w-full border border-gray-300 rounded-lg p-3"></textarea>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm text-gray-700">
            📎 <strong>Resume Submission:</strong> Please email your resume directly to{" "}
            <a href="mailto:hr.apac@texasagilabs.com" className="text-purple-600 font-semibold underline">
              hr.apac@texasagilabs.com
            </a>.
          </div>

          <button
            type="submit"
            disabled={!verified}
            className={`w-full font-bold py-3 rounded-lg transition duration-300 ${
              verified
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}

