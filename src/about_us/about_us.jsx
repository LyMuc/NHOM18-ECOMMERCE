import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function DeveloperCard({ name, role, imageUrl }){
    return (
        <>
            <div className="group w-[250px] flex flex-col items-center my-6 mx-auto bg-white border-[3px] border-red-500 rounded-[10px] shadow transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col items-center">
                    <img src={imageUrl} alt={`${name}'s profile`} className="w-[120px] h-[120px] rounded-full m-4 object-cover" />
                    <h2 className="mb-2 font-semibold">{name}</h2>
                </div>
                <div className="w-full box-border px-4 max-h-0 overflow-hidden opacity-0 -translate-y-2 transition-[max-height,opacity,transform] duration-300 ease-in-out group-hover:max-h-[200px] group-hover:opacity-100 group-hover:translate-y-0 flex flex-col items-center">
                    <p className="my-2 text-base text-gray-700">Role: {role}</p>
                    {/* you can add email, contact or a short bio here */}
                </div>
            </div>
        </>
    )
}

function AboutUs() {
        const [active, setActive] = useState('project'); // 'project' or 'members'

        return(
                <>
                    <h1 className="p-6 my-6 mx-auto bg-gray-200 font-bold text-4xl">About Us</h1>

                    <div className="flex justify-center gap-2 mx-auto pt-2">
                        <button
                            className={`px-5 py-2 rounded-t-md font-semibold cursor-pointer border border-transparent text-gray-800 ${active === 'project' ? 'bg-white border border-gray-300 border-b-white relative z-[2]' : 'hover:bg-black/5'}`}
                            onClick={() => setActive('project')}
                        >
                            Projects
                        </button>
                        <button
                            className={`px-5 py-2 rounded-t-md font-semibold cursor-pointer border border-transparent text-gray-800 ${active === 'members' ? 'bg-white border border-gray-300 border-b-white relative z-[2]' : 'hover:bg-black/5'}`}
                            onClick={() => setActive('members')}
                        >
                            Team
                        </button>
                    </div>

                    <div className="flex justify-center">
                        {active === 'project' && (
                            <div className="w-[94%] max-w-[1200px] bg-white border border-gray-300 rounded-md px-7 py-5 -mt-px">
                                <div className="project_card">
                                    <h3>NHOM18 ECOMMERCE</h3>
                                    <p>A sample e-commerce website for the final project. Technology: React + Vite.</p>
                                </div>
                            </div>
                        )}

                        {active === 'members' && (
                            <div className="w-[94%] max-w-[1200px] bg-white border border-gray-300 rounded-md px-7 py-5 -mt-px">
                                <div className="flex justify-center flex-wrap gap-4">
                                <DeveloperCard name = "Lê Thái Sơn" role= "Leader" imageUrl={'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/279350514_519102476427618_1563954500729583203_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFc1_vNZGt5XMEFTu0vHZrfbEi4ktSdzFZsSLiS1J3MVjaK4IuyH1uhrNfFfoJKL2ta71mdIBrdQegczR7YkHEA&_nc_ohc=3lyOA6K7zGYQ7kNvwEWuJcz&_nc_oc=Admma08eE-PbnMjjQl5b9vFNOTFHWdzSFPdHGXwFTw5PlyEPqkac25vnma9fJImJb-r1hvahvh_LKHylhIwd5sLq&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=EC1r3fflfGuvHyIrAs6c5g&oh=00_AfciwxuY_B6XL5kR3L5XOVZUFm1B_Jnwey1O_NFQ_j20tw&oe=68F67141'}/>
                                <DeveloperCard name = "Đặng Minh Hoàng" role = "Member" imageUrl={'https://scontent.fhan19-1.fna.fbcdn.net/v/t1.15752-9/552768768_812051468025437_8765222866165740527_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGE8bKmq1iiMVlYJUEShqesTL2rYaxxQw5MvathrHFDDtqoaylZWNUpj0Ab4aWSwsxQTKMRLaWYFarM7FE_6qS0&_nc_ohc=N2cAOiBt1BIQ7kNvwHlDe9Z&_nc_oc=AdkOxfRH3j7O8Mf8z_O7CQ3xJgX80N4Hkb5bN2Rfnfwa_sXX4Mf-RtS5fHo4p3kGJ1E68PriuiVVvxen4mNYubJ1&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&oh=03_Q7cD3gHd5xTOkNZNw0vuK_tidnSSLCIfrXzRpmFfyusOC7Ygwg&oe=69182539'} />
                                <DeveloperCard name= {'Nguyễn Hoàng Phúc'} role={'Member'} imageUrl={'https://scontent.fhan19-1.fna.fbcdn.net/v/t1.6435-1/102559991_1187216998293360_4923904411557046749_n.jpg?stp=c103.96.768.768a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEKmwYI1RCHy4rP2UnFYsRapw_IkqdNsP6nD8iSp02w_jylQ83vdqKLsrsYi8Kf1dJg08nFvfgsQnqY_afh5AYy&_nc_ohc=nVSNzRl5KRAQ7kNvwFVYYff&_nc_oc=AdmqsNj8J042O30uSsbEm11b9WI3YTFg8XBY_gQv8lLrSx4MpKwikC9oIW4-mFmvCEYDLachyWqLeUYYCSEkfWKW&_nc_zt=24&_nc_ht=scontent.fhan19-1.fna&_nc_gid=xqYLjh4UUKgywmrtQdisbQ&oh=00_AfdhvYEPWNBXrt7UGi7WvvblDLA5qyaRfOEaBBrN8bJ4dA&oe=69182BEF'}/>
                                <DeveloperCard name={'Lê Ngọc Thảo'} role={'Member'} imageUrl={'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/493100886_697762049382753_6851532536170488874_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHTj_7NMRA5MU3tfKM8ytlJWWkMKjZsvHlZaQwqNmy8eSsGNehAHCgTHZE_8BkEvyJX-mnvUbsBGvnsQ0qUS3zY&_nc_ohc=MbuNaw17XmcQ7kNvwHvAQK5&_nc_oc=Adk6WX2nSJBLFJlcAlYki72o7SCP9WI0NPM_CE0N8v-dNDfla4YbCwNdS68Op_kcBMOT-omrn51uWCiXslY4pVxp&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=6t8je_DE6iQGTfjQ-rW9qw&oh=00_Afd8h0jnd6tENB2L_2I-hO9efQ3zFyACG_nueWP6Ico0cQ&oe=68F691A9'}/>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Image library (TailwindCSS) - placed AFTER the tab content */}
                    <div className="mt-6 grid gap-6 p-4 md:p-6 grid-cols-1 lg:grid-cols-[1fr_1.618fr] w-[90%] mx-auto">
                        {/* Left large tile spanning full left column */}
                        <div>
                            <div className="h-[520px] rounded overflow-hidden bg-gray-200">
                                <img src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/about-page-01.jpg" alt="Library image 1" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Right column: 1 top + 2 bottom */}
                        <div className="grid grid-rows-2 gap-6">
                            {/* Top tile */}
                            {/* 248px so (248 + gap-6(24) + 248) = 520 to match left */}
                            <div className="h-[248px] rounded overflow-hidden bg-gray-200">
                                <img src="https://prestashop.codezeel.com/PRS21/PRS210502/default/img/cms/about-page-02.jpg" alt="Library image 2" className="w-full h-full object-cover" />
                            </div>
                            {/* Bottom row with two tiles */}
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

                    {/* end */}
                </>
        )
}
createRoot(document.getElementById('root')).render(
    <StrictMode>
      <AboutUs />
    </StrictMode>
);
export default AboutUs;