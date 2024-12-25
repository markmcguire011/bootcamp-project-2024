"use client";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Send email with EmailJS
    emailjs
      .send(
        "service_ud4xdki", // Service ID
        "template_8hkz21q", // Template ID
        templateParams,
        "y7fwcNYJYNt9AhwJn" // User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");

          // Reset form data after successful submission
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          // Optionally reset status message after 3 seconds
          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div className="px-40 py-20 min-h-screen">
      <h1 className="text-2xl font-bold">Contact</h1>
      <form
        id="contact-form"
        className="flex flex-col gap-2 pt-5"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          className="border-2 border-black rounded w-max p-1"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className="border-2 border-black rounded w-max p-1"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          className="border-2 border-black rounded w-max p-1"
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="border-black border-2 w-max p-1 rounded"
        />
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
