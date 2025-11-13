import React from 'react';
import { Link } from 'react-router-dom';
import AccountFeature from './AccountFeature';
import '../../style.css';

// Inline SVG icons using currentColor for easy hover tinting
const IconUser = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 12c2.761 0 5-2.686 5-6s-2.239-6-5-6-5 2.686-5 6 2.239 6 5 6zm0 2c-3.866 0-7 2.91-7 6.5V22h14v-1.5C19 16.91 15.866 14 12 14z"/>
    </svg>
);
const IconPin = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
    </svg>
);
const IconCalendar = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm13 6H4v12h16V8z"/>
    </svg>
);
const IconReceipt = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M6 2h12l2 3v17l-4-2-4 2-4-2-4 2V5l2-3zm0 5v11.764L8 18l4 2 4-2 2 0.764V7H6zm2 2h8v2H8V9zm0 4h8v2H8v-2z"/>
    </svg>
);
const IconTag = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M10.586 2L2 10.586V22h11.414L22 13.414 10.586 2zM7 15a2 2 0 110-4 2 2 0 010 4z"/>
    </svg>
);
const IconHeart = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 21s-7.5-4.35-9.5-8.5C.76 9.21 2.5 6 5.5 6c1.83 0 3.04 1.02 3.74 2.06C9.96 7.02 11.17 6 13 6c3 0 4.74 3.21 3 6.5C19.5 16.65 12 21 12 21z"/>
    </svg>
);
const IconShield = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2l8 4v6c0 5.55-3.84 10.74-8 12-4.16-1.26-8-6.45-8-12V6l8-4z"/>
    </svg>
);

const features = [
    { to: '/#', title: 'Information', icon: <IconUser /> },
    { to: '/#', title: 'Addresses', icon: <IconPin /> },
    { to: '/#', title: 'Order history and details', icon: <IconCalendar /> },
    { to: '/#', title: 'Credit slips', icon: <IconReceipt /> },
    { to: '/#', title: 'Vouchers', icon: <IconTag /> },
    { to: '/#', title: 'My wishlists', icon: <IconHeart /> },
    { to: '/#', title: 'GDPR - Personal data', icon: <IconShield /> },
];

function MyAccount() {
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <header className="py-6">
                <h1 className="text-2xl font-semibold">Your account</h1>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f) => (
                    <AccountFeature key={f.to} to={f.to} title={f.title} icon={React.cloneElement(f.icon, { width: 40, height: 40 })} />
                ))}
            </section>

            <div className="text-center mt-12">
                <Link to="/logout" className="text-gray-600 hover:text-rose-500">Sign out</Link>
            </div>
        </div>
    );
}

export default MyAccount;