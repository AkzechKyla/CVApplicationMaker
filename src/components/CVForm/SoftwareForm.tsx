import UserInfo from "../../models/UserInfo";

interface Props {
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

function SoftwareForm({ userInfo, setUserInfo }: Props) {
    return(
        <div className="bg-white max-w-full flex-1 p-3 drop-shadow-md rounded-lg space-y-3">
            <h1 className="font-bold">Software</h1>

            {userInfo.softwareList.map((software, index) => (
                <div key={index} className="flex justify-between gap-2 space-y-2">
                    <input
                        type="text"
                        value={software}
                        className="input-box"
                    />
                    <button>
                        <span className="material-icons text-red-600">delete</span>
                    </button>
                </div>
            ))}

            <div className="flex justify-center">
                <button className="add-button">
                    <span className="text-lg">+</span> Software
                </button>
            </div>
        </div>
    );
}

export default SoftwareForm;
