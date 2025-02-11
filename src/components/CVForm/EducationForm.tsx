import UserInfo from "../../models/UserInfo";
import DescriptionList from "./DescriptionList";

interface Props {
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

interface Education {
    schoolName: string;
    degree: string;
    startDate: string;
    endDate?: string;
    isPresent: boolean;
    descriptions: string[];
  }

function EducationForm({ userInfo, setUserInfo }: Props) {
    function addEducation() {
        const newEducation: Education = {
            schoolName: '',
            degree: '',
            startDate: '',
            endDate: '',
            isPresent: false,
            descriptions: []
        };
        setUserInfo({
            ...userInfo,
            educations: [...userInfo.educations, newEducation]
        });
    }

    function removeEducation(index: number) {
        const updatedEducations = [...userInfo.educations];
        updatedEducations.splice(index, 1);
        setUserInfo({...userInfo, educations: updatedEducations});
    }

    return(
        <div className="bg-white max-w-full flex-1 p-3 drop-shadow-md rounded-lg space-y-3">
            <h1 className="font-bold">Education</h1>

            {userInfo.educations.map((education, index) => (
                <EducationItem
                    index={index}
                    education={education}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                    removeEducation={removeEducation}
                />
            ))}

            <div className="flex justify-center">
                <button className="add-button" onClick={addEducation}>
                    <span className="text-lg">+</span> Education
                </button>
            </div>
        </div>
    );
}

interface EducationItem {
    index: number;
    education: Education;
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
    removeEducation: (index: number) => void;
}

function EducationItem({ index, education, userInfo, setUserInfo, removeEducation }: EducationItem) {
    return <>
        <div className="flex justify-between">
            <p className="text-base font-bold">Education {index + 1}</p>
            <button onClick={() => removeEducation(index)}>
                <span className="material-icons text-red-600">delete</span>
            </button>
        </div>

        <form className="space-y-2">
            <div>
                <label className="block text-sm font-bold">Degree</label>
                <input
                    type="text"
                    value={education.degree}
                    className="input-box" />
            </div>
            <div>
                <label className="block text-sm font-bold">School Name</label>
                <input
                    type="text"
                    value={education.schoolName}
                    className="input-box" />
            </div>
            <div className="flex gap-4 items-center">
                <div>
                    <label className="block text-sm font-bold">Start Date</label>
                    <input
                        type="month"
                        value={education.startDate}
                        className="input-box"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold">End Date</label>

                    <div className="flex items-center gap-4">
                        <input
                            type="month"
                            value={education.endDate}
                            className="input-box"
                        />

                        <div className="flex gap-1">
                            <input type="checkbox" id="present" />
                            <label htmlFor="present" className="text-sm font-bold">Present</label>
                        </div>
                    </div>
                </div>
            </div>

            <DescriptionList
                index={index}
                descriptions={education.descriptions}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                category="educations"
            />
        </form>
    </>
}

export default EducationForm;
