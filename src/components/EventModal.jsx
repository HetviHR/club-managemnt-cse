import React, { useState, useEffect } from "react";

export default function EventModal({ show, onClose, onSave, eventData }) {
  const [form, setForm] = useState({ title: "", description: "", date: "" });

  useEffect(() => {
    if (eventData) setForm(eventData);
  }, [eventData]);

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ title: "", description: "", date: "" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
        <h3 className="text-xl font-bold mb-4">
          {eventData ? "Edit Event" : "Add Event"}
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="border p-2 rounded-lg"
            required
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="border p-2 rounded-lg"
            required
          />
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="border p-2 rounded-lg"
            required
          />
          <div className="flex justify-end gap-2 mt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
