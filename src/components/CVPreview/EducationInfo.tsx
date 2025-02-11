import UserInfo from "../../models/UserInfo";

interface Props {
    userInfo: UserInfo;
}

export function EducationInfo({ userInfo }: Props) {
    return <>
        <div className="flex items-center">
            <span className="material-icons text-3xl">school</span>
            <h1 className="font-bold ml-2">Education</h1>
        </div>
        <hr className="border-gray-400 mb-2"/>

        {userInfo.educations.map((education, index) => (
            <div key={index} className="flex w-full">
                <div className="w-2/6 font-bold text-sm">{education.startDate} - {education.isPresent ? education.isPresent : education.startDate}</div>
                <div className="w-full">
                    <p className="font-bold pb-2">{education.degree}, {education.schoolName}</p>
                    <ul className="list-disc pl-8 text-sm space-y-2">
                        {education.descriptions.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </>
}
