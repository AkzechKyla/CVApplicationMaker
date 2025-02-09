import UserInfo from "../../models/UserInfo";

interface Props {
    userInfo: UserInfo;
}

export function PersonalDetailsInfo({ userInfo }: Props) {
    return(
        <div className="pb-4 text-sm">
            <p className="font-bold text-4xl mb-1">{userInfo.fullName}</p>
            <p className="text-lg mb-6">{userInfo.position}</p>
            <div className="grid grid-cols-3 mb-6 gap-y-2 w-full">
                <p className="inline text-sm">{userInfo.contactNumber}</p>
                <p className="inline text-sm">{userInfo.email}</p>
                <p className="inline text-sm">{userInfo.cityProvince}</p>
            </div>
            <p className="text-sm">{userInfo.description}</p>
        </div>
    )
}
