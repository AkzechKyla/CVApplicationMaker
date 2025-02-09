function SkillsForm() {
    return(
        <div className="bg-white max-w-full flex-1 p-3 drop-shadow-md rounded-lg space-y-3">
            <p>Skills</p>

            <div className="flex justify-between">
                <p>Skill 1</p>
                <p>Delete</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <p>Vendor Management</p>
                <p>proven track record of managing vendors in projects with budgets of over $1,000,000.</p>
            </div>
            <p>+Add Skill</p>
        </div>
    );
}

export default SkillsForm;
