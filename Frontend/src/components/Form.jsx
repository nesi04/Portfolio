import { Send } from "lucide-react";
import React, { useState } from "react";
import useStore from "../Store/zustand.js";

const Form = () => {
  const { sendNewMessage } = useStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required.");
      return;
    }
    try {
      await sendNewMessage(formData);
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      
    }
  };

  return (
    <form
      className="flex justify-center items-center py-10"
      onSubmit={handleSubmit}
      id="form"
    >
      <div className="border-2 w-[500px] rounded-3xl flex flex-col gap-4 justify-center items-center py-7 px-16 shadow-lg">
        <h1 className="text-4xl font-bold">Contact me</h1>

        <label className="input input-bordered flex items-center gap-2 border-2 w-full">
          Name
          <input
            type="text"
            name="name" // ✅ Added name attribute
            className="grow rounded-full px-2 py-1 outline-none"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 border-2 w-full">
          Email
          <input
            type="email"
            name="email" // ✅ Added name attribute
            className="grow px-2 py-1 outline-none"
            placeholder="Please provide email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <textarea
          name="message" // ✅ Added name attribute
          placeholder="Message"
          className="textarea textarea-bordered textarea-lg w-full h-60 p-2 border-2 rounded-md"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button className="btn btn-primary flex gap-2 items-center" type="submit">
          <Send className="size-5" />
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
