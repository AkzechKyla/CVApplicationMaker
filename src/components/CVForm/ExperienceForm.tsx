import UserInfo from "../../models/UserInfo";

interface Props {
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

interface Experience {
    positionName: string;
    companyName: string;
    yearStarted: string;
    yearEnded?: string;
    isPresent: boolean;
    descriptions: string[];
}

function ExperienceForm({ userInfo, setUserInfo }: Props) {
    return(
        <div className="bg-white max-w-full flex-1 p-3 drop-shadow-md rounded-lg space-y-3">

            {userInfo.experiences.map((experience, expIndex) => (
                <ExperienceItem key={expIndex} experience={experience} expIndex={expIndex}  />
            ))}

            <div className="flex justify-center">
                <button className="add-button">
                    <span className="text-lg">+</span> Experience
                </button>
            </div>

        </div>
    );
}

interface ExperienceItemProps {
    experience: Experience;
    expIndex: number;
}

function ExperienceItem({experience, expIndex}: ExperienceItemProps) {
    return <>
        <h1 className="font-bold">Experience</h1>

        <div className="flex justify-between">
            <p className="text-base font-bold">Experience {expIndex + 1}</p>
            <button>
                <span className="material-icons text-red-600">delete</span>
            </button>
        </div>

        <form className="space-y-2">
            <div>
                <label className="block text-sm font-bold">Position Name</label>
                <input type="text" value={experience.positionName} className="input-box" />
            </div>
            <div>
                <label className="block text-sm font-bold">Company Name</label>
                <input type="text" value={experience.companyName} className="input-box" />
            </div>
            <div className="flex gap-4 items-center">
                <div>
                    <label className="block text-sm font-bold">Year Started</label>
                    <input type="text" value={experience.yearStarted} className="input-box" />
                </div>
                <div>
                    <label className="block text-sm font-bold">Year Ended</label>

                    <div className="flex items-center gap-4">
                        <input type="text" value={experience.yearEnded} className="input-box" />

                        <div className="flex gap-1">
                            <input type="checkbox" checked={experience.isPresent} id="present" />
                            <label htmlFor="present" className="text-sm font-bold">Present</label>
                        </div>
                    </div>
                </div>
            </div>

            <DescriptionList descriptions={experience.descriptions}/>
        </form>

        <p className="block text-sm font-bold text-blue-600 hover:underline cursor-pointer">
            <span>+ </span>
            Add Description
        </p>
    </>;
}

interface DescriptionListProps {
    descriptions: string[];
}

function DescriptionList({ descriptions }: DescriptionListProps) {
    return <div>
        {descriptions.map((description, descIndex) => <div key={descIndex}>
            <label className="block text-sm font-bold">Description</label>
            <div className="flex gap-2">
                <textarea className="input-box" value={description}></textarea>
                <button>
                    <span className="material-icons text-red-600">delete</span>
                </button>
            </div>
        </div>)}
    </div>;
}

export default ExperienceForm;
