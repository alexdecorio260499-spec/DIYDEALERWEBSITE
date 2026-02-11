import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again or email us directly at yourdiydealer@gmail.com');
        }
    };

    return (
        <div className="min-h-screen flex flex-col pt-20 md:pt-24">
            {/* Hero Section */}
            <section className="bg-[#1a2e1a] text-white py-[3px] px-6 mb-2">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-serif mb-1">Contact Us</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Ready to transform your garden? Get in touch.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="flex-grow py-8 px-6">
                <div className="max-w-xl mx-auto bg-white/95 p-8 md:p-12 rounded-xl shadow-lg backdrop-blur-sm">
                    {status === 'success' ? (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1a2e1a] mb-2">Message Sent!</h3>
                            <p className="text-gray-600">
                                Thank you for reaching out. We'll get back to you shortly.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 text-[#1a2e1a] font-bold hover:underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : status === 'error' ? (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-red-600 mb-2">Error Sending Message</h3>
                            <p className="text-gray-600 mb-4">
                                {errorMessage}
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 bg-[#1a2e1a] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#2a4a2a] transition-all"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-[#1a2e1a] mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1a2e1a] focus:ring-1 focus:ring-[#1a2e1a] outline-none transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-[#1a2e1a] mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1a2e1a] focus:ring-1 focus:ring-[#1a2e1a] outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-[#1a2e1a] mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1a2e1a] focus:ring-1 focus:ring-[#1a2e1a] outline-none transition-colors"
                                    placeholder="Tell us about your garden..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-[#1a2e1a] text-white font-bold py-4 rounded-lg hover:bg-[#2a4a2a] transition-all disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Contact;
