import UserInfo from "../../models/UserInfo";

interface Props {
    userInfo: UserInfo;
}

export function SkillsInfo({ userInfo }: Props) {
    return(
        <div>
            <div className="flex items-center">
                <span className="material-icons text-3xl">lightbulb</span>
                <h1 className="font-bold ml-2">Skills</h1>
            </div>
            <hr className="border-gray-400 mb-2"/>
            <div className="flex w-full">
                <div className="w-2/6"></div>
                <div className="w-full text-sm space-y-2">
                    {userInfo.skills.map((skill, index) => (
                        <p key={index}><b>{skill.skillName}</b> -
                            {skill.descriptions.map((description, index) => (
                                <span key={index}> {description}</span>
                            ))}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
