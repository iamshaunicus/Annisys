
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission for demonstration purposes
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message. We will be in touch shortly.');
      setFormData({ name: '', company: '', email: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 5000); // Clear message after 5 seconds
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Contact Us</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Ready to collaborate or need more information? Fill out the form below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  placeholder="John Doe"
                  aria-label="Full Name"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  placeholder="Your Company Inc."
                  aria-label="Company Name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                placeholder="you@company.com"
                aria-label="Email Address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                placeholder="Please describe your inquiry..."
                aria-label="Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="inline-block bg-emerald-600 text-white font-bold py-3 px-10 rounded-full hover:bg-emerald-700 disabled:bg-emerald-800 disabled:cursor-wait transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-600/30 text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {submitMessage && (
            <p className="mt-6 text-center text-emerald-400 transition-opacity duration-300">{submitMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;