import React from 'react';
import '../../style.css';

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

            {/* Info strip under Contact Us */}
            <div className="max-w-6xl mx-auto px-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {/* Location */}
                    <div className="flex items-center gap-4 bg-gray-100 px-6 py-8 border border-gray-200">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-400 text-red-500">
                            {/* Map pin icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path fillRule="evenodd" d="M11.47 3.84a6.75 6.75 0 0 1 8.69 9.96l-6.07 6.07a2.25 2.25 0 0 1-3.18 0l-6.08-6.07a6.75 6.75 0 0 1 6.64-9.96Zm0 3.66a2.34 2.34 0 1 0 0 4.68 2.34 2.34 0 0 0 0-4.68Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <div className="text-gray-800">
                            <div className="text-sm text-gray-600">Address :</div>
                            <div className="font-medium">D9 Building, HUST</div>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4 bg-gray-100 px-6 py-8 border border-gray-200">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-400 text-red-500">
                            {/* Phone icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path d="M2.25 6.75A3 3 0 0 1 5.25 3.75h1.3a1.5 1.5 0 0 1 1.42 1.03l.87 2.61a1.5 1.5 0 0 1-.34 1.51L7.7 10.66a12.07 12.07 0 0 0 5.64 5.64l1.76-1.8a1.5 1.5 0 0 1 1.51-.34l2.61.87a1.5 1.5 0 0 1 1.03 1.42v1.3a3 3 0 0 1-3 3h-.75c-8.28 0-15-6.72-15-15v-.75Z" />
                            </svg>
                        </span>
                        <div className="text-gray-800">
                            <div className="text-sm text-gray-600">Call us :</div>
                            <div className="font-medium">+00 123-456-789</div>
                        </div>
                    </div>

                    {/* Mail */}
                    <div className="flex items-center gap-4 bg-gray-100 px-6 py-8 border border-gray-200">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-400 text-red-500">
                            {/* Mail icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Zm3.02-.75 7.73 5.16 7.73-5.16H4.52Zm15.73 12V8.14l-7.35 4.9a1.5 1.5 0 0 1-1.65 0L3.9 8.14v9.86h16.35Z" />
                            </svg>
                        </span>
                        <div className="text-gray-800">
                            <div className="text-sm text-gray-600">Mail us :</div>
                            <div className="font-medium">demo@example.com</div>
                        </div>
                    </div>

                    {/* Open time */}
                    <div className="flex items-center gap-4 bg-gray-100 px-6 py-8 border border-gray-200">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-400 text-red-500">
                            {/* Clock icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Zm.75 5.25a.75.75 0 0 0-1.5 0v5.19l3.62 2.17a.75.75 0 1 0 .76-1.29l-2.88-1.73V7.5Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <div className="text-gray-800">
                            <div className="text-sm text-gray-600">Open time :</div>
                            <div className="font-medium">10:00AM – 6:00PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;