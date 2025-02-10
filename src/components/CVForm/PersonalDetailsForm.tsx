import UserInfo from "../../models/UserInfo";

interface Props {
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

function PersonalDetailsForm({ userInfo, setUserInfo }: Props) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <div className="bg-white max-w-full flex-1 p-3 drop-shadow-md rounded-lg space-y-3">
            <h1 className="font-bold">Personal Details</h1>
            <form className="space-y-2">
                <div>
                    <label className="block text-sm font-bold">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        className="input-box"
                        value={userInfo.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold">Position</label>
                    <input
                        type="text"
                        name="position"
                        className="input-box"
                        value={userInfo.position}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold">Contact Number</label>
                    <input
                        type="text"
                        name="contactNumber"
                        className="input-box"
                        value={userInfo.contactNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        className="input-box"
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold">City and Province</label>
                    <input
                        type="text"
                        name="cityProvince"
                        className="input-box"
                        value={userInfo.cityProvince}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold">Description</label>
                    <textarea
                        name="description"
                        className="input-box"
                        value={userInfo.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </form>
        </div>
    );
}

export default PersonalDetailsForm;
