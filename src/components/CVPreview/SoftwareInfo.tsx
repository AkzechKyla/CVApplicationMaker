import UserInfo from "../../models/UserInfo";

interface Props {
    userInfo: UserInfo
}

export function SoftwareInfo({ userInfo }: Props) {
    return(
        <div>
            <div className="flex items-center">
                <span className="material-icons text-3xl">computer</span>
                <h1 className="font-bold ml-2">Software</h1>
            </div>
            <hr className="border-gray-400 mb-2"/>
            <div className="flex w-full">
                <div className="w-1/4"></div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                    {userInfo.softwareList.map((software, index) => (
                        <p key={index} className="w-full">{software}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
