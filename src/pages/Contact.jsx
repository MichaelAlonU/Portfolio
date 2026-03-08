import { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData, "to URL:", import.meta.env.VITE_FORMSPREE_URL);
    if (formData.name && formData.email && formData.message) {
      setIsLoading(true);
      try {
        const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            ...formData,
            subject: formData.subject || "Portfolio Contact"
          })
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSubmitted(false), 5000);
        } 
        else {
          throw new Error("Failed to send");
        }
        } catch (error) {
          alert("Oops! There was a problem submitting your form, you can also email me directly at michaeluzan88@gmail.com");
        }
        finally {
          setIsLoading(false); 
        }
    };


  }

  const contactMethods = [
    {
      title: 'Email',
      description: 'Feel free to send me an email',
      value: 'michaeluzan88@gmail.com',
      href: 'mailto:michaeluzan88@gmail.com',
      icon: '📧',
    },
    {
      title: 'GitHub',
      description: 'Check out my repositories',
      value: 'github.com/michaelAlonU',
      href: 'https://github.com/michaelAlonU',
      icon: '🐙',
    },
    {
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      value: 'linkedin.com/in/michaeluzn',
      href: 'https://linkedin.com/in/michaeluzan',
      icon: '💼',
    },
  ];

  return (
    <div>
      <Section 
        id="contact" 
        title="Get In Touch"
        subtitle="I'm interested in hearing about opportunities and exploring new projects"
      >
        <div className="row mb-4">
          {/* Contact Methods */}
          {contactMethods.map((method) => (
            <div key={method.title} className="col-lg-4 mb-4" data-fade>
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block' }}
              >

                <Card hover={true}>
                  <div style={{ fontSize: '2.5rem' }} className="mb-3">{method.icon}</div>

                  <h5 className="h5 fw-semibold text-white mb-2">
                    {method.title}
                  </h5>

                  <p className="text-secondary small mb-3">
                    {method.description}
                  </p>

                  <span
                    className="text-navy fw-medium"
                    style={{ wordBreak: 'break-all' }}
                  >
                    {method.value}
                  </span>

                </Card>

              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section 
        title="Send Me a Message"
        subtitle="Fill out the form below and I'll get back to you as soon as possible"
        style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)' }}
      >
        <div className="mx-auto" style={{ maxWidth: '600px' }} data-fade>
          <Card>
            {submitted ? (
              <div className="text-center py-5">
                <div style={{ fontSize: '3rem' }} className="mb-3">✓</div>
                <h3 className="h4 fw-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-secondary">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-3">
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="name" className="form-label small fw-medium text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label small fw-medium text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    autoComplete="email"
                  />
                </div>

                {/* Subject Field */}
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label small fw-medium text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label small fw-medium text-white">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or opportunity..."
                    style={{ resize: 'none' }}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-100 text-center"
                  style={{ width: '100%' }}
                  disabled={isLoading}
                >
                  {!isLoading ? `Send Message` : `Sending...`}
                </Button>

              </form>
            )}
          </Card>
        </div>
      </Section>

      {/* Response Time Section */}
      <Section>
        <div className="mx-auto text-center" style={{ maxWidth: '600px' }} data-fade>
          <div style={{ fontSize: '3rem' }} className="mb-3">⏱️</div>
          <h3 className="h4 fw-bold text-white mb-2">Quick Response Time</h3>
          <p className="text-secondary">
            I typically respond to inquiries within 24 hours. For urgent matters, feel free to reach out via email or LinkedIn.
          </p>
        </div>
      </Section>
    </div>
  );
}