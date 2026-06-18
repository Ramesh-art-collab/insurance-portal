

export default function ContactPage() {
  return (
    <div className="p-8 flex-1">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center">
            If you have any questions or need assistance, please feel free to reach out to us. Our team is here to help you with all your insurance needs.
        </p>
        <div className="max-w-md mx-auto mt-8 p-4 border rounded">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Contact Information</h2>
            <p className="text-gray-600 mb-1">Email: info@insuranceportal.com</p>
            <p className="text-gray-600 mb-1">Phone: (123) 456-7890</p>
            <p className="text-gray-600 mb-1">Address: 123 Insurance Street, City, State 12345</p>
        </div>
    </div>
  );
}
