import React from 'react';
import './style.css';

// Contact Us page styled with TailwindCSS
// Interactive map via Google Maps embed (no API key required)
const ContactUs = () => {
    // Dễ dàng thay đổi địa điểm tại đây (sử dụng với Google Maps embed dạng query)
    const mapQuery = 'Đại học Bách khoa Hà Nội';
    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    const handleSubmit = (e) => {
        // Leave functionality empty per request
        e.preventDefault();
    };

    return (
        <div className="min-h-screen w-full bg-gray-50 pb-12">
            {/* Header / Breadcrumbs */}
            <div className="w-full bg-gray-300 border-b border-gray-200 mb-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between py-6">
                        <h1 className="m-0 text-2xl font-bold">Contact Us</h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-6">
                {/* Map */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-[560px]">
                        <iframe
                            title="Contact map"
                            className="w-full h-full border-0"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={mapSrc}>
                        </iframe>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8">
                    <h2 className="text-xl font-bold mb-1">Get In Touch With Us</h2>
                    <p className="text-gray-600 text-sm mb-6">
                        If you wish to directly reach us, please fill out the form below.
                    </p>

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        {/* Subject */}
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-4">
                            <label className="font-semibold text-gray-900">Subject</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white">
                                <option>Customer service</option>
                                <option>Technical support</option>
                                <option>Partnership</option>
                            </select>
                        </div>

                        {/* Email */}
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-4">
                            <label className="font-semibold text-gray-900">Email address</label>
                            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="your@email.com" />
                        </div>

                        {/* Attachment */}
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] items-center gap-4">
                            <label className="font-semibold text-gray-900">Attachment</label>
                            <input type="file" className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800" />
                            <span className="text-gray-600 text-sm">optional</span>
                        </div>

                        {/* Message */}
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start gap-4">
                            <label className="font-semibold text-gray-900">Message</label>
                            <textarea className="w-full min-h-[180px] px-3 py-2 border border-gray-300 rounded resize-y" placeholder="How can we help?"></textarea>
                        </div>

                        {/* Terms */}
                        <label className="flex items-start gap-2 text-gray-900">
                            <input type="checkbox" className="mt-1" />
                            <span className="text-sm">I agree to the terms and conditions and the privacy policy</span>
                        </label>

                        {/* Actions */}
                        <div className="flex justify-end pt-2">
                            <button type="submit" className="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded px-6 py-3 font-bold text-sm">
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;