import React, { StrictMode, useState } from 'react';
import './about_us.css';
import { createRoot } from 'react-dom/client';

function DeveloperCard({ name, role, imageUrl }){
    return (
        <>
            <div className="dev_container">
                <div className="dev_preview">
                    <img src={imageUrl} alt={`${name}'s profile`} className="dev_image" />
                    <h2 className="dev_name">{name}</h2>
                </div>
                <div className="dev_details">
                    <p className="dev_role">Vai trò: {role}</p>
                    {/* bạn có thể thêm email, liên hệ hoặc mô tả ngắn ở đây */}
                </div>
            </div>
        </>
    )
}

function AboutUs() {
        const [active, setActive] = useState('project'); // 'project' or 'members'

        return(
                <>
                    <h1>Về Chúng Tôi</h1>

                    <div className="tabs">
                        <button className={`tab_button ${active === 'project' ? 'active' : ''}`} onClick={() => setActive('project')}>Dự án</button>
                        <button className={`tab_button ${active === 'members' ? 'active' : ''}`} onClick={() => setActive('members')}>Thành viên</button>
                    </div>

                    <div className="tab_content">
                        {active === 'project' && (
                            <div className="projects_section">
                                <div className="project_card">
                                    <h3>NHOM18 ECOMMERCE</h3>
                                    <p>Trang web thương mại điện tử mẫu cho bài tập lớn. Công nghệ: React + Vite.</p>
                                </div>
                            </div>
                        )}

                        {active === 'members' && (
                            <div className="members_section" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
                                <DeveloperCard name = "Lê Thái Sơn" role= "Trưởng nhóm" imageUrl={'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/279350514_519102476427618_1563954500729583203_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFc1_vNZGt5XMEFTu0vHZrfbEi4ktSdzFZsSLiS1J3MVjaK4IuyH1uhrNfFfoJKL2ta71mdIBrdQegczR7YkHEA&_nc_ohc=3lyOA6K7zGYQ7kNvwEWuJcz&_nc_oc=Admma08eE-PbnMjjQl5b9vFNOTFHWdzSFPdHGXwFTw5PlyEPqkac25vnma9fJImJb-r1hvahvh_LKHylhIwd5sLq&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=EC1r3fflfGuvHyIrAs6c5g&oh=00_AfciwxuY_B6XL5kR3L5XOVZUFm1B_Jnwey1O_NFQ_j20tw&oe=68F67141'}/>
                                <DeveloperCard name = "Đặng Minh Hoàng" role = "Thành viên" imageUrl={'https://scontent.fhan19-1.fna.fbcdn.net/v/t1.15752-9/552768768_812051468025437_8765222866165740527_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGE8bKmq1iiMVlYJUEShqesTL2rYaxxQw5MvathrHFDDtqoaylZWNUpj0Ab4aWSwsxQTKMRLaWYFarM7FE_6qS0&_nc_ohc=N2cAOiBt1BIQ7kNvwHlDe9Z&_nc_oc=AdkOxfRH3j7O8Mf8z_O7CQ3xJgX80N4Hkb5bN2Rfnfwa_sXX4Mf-RtS5fHo4p3kGJ1E68PriuiVVvxen4mNYubJ1&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&oh=03_Q7cD3gHd5xTOkNZNw0vuK_tidnSSLCIfrXzRpmFfyusOC7Ygwg&oe=69182539'} />
                                <DeveloperCard name= {'Nguyễn Hoàng Phúc'} role={'Thành viên'} imageUrl={'https://scontent.fhan19-1.fna.fbcdn.net/v/t1.6435-1/102559991_1187216998293360_4923904411557046749_n.jpg?stp=c103.96.768.768a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEKmwYI1RCHy4rP2UnFYsRapw_IkqdNsP6nD8iSp02w_jylQ83vdqKLsrsYi8Kf1dJg08nFvfgsQnqY_afh5AYy&_nc_ohc=nVSNzRl5KRAQ7kNvwFVYYff&_nc_oc=AdmqsNj8J042O30uSsbEm11b9WI3YTFg8XBY_gQv8lLrSx4MpKwikC9oIW4-mFmvCEYDLachyWqLeUYYCSEkfWKW&_nc_zt=24&_nc_ht=scontent.fhan19-1.fna&_nc_gid=xqYLjh4UUKgywmrtQdisbQ&oh=00_AfdhvYEPWNBXrt7UGi7WvvblDLA5qyaRfOEaBBrN8bJ4dA&oe=69182BEF'}/>
                                <DeveloperCard name={'Lê Ngọc Thảo'} role={'Thành viên'} imageUrl={'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/493100886_697762049382753_6851532536170488874_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHTj_7NMRA5MU3tfKM8ytlJWWkMKjZsvHlZaQwqNmy8eSsGNehAHCgTHZE_8BkEvyJX-mnvUbsBGvnsQ0qUS3zY&_nc_ohc=MbuNaw17XmcQ7kNvwHvAQK5&_nc_oc=Adk6WX2nSJBLFJlcAlYki72o7SCP9WI0NPM_CE0N8v-dNDfla4YbCwNdS68Op_kcBMOT-omrn51uWCiXslY4pVxp&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=6t8je_DE6iQGTfjQ-rW9qw&oh=00_Afd8h0jnd6tENB2L_2I-hO9efQ3zFyACG_nueWP6Ico0cQ&oe=68F691A9'}/>
                            </div>
                        )}
                    </div>
                </>
        )
}
createRoot(document.getElementById('root')).render(
    <StrictMode>
      <AboutUs />
    </StrictMode>
);