import React, { useState } from 'react';
import '../../style.css';

function DeveloperCard({ name, role, imageUrl }){
    return (
        <div className="group w-[250px] flex flex-col items-center my-6 mx-auto bg-white border-[3px] border-red-500 rounded-[10px] shadow transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col items-center">
                <img src={imageUrl} alt={`${name}'s profile`} className="w-[120px] h-[120px] rounded-full m-4 object-cover" />
                <h2 className="mb-2 font-semibold">{name}</h2>
            </div>
            <div className="w-full box-border px-4 max-h-0 overflow-hidden opacity-0 -translate-y-2 transition-[max-height,opacity,transform] duration-300 ease-in-out group-hover:max-h-[200px] group-hover:opacity-100 group-hover:translate-y-0 flex flex-col items-center">
                <p className="my-2 text-base text-gray-700">Role: {role}</p>
            </div>
        </div>
    );
}

function AboutUs() {
    const [active, setActive] = useState('project');
    // accordion state for the section below
    const [accordionOpen, setAccordionOpen] = useState('mission');

    return (
        <>
            <h1 className="p-6 my-6 mx-auto bg-gray-200 font-bold text-4xl text-left">About Us</h1>

            <div className="w-[94%] max-w-[1200px] mx-auto">
                
                {/* Tabs */}
                <div className="flex gap-0 pt-2">
                    {[
                        { key: 'project', label: 'Projects' },
                        { key: 'members', label: 'Team' }
                    ].map((tab, idx) => (
                        <button
                            key={tab.key}
                            className={`px-6 py-2 font-semibold cursor-pointer text-gray-800 border 
                                ${active === tab.key 
                                    ? 'bg-white border-gray-300 border-b-transparent relative z-[2]' 
                                    : 'bg-gray-100 hover:bg-black/5 border-transparent'
                                }
                                ${idx === 0 ? 'rounded-tl-md' : ''}
                                ${idx === 1 ? 'rounded-tr-md' : ''}
                            `}
                            onClick={() => setActive(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-white border border-gray-300 rounded-t-none rounded-md px-7 py-5 -mt-px">
                    {active === 'project' && (
                        <div className="project_card">
                            <h3 className="font-bold text-xl mb-2">NHOM18 ECOMMERCE</h3>
                            <p>A sample e-commerce website for the final project. Technology: React + Vite.</p>
                        </div>
                    )}

                    {active === 'members' && (
                        <div className="flex justify-center flex-wrap gap-4">
                            <DeveloperCard name = "Lê Thái Sơn" role= "Leader" imageUrl={'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/279350514_519102476427618_1563954500729583203_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFc1_vNZGt5XMEFTu0vHZrfbEi4ktSdzFZsSLiS1J3MVjaK4IuyH1uhrNfFfoJKL2ta71mdIBrdQegczR7YkHEA&_nc_ohc=3lyOA6K7zGYQ7kNvwEWuJcz&_nc_oc=Admma08eE-PbnMjjQl5b9vFNOTFHWdzSFPdHGXwFTw5PlyEPqkac25vnma9fJImJb-r1hvahvh_LKHylhIwd5sLq&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=EC1r3fflfGuvHyIrAs6c5g&oh=00_AfciwxuY_B6XL5kR3L5XOVZUFm1B_Jnwey1O_NFQ_j20tw&oe=68F67141'}/> 
                            <DeveloperCard name = "Đặng Minh Hoàng" role = "Member" imageUrl={'https://scontent.fhan19-1.fna.fbcdn.net/v/t1.15752-9/552768768_812051468025437_8765222866165740527_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGE8bKmq1iiMVlYJUEShqesTL2rYaxxQw5MvathrHFDDtqoaylZWNUpj0Ab4aWSwsxQTKMRLaWYFarM7FE_6qS0&_nc_ohc=N2cAOiBt1BIQ7kNvwHlDe9Z&_nc_oc=AdkOxfRH3j7O8Mf8z_O7CQ3xJgX80N4Hkb5bN2Rfnfwa_sXX4Mf-RtS5fHo4p3kGJ1E68PriuiVVvxen4mNYubJ1&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&oh=03_Q7cD3gHd5xTOkNZNw0vuK_tidnSSLCIfrXzRpmFfyusOC7Ygwg&oe=69182539'} /> 
                            <DeveloperCard name= {'Nguyễn Hoàng Phúc'} role={'Member'} imageUrl={'https://scontent.fhan19-1.fna.fbcdn.net/v/t1.6435-1/102559991_1187216998293360_4923904411557046749_n.jpg?stp=c103.96.768.768a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEKmwYI1RCHy4rP2UnFYsRapw_IkqdNsP6nD8iSp02w_jylQ83vdqKLsrsYi8Kf1dJg08nFvfgsQnqY_afh5AYy&_nc_ohc=nVSNzRl5KRAQ7kNvwFVYYff&_nc_oc=AdmqsNj8J042O30uSsbEm11b9WI3YTFg8XBY_gQv8lLrSx4MpKwikC9oIW4-mFmvCEYDLachyWqLeUYYCSEkfWKW&_nc_zt=24&_nc_ht=scontent.fhan19-1.fna&_nc_gid=xqYLjh4UUKgywmrtQdisbQ&oh=00_AfdhvYEPWNBXrt7UGi7WvvblDLA5qyaRfOEaBBrN8bJ4dA&oe=69182BEF'}/> 
                            <DeveloperCard name={'Lê Ngọc Thảo'} role={'Member'} imageUrl={'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/493100886_697762049382753_6851532536170488874_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHTj_7NMRA5MU3tfKM8ytlJWWkMKjZsvHlZaQwqNmy8eSsGNehAHCgTHZE_8BkEvyJX-mnvUbsBGvnsQ0qUS3zY&_nc_ohc=MbuNaw17XmcQ7kNvwHvAQK5&_nc_oc=Adk6WX2nSJBLFJlcAlYki72o7SCP9WI0NPM_CE0N8v-dNDfla4YbCwNdS68Op_kcBMOT-omrn51uWCiXslY4pVxp&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=6t8je_DE6iQGTfjQ-rW9qw&oh=00_Afd8h0jnd6tENB2L_2I-hO9efQ3zFyACG_nueWP6Ico0cQ&oe=68F691A9'}/>
                        </div>
                    )}
                </div>
            </div>

            {/* Image library */}
            <div className="mt-6 grid gap-6 p-4 md:p-6 grid-cols-1 lg:grid-cols-[1fr_1.618fr] w-[90%] mx-auto">
                <div>
                    <div className="h-[520px] rounded overflow-hidden bg-gray-200">
                        <img src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/about-page-01.jpg" alt="Library image 1" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="grid grid-rows-2 gap-6">
                    <div className="h-[248px] rounded overflow-hidden bg-gray-200">
                        <img src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/about-page-02.jpg" alt="Library image 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="h-[248px] rounded overflow-hidden bg-gray-200">
                            <img src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/about-page-03.jpg" alt="Library image 3" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[248px] rounded overflow-hidden bg-gray-200">
                            <img src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/about-page-04.jpg" alt="Library image 4" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Inspiration/Innovation section */}
            <section className="w-[94%] max-w-[1200px] mx-auto my-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
                    {/* Left column: heading + accordion */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Inspiration, innovation,
                            <br />
                            and opportunities.
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Many Desktop Publishing Packages And Web Page Editors Now Use Lorem Ipsum As Their Default Model Text.
                        </p>

                        <div className="bg-white border border-gray-200 rounded-md divide-y divide-gray-200">
                            {/* Item: Vision */}
                            <div>
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-between gap-3 py-4 px-4 text-left"
                                    aria-expanded={accordionOpen === 'vision'}
                                    onClick={() => setAccordionOpen(accordionOpen === 'vision' ? null : 'vision')}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 text-gray-600">
                                            {/* chevron icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-4 w-4 transition-transform ${accordionOpen === 'vision' ? '' : ''}`}>
                                                <path fillRule="evenodd" d="M12 14.5a1 1 0 0 1-.71-.29l-5-5a1 1 0 1 1 1.42-1.42L12 12.09l4.29-4.3a1 1 0 1 1 1.42 1.42l-5 5c-.19.19-.45.29-.71.29Z" />
                                            </svg>
                                        </span>
                                        <span className="font-semibold text-gray-900">Business’s vision</span>
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${accordionOpen === 'vision' ? 'max-h-40' : 'max-h-0'}`}>
                                    <div className="pb-4 px-4 pr-6 text-gray-700 leading-relaxed text-sm md:text-base">
                                        We aim to deliver delightful shopping experiences powered by modern technology and human‑centric design.
                                    </div>
                                </div>
                            </div>

                            {/* Item: Mission */}
                            <div>
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-between gap-3 py-4 px-4 text-left"
                                    aria-expanded={accordionOpen === 'mission'}
                                    onClick={() => setAccordionOpen(accordionOpen === 'mission' ? null : 'mission')}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 text-gray-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-4 w-4 transition-transform ${accordionOpen === 'mission' ? '' : ''}`}>
                                                <path fillRule="evenodd" d="M12 14.5a1 1 0 0 1-.71-.29l-5-5a1 1 0 1 1 1.42-1.42L12 12.09l4.29-4.3a1 1 0 1 1 1.42 1.42l-5 5c-.19.19-.45.29-.71.29Z" />
                                            </svg>
                                        </span>
                                        <span className="font-semibold text-gray-900">Our mission</span>
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${accordionOpen === 'mission' ? 'max-h-56' : 'max-h-0'}`}>
                                    <div className="pb-4 px-4 pr-6 text-gray-700 leading-relaxed text-sm md:text-base">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </div>
                                </div>
                            </div>

                            {/* Item: Support */}
                            <div>
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-between gap-3 py-4 px-4 text-left"
                                    aria-expanded={accordionOpen === 'support'}
                                    onClick={() => setAccordionOpen(accordionOpen === 'support' ? null : 'support')}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 text-gray-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-4 w-4 transition-transform ${accordionOpen === 'support' ? '' : ''}`}>
                                                <path fillRule="evenodd" d="M12 14.5a1 1 0 0 1-.71-.29l-5-5a1 1 0 1 1 1.42-1.42L12 12.09l4.29-4.3a1 1 0 1 1 1.42 1.42l-5 5c-.19.19-.45.29-.71.29Z" />
                                            </svg>
                                        </span>
                                        <span className="font-semibold text-gray-900">Our support</span>
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${accordionOpen === 'support' ? 'max-h-40' : 'max-h-0'}`}>
                                    <div className="pb-4 px-4 pr-6 text-gray-700 leading-relaxed text-sm md:text-base">
                                        Our support team is here to help with onboarding, troubleshooting, and any questions you have along the way.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column: image */}
                    <div className="order-1 lg:order-2">
                        <div className="rounded-md overflow-hidden bg-gray-100 border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1887&auto=format&fit=crop"
                                alt="Innovation illustration"
                                className="w-full h-[420px] md:h-[520px] object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features row */}
            <section className="max-w-6xl mx-auto px-4 my-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm px-8 py-10 text-center">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-md text-red-500 mb-4">
                            {/* Check icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
                                <path fillRule="evenodd" d="M2.25 12a9.75 9.75 0 1 1 19.5 0 9.75 9.75 0 0 1-19.5 0Zm14.28-3.53a.75.75 0 0 0-1.06-1.06l-5.72 5.72-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l6.25-6.25Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <h3 className="text-xl font-semibold mb-2">Submit a task</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm px-8 py-10 text-center">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-md text-red-500 mb-4">
                            {/* Message icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
                                <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v7.5A2.25 2.25 0 0 1 20.25 16.5H7.6l-4.3 3.23A.75.75 0 0 1 2.25 19.2V6.75Z" />
                            </svg>
                        </span>
                        <h3 className="text-xl font-semibold mb-2">Send message</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm px-8 py-10 text-center">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-md text-red-500 mb-4">
                            {/* User icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
                                <path fillRule="evenodd" d="M7.5 6.75a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM12 13.5a8.25 8.25 0 0 0-8.25 8.25.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75A8.25 8.25 0 0 0 12 13.5Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <h3 className="text-xl font-semibold mb-2">Trusted experience</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                    </div>
                </div>
            </section>

            {/* Parallax stats section */}
            <section className="my-10">
                <div
                    className="relative h-[320px] md:h-[380px] lg:h-[420px] bg-fixed bg-center bg-cover"
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=1974&auto=format&fit=crop)'
                    }}
                >
                    {/* subtle dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/35"></div>
                    <div className="relative z-[1] h-full max-w-6xl mx-auto px-4 flex items-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full text-center text-white">
                            <div>
                                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none">18+</div>
                                <div className="mt-2 text-base md:text-lg opacity-95">Years</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none">200+</div>
                                <div className="mt-2 text-base md:text-lg opacity-95">Employee</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none">85%</div>
                                <div className="mt-2 text-base md:text-lg opacity-95">Page Views</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none">27+</div>
                                <div className="mt-2 text-base md:text-lg opacity-95">Awards</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default AboutUs;
