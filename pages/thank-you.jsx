export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-4">🎉 Thank You!</h1>
      <p className="text-lg text-gray-600 mb-6">
        We’ve received your application and will contact you soon.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        Back to Home
      </a>
    </div>
  );
}

