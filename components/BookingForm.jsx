"use client";
import { useState } from "react";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Book Your Hibachi Experience 🔥</h2>

      {success && (
        <p className="text-green-600 mb-4">
          ✅ Booking submitted! Check your email.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        <input name="name" placeholder="Full Name" required className="w-full p-3 border rounded" />

        <input name="email" type="email" placeholder="Email" required className="w-full p-3 border rounded" />

        <input name="phone" placeholder="Phone Number" required className="w-full p-3 border rounded" />

        <input name="date" type="date" required className="w-full p-3 border rounded" />

        <input name="guests" type="number" placeholder="Number of Guests" required className="w-full p-3 border rounded" />

        <textarea name="message" placeholder="Event details..." className="w-full p-3 border rounded" />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded hover:bg-gray-800"
        >
          {loading ? "Submitting..." : "Get Quote / Book Now"}
        </button>
      </form>
    </div>
  );
}
