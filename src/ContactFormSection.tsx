import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactFormSection.scss';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }

    const serviceId = (process.env.REACT_APP_EMAILJS_SERVICE_ID ?? '').trim();
    const adminTemplateId = (process.env.REACT_APP_EMAILJS_TEMPLATE_ADMIN ?? '').trim();
    const confirmTemplateId = (process.env.REACT_APP_EMAILJS_TEMPLATE_CONFIRM ?? '').trim();
    const publicKey = (process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? '').trim();

    // Debug logging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('=== EmailJS Configuration ===');
      console.log('Service ID:', serviceId || 'MISSING');
      console.log('Admin Template ID:', adminTemplateId || 'MISSING');
      console.log('Confirm Template ID:', confirmTemplateId || 'MISSING');
      console.log('Public Key:', publicKey ? `${publicKey.substring(0, 5)}...${publicKey.substring(publicKey.length - 3)}` : 'MISSING');
      console.log('Public Key Length:', publicKey.length);
      console.log('============================');
    }

    if (!serviceId || !adminTemplateId || !confirmTemplateId || !publicKey) {
      setSubmitStatus({
        type: 'error',
        message: 'Email service is not configured. Please contact us at info@memorymakers.events.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Format service name for display
      const serviceNames: Record<string, string> = {
        'personal-travel': 'Personal Travel Assist',
        'memory-makers': 'Memory Makers Events',
        'hr-summit': 'HR Summit CY'
      };
      const serviceDisplay = serviceNames[formData.service] || formData.service;

      // Format current date/time
      const now = new Date();
      const timeString = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        service: serviceDisplay,
        message: formData.message,
        time: timeString,
        reply_to: formData.email
      };

      // Send admin email
      console.log('Sending admin email with:', {
        serviceId,
        templateId: adminTemplateId,
        publicKeyLength: publicKey.length
      });
      const adminResponse = await emailjs.send(serviceId, adminTemplateId, templateParams, {
        publicKey: publicKey
      });
      console.log('Admin email sent successfully:', adminResponse.status, adminResponse.text);

      // Send confirmation email
      console.log('Sending confirmation email with:', {
        serviceId,
        templateId: confirmTemplateId,
        publicKeyLength: publicKey.length
      });
      const confirmResponse = await emailjs.send(serviceId, confirmTemplateId, templateParams, {
        publicKey: publicKey
      });
      console.log('Confirmation email sent successfully:', confirmResponse.status, confirmResponse.text);

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setSubmitStatus({
        type: 'success',
        message: 'Thanks! Your message has been sent. Please check your email for confirmation.'
      });
    } catch (error: any) {
      console.error('EmailJS error:', error);
      let errorMessage = 'Something went wrong. Please try again or email us directly at info@memorymakers.events.';
      
      if (error?.text) {
        errorMessage = `Error: ${error.text}. Please check your email configuration or contact us at info@memorymakers.events.`;
      } else if (error?.message) {
        errorMessage = `Error: ${error.message}. Please try again or contact us at info@memorymakers.events.`;
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="contact-form-section pv">
      <section id="contact" className="contact-form">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-description">
          Ready to create unforgettable memories? Fill out the form below and let's start planning your next event together.
        </p>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Interest</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="personal-travel">Personal Travel Assist</option>
                <option value="memory-makers">Memory Makers Events</option>
                <option value="hr-summit">HR Summit CY</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or inquiry"
                required
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
            {submitStatus && (
              <p
                role="status"
                aria-live="polite"
                className={`form-status ${submitStatus.type}`}
              >
                {submitStatus.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </article>
  );
};

export default ContactFormSection; 