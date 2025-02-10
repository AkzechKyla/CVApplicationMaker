import UserInfo from "../../models/UserInfo";

interface Props {
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

function ExperienceForm({ userInfo, setUserInfo }: Props) {
    return(
        <div className="bg-white max-w-full flex-1 p-3 drop-shadow-md rounded-lg space-y-3">
            <ExperienceItem/>

            <div className="flex justify-center">
                <button className="add-button">
                    <span className="text-lg">+</span> Experience
                </button>
            </div>

        </div>
    );
}

function ExperienceItem() {
    return <>
        <h1 className="font-bold">Experience</h1>

        <div className="flex justify-between">
            <p className="text-base font-bold">Experience 1</p>
            <button>
                <span className="material-icons text-red-600">delete</span>
            </button>
        </div>

        <form className="space-y-2">
            <div>
                <label className="block text-sm font-bold">Position Name</label>
                <input type="text" className="input-box" />
            </div>
            <div>
                <label className="block text-sm font-bold">Company Name</label>
                <input type="text" className="input-box" />
            </div>
            <div className="flex gap-4 items-center">
                <div>
                    <label className="block text-sm font-bold">Year Started</label>
                    <input type="text" className="input-box" />
                </div>
                <div>
                    <label className="block text-sm font-bold">Year Ended</label>

                    <div className="flex items-center gap-4">
                        <input type="text" className="input-box" />

                        <div className="flex gap-1">
                            <input type="checkbox" id="present" />
                            <label htmlFor="present" className="text-sm font-bold">Present</label>
                        </div>
                    </div>
                </div>
            </div>

            <DescriptionList/>
        </form>

        <p className="block text-sm font-bold text-blue-600 hover:underline cursor-pointer">
            <span>+ </span>
            Add Description
        </p>
    </>;
}

function DescriptionList() {
    return <div>
        <label className="block text-sm font-bold">Description</label>

        <div className="flex gap-2">
            <textarea className="input-box"></textarea>
            <button>
                <span className="material-icons text-red-600">delete</span>
            </button>
        </div>
    </div>;
}

export default ExperienceForm;
