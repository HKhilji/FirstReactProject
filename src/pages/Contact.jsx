import './Contact.css'
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: ''})
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 4000);
            setFormData({name: '', email: '', message: ''});
        }
    };

    return(
        <div className="contact-page">
            <h1>Get In Touch!</h1>
            <br></br>
            <p>I’d love to hear from you! Feel free to drop a message or say hi.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit"> Send Message </button>
                
            </form>

            <div className="contact-icons">
                <a href="thezaifkhilji@gmail.com" target="_blank" rel="noopener noreferrer">📧</a>
                <a href="https://github.com/HKhilji" target="_blank" rel="noopener noreferrer">🐙</a>
                <a href="https://www.linkedin.com/in/huzaifa-ahmed-168120286/" target="_blank" rel="noopener noreferrer">💼</a>
            </div>

        </div>
    );
}

export default Contact;