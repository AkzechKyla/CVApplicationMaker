import UserInfo from "../../models/UserInfo";
import DescriptionList from "./DescriptionList";
import Experience from "../../models/Experience";

interface Props {
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

function ExperienceForm({ userInfo, setUserInfo }: Props) {
    function addExperience() {
        const newExperience: Experience = {
            positionName: '',
            companyName: '',
            startDate: '',
            endDate: '',
            isPresent: false,
            descriptions: []
        };
        setUserInfo({
            ...userInfo,
            experiences: [...userInfo.experiences, newExperience]});
    }

    function updateExperience(expIndex: number, key: keyof Experience, value: string | boolean) {
        const updatedExperiences = [...userInfo.experiences];
        (updatedExperiences[expIndex][key] as typeof value) = value;
        setUserInfo({...userInfo, experiences: updatedExperiences});
    }

    function removeExperience(expIndex: number) {
        const updatedExperiences = [...userInfo.experiences];
        updatedExperiences.splice(expIndex, 1);
        setUserInfo({...userInfo, experiences: updatedExperiences});
    }

    return(
        <div className="bg-white max-w-full flex-1 p-3 drop-shadow-md rounded-lg space-y-3">
            <h1 className="font-bold">Experience</h1>

            {userInfo.experiences.map((experience, expIndex) => (
                <ExperienceItem
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                    key={expIndex}
                    expIndex={expIndex}
                    experience={experience}
                    updateExperience={updateExperience}
                    removeExperience={removeExperience}
                />
            ))}

            <div className="flex justify-center">
                <button className="add-button" onClick={addExperience}>
                    <span className="text-lg">+</span> Experience
                </button>
            </div>

        </div>
    );
}

interface ExperienceItemProps {
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
    experience: Experience;
    expIndex: number;
    updateExperience: (expIndex: number, key: keyof Experience, value: string | boolean) => void;
    removeExperience: (expIndex: number) => void;
}

function ExperienceItem({userInfo, setUserInfo, experience, expIndex, updateExperience, removeExperience}: ExperienceItemProps) {
    return <>
        <div className="flex justify-between">
            <p className="text-base font-bold">Experience {expIndex + 1}</p>
            <button onClick={() => removeExperience(expIndex)}>
                <span className="material-icons text-red-600">delete</span>
            </button>
        </div>

        <form className="space-y-2">
            <div>
                <label className="block text-sm font-bold">Position Name</label>
                <input
                    type="text"
                    value={experience.positionName}
                    className="input-box"
                    onChange={(e) => {updateExperience(expIndex, 'positionName', e.target.value)}}
                />
            </div>
            <div>
                <label className="block text-sm font-bold">Company Name</label>
                <input
                    type="text"
                    value={experience.companyName}
                    className="input-box"
                    onChange={(e) => {updateExperience(expIndex, 'companyName', e.target.value)}}
                />
            </div>
            <div className="flex gap-4 items-center">
                <div>
                    <label className="block text-sm font-bold">Date Started</label>
                    <input
                        type="month"
                        value={experience.startDate}
                        className="input-box"
                        onChange={(e) => {updateExperience(expIndex, 'startDate', e.target.value)}}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold">Date Ended</label>

                    <div className="flex items-center gap-4">
                        <input
                            type="month"
                            value={experience.endDate}
                            className="input-box"
                            onChange={(e) => {updateExperience(expIndex, 'endDate', e.target.value)}}
                        />

                        <div className="flex gap-1">
                            <input
                                type="checkbox"
                                checked={experience.isPresent}
                                onChange={(e) => updateExperience(expIndex, 'isPresent', e.target.checked)}
                            />
                            <label htmlFor="present" className="text-sm font-bold">Present</label>
                        </div>
                    </div>
                </div>
            </div>

            <DescriptionList
                index={expIndex}
                descriptions={experience.descriptions}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                category="experiences"
            />
        </form>
    </>;
}

export default ExperienceForm;
