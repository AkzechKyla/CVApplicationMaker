function SkillsForm() {
    return(
        <div className="bg-white max-w-full flex-1 p-3 drop-shadow-md rounded-lg space-y-3">
            <h1 className="font-bold">Skills</h1>

            <div className="flex justify-between">
                <p className="text-base font-bold">Skill 1</p>
                <button>
                    <span className="material-icons text-red-600">delete</span>
                </button>
            </div>

            <form className="space-y-2">
                <div>
                    <label className="block text-sm font-bold">Skill Name</label>
                    <input
                        type="text"
                        className="input-box"
                    />
                </div>
            </form>

            <div className="flex justify-center">
                <button className="add-button">
                    <span className="text-lg">+</span> Skill
                </button>
            </div>
        </div>
    );
}

export default SkillsForm;
