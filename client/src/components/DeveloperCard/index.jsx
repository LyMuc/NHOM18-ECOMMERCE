function DeveloperCard({ name, role, imageUrl }){
    return (
        <>
            <div className="dev_container">
                <div className="dev_preview">
                    <img src={imageUrl} alt={`${name}'s profile`} className="dev_image" />
                    <h2 className="dev_name">{name}</h2>
                </div>
                <div className="dev_details">
                    <p className="dev_role">Role: {role}</p>
                    {/* you can add email, contact or a short bio here */}
                </div>
            </div>
        </>
    )
}

export default DeveloperCard;