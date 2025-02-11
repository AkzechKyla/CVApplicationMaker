import UserInfo from "../../models/UserInfo";

interface Props {
    index: number;
    descriptions: string[];
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

function DescriptionList({ index, descriptions, userInfo, setUserInfo }: Props) {
    function addDescription(index: number) {
        const updatedExperiences = [...userInfo.experiences];
        updatedExperiences[index].descriptions.push('');
        setUserInfo({...userInfo, experiences: updatedExperiences});
    }

    function updateDescription(index: number, descIndex: number, value: string) {
        const updatedExperiences = [...userInfo.experiences];
        updatedExperiences[index].descriptions[descIndex] = value;
        setUserInfo({...userInfo, experiences: updatedExperiences});
    }

    function removeDescription(index: number, descIndex: number) {
        const updatedExperiences = [...userInfo.experiences];
        updatedExperiences[index].descriptions.splice(descIndex, 1);
        setUserInfo({...userInfo, experiences: updatedExperiences});
    }

    return <div>
        {descriptions.map((description, descIndex) => <div key={descIndex}>
            <label className="block text-sm font-bold">Description</label>
            <div className="flex gap-2">
                <textarea
                    className="input-box"
                    value={description}
                    onChange={(e) => updateDescription(index, descIndex, e.target.value)}>
                </textarea>
                <button onClick={(e) => {
                    e.preventDefault();
                    removeDescription(index, descIndex);
                }}>
                    <span className="material-icons text-red-600">delete</span>
                </button>
            </div>
        </div>)}

        <p
            className="block text-sm font-bold text-blue-600 hover:underline cursor-pointer"
            onClick={() => addDescription(index)}
        >
            <span>+ </span>
            Add Description
        </p>
    </div>;
}

export default DescriptionList;
