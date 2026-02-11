import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface MandatoryInfoFormProps {
    planTitle: string;
    planPrice: string;
    onClose: () => void;
}

interface FormData {
    full_name: string;
    email: string;
    phone: string;
    revamp_styles: string;
    pictures: File[];
}

const MandatoryInfoForm: React.FC<MandatoryInfoFormProps> = ({ planTitle, planPrice, onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        full_name: '',
        email: '',
        phone: '',
        revamp_styles: '',
        pictures: []
    });

    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        // Filter for PNG and JPEG only
        const validFiles = files.filter((file: File) =>
            file.type === 'image/png' || file.type === 'image/jpeg'
        );
        setFormData(prev => ({ ...prev, pictures: validFiles }));
        if (errors.pictures) {
            setErrors(prev => ({ ...prev, pictures: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};

        if (!formData.full_name.trim()) {
            newErrors.full_name = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }

        if (!formData.revamp_styles.trim()) {
            newErrors.revamp_styles = 'Please describe your desired styles';
        }

        if (formData.pictures.length === 0) {
            newErrors.pictures = 'Please upload at least one picture';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitError('');

        try {
            // Upload pictures to Supabase Storage
            const pictureUrls: string[] = [];

            for (const file of formData.pictures) {
                const fileExt = file.name.split('.').pop();
                const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
                const filePath = `${formData.email}/${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from('payment-pictures')
                    .upload(filePath, file);

                if (uploadError) throw uploadError;

                // Get public URL
                const { data: { publicUrl } } = supabase.storage
                    .from('payment-pictures')
                    .getPublicUrl(filePath);

                pictureUrls.push(publicUrl);
            }

            // Insert submission data into database
            const { error: dbError } = await supabase
                .from('payment_submissions')
                .insert([
                    {
                        full_name: formData.full_name,
                        email: formData.email,
                        phone: formData.phone,
                        revamp_styles: formData.revamp_styles,
                        plan_title: planTitle,
                        plan_price: planPrice,
                        pictures_urls: pictureUrls
                    }
                ]);

            if (dbError) throw dbError;

            // Success!
            alert('Thank you! Your information has been submitted successfully. We will contact you soon to start your garden transformation!');
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError('Failed to submit your information. Please try again or contact us directly at yourdiydealer@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-20 md:pt-24 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-white/5 backdrop-blur-md -z-10"
                onClick={onClose}
            />

            {/* Form Card */}
            <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-visible mt-32 md:mt-16">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors z-30"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header - Payment Success */}
                <div className="bg-gradient-to-br from-[#1A3C28] via-[#244F35] to-[#2E6142] pt-16 pb-8 px-8 text-white text-center relative">
                    {/* Green Checkmark Circle */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                        <div className="w-24 h-24 bg-gradient-to-br from-[#4ade80] to-[#22c55e] rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Payment Complete Text */}
                    <h2 className="text-3xl font-bold mb-3 tracking-wide">PAYMENT COMPLETE</h2>
                    <p className="text-white/90 text-lg mb-4">
                        Thank you for your transfer. Please fill out the form below to allow us to start transforming your garden.
                    </p>
                    <p className="text-sm text-white/60">Selected Plan: <span className="font-bold">{planTitle}</span></p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">

                    {/* Full Name */}
                    <div>
                        <label htmlFor="full_name" className="block text-white text-sm font-medium mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="full_name"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-white/5 border ${errors.full_name ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#5cb25d] transition-colors`}
                            placeholder="Enter your full name"
                        />
                        {errors.full_name && <p className="text-red-500 text-sm mt-1">{errors.full_name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#5cb25d] transition-colors`}
                            placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#5cb25d] transition-colors`}
                            placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Revamp Styles */}
                    <div>
                        <label htmlFor="revamp_styles" className="block text-white text-sm font-medium mb-2">
                            Revamp Styles Wished <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="revamp_styles"
                            name="revamp_styles"
                            value={formData.revamp_styles}
                            onChange={handleInputChange}
                            rows={4}
                            className={`w-full px-4 py-3 bg-white/5 border ${errors.revamp_styles ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#5cb25d] transition-colors resize-none`}
                            placeholder="Describe the styles you wish to experience"
                        />
                        {errors.revamp_styles && <p className="text-red-500 text-sm mt-1">{errors.revamp_styles}</p>}
                    </div>

                    {/* Pictures Upload */}
                    <div>
                        <label htmlFor="pictures" className="block text-white text-sm font-medium mb-2">
                            Upload Pictures <span className="text-red-500">*</span>
                        </label>
                        <div className={`border-2 border-dashed ${errors.pictures ? 'border-red-500' : 'border-white/20'} rounded-lg p-6 text-center hover:border-[#5cb25d] transition-colors`}>
                            <input
                                type="file"
                                id="pictures"
                                name="pictures"
                                accept="image/png,image/jpeg"
                                multiple
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <label htmlFor="pictures" className="cursor-pointer">
                                <svg className="w-12 h-12 mx-auto mb-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <p className="text-white/60 mb-1">Click to upload or drag and drop</p>
                                <p className="text-white/40 text-sm">PNG or JPEG (Multiple files allowed)</p>
                            </label>
                        </div>
                        {formData.pictures.length > 0 && (
                            <div className="mt-3 space-y-1">
                                <p className="text-white/60 text-sm font-medium">{formData.pictures.length} file(s) selected:</p>
                                {formData.pictures.map((file, index) => (
                                    <p key={index} className="text-white/40 text-sm">• {file.name}</p>
                                ))}
                            </div>
                        )}
                        {errors.pictures && <p className="text-red-500 text-sm mt-1">{errors.pictures}</p>}
                    </div>

                    {/* Error Message */}
                    {submitError && (
                        <div className="bg-red-500/10 border border-red-500 rounded-lg p-4">
                            <p className="text-red-500 text-sm">{submitError}</p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#4A5D4E] to-[#5F7A65] text-white py-4 rounded-xl font-bold text-lg hover:from-[#5F7A65] hover:to-[#4A5D4E] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Information'}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default MandatoryInfoForm;
