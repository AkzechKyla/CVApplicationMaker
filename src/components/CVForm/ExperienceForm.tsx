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
    function addExperience() {
        const newExperience: Experience = {
            positionName: '',
            companyName: '',
            yearStarted: '',
            yearEnded: '',
            isPresent: false,
            descriptions: []
        };
        setUserInfo({
            ...userInfo,
            experiences: [...userInfo.experiences, newExperience]});
    }

    function updateExperience(expIndex: number, key: string, value: string | boolean) {
        const updatedExperiences = [...userInfo.experiences];
        updatedExperiences[expIndex][key] = value;
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
    updateExperience: (expIndex: number, key: string, value: string | boolean) => void;
    removeExperience: (expIndex: number) => void;
}

function ExperienceItem({userInfo, setUserInfo, experience, expIndex, updateExperience, removeExperience}: ExperienceItemProps) {
    function addDescription(expIndex: number) {
        const updatedExperiences = [...userInfo.experiences];
        updatedExperiences[expIndex].descriptions.push('');
        setUserInfo({...userInfo, experiences: updatedExperiences});
    }

    function updateDescription(expIndex: number, descIndex: number, value: string) {
        const updatedExperiences = [...userInfo.experiences];
        updatedExperiences[expIndex].descriptions[descIndex] = value;
        setUserInfo({...userInfo, experiences: updatedExperiences});
    }

    function removeDescription(expIndex: number, descIndex: number) {
        const updatedExperiences = [...userInfo.experiences];
        updatedExperiences[expIndex].descriptions.splice(descIndex, 1);
        setUserInfo({...userInfo, experiences: updatedExperiences});
    }

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
                    <label className="block text-sm font-bold">Year Started</label>
                    <input
                        type="text"
                        value={experience.yearStarted}
                        className="input-box"
                        onChange={(e) => {updateExperience(expIndex, 'yearStarted', e.target.value)}}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold">Year Ended</label>

                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            value={experience.yearEnded}
                            className="input-box"
                            onChange={(e) => {updateExperience(expIndex, 'yearEnded', e.target.value)}}
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
                expIndex={expIndex}
                descriptions={experience.descriptions}
                updateDescription={updateDescription}
                removeDescription={removeDescription}
            />
        </form>

        <p
            className="block text-sm font-bold text-blue-600 hover:underline cursor-pointer"
            onClick={() => addDescription(expIndex)}
        >
            <span>+ </span>
            Add Description
        </p>
    </>;
}

interface DescriptionListProps {
    expIndex: number;
    descriptions: string[];
    updateDescription: (expIndex: number, descIndex: number, value: string) => void;
    removeDescription: (expIndex: number, descIndex: number) => void;
}

function DescriptionList({ expIndex, descriptions, updateDescription, removeDescription }: DescriptionListProps) {
    return <div>
        {descriptions.map((description, descIndex) => <div key={descIndex}>
            <label className="block text-sm font-bold">Description</label>
            <div className="flex gap-2">
                <textarea
                    className="input-box"
                    value={description}
                    onChange={(e) => updateDescription(expIndex, descIndex, e.target.value)}>
                </textarea>
                <button onClick={(e) => {
                    e.preventDefault();
                    removeDescription(expIndex, descIndex);
                }}>
                    <span className="material-icons text-red-600">delete</span>
                </button>
            </div>
        </div>)}
    </div>;
}

export default ExperienceForm;
