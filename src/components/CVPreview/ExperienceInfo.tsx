import UserInfo from "../../models/UserInfo";

interface Props {
    userInfo: UserInfo;
}

export function ExperienceInfo({ userInfo }: Props) {
    return <div>
        <div className="flex items-center">
            <span className="material-icons text-3xl">work</span>
            <h1 className="font-bold ml-2">Experience</h1>
        </div>
        <hr className="border-gray-400 mb-2"/>

        {userInfo.experiences.map((experience, index) => (
            <div key={index} className="flex w-full mb-2">
                <div className="w-2/6 font-bold text-sm">{experience.dateStarted} - {experience.isPresent ? 'present' : experience.dateEnded}</div>
                <div className="w-full space-y-1">
                    <p className="font-bold">{experience.positionName}</p>
                    <p className="text-sm italic">{experience.companyName}</p>
                    <ul className="list-disc pl-8 text-sm space-y-2">
                        {experience.descriptions.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}

    </div>
}
