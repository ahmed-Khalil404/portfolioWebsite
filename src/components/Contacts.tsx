import React, { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  
    // Ensure e.target is an HTMLFormElement
    const form = e.target as HTMLFormElement;
  
    // Send email using EmailJS
    emailjs.sendForm("service_qo5hg6p", "template_qsdwpmj", form, "I1SaKZvoNqawUC9g0")
      .then(() => {
        alert("Message sent!");
        setName(""); // Clear form fields
        setEmail("");
        setMessage("");
      })
      .catch((error) => alert(error));
  };
  

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  const address = "25 Rue Robert Latouche, Nice, France";
  const emailme = "bensassiahmedkhalilpro@gmail.com";

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex flex-col md:flex-row">
        {/* Contact Form Section */}
        <div className="md:w-1/2 flex flex-col md:pr-8 mb-10 md:mb-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 text-gray-400">
            I'm very responsive and excited for any interaction.
          </p>
          <form name="contact" className="flex flex-col" onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map and Contact Details Section */}
        <div className="md:w-1/2 flex flex-col">
          {/* Map Section */}
          <div className="mb-6">
            <div
              style={{
                overflow: "hidden",
                maxWidth: "100%",
                height: "400px",
                borderRadius: "10px",
                marginTop: "80px",
              }}
            >
              <iframe
                title="map"
                style={{ height: "100%", width: "100%", border: 0 }}
                frameBorder={0}
                src={`https://www.google.com/maps/embed/v1/place?q=25+Rue+Robert+Latouche,+Nice,+France&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
              />
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col justify-center items-center">
            <div className="text-center mb-4">
              <h2 className="text-white text-lg font-medium">Address</h2>
              <p className="text-gray-400">{address}</p>
            </div>
            <div className="text-center mb-4">
              <h2 className="text-white text-lg font-medium">Email</h2>
              <a href={`mailto:${emailme}`} className="text-indigo-400 leading-relaxed">
                {emailme}
              </a>
            </div>
            <div className="text-center">
              <h2 className="text-white text-lg font-medium">Phone</h2>
              <p className="text-gray-400">+330769392578</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
