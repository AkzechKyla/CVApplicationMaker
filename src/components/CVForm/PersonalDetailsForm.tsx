function PersonalDetailsForm() {
    return (
        <div className="bg-white max-w-full flex-1 p-3 drop-shadow-md rounded-lg space-y-3">
            <h1 className="font-bold">Personal Details</h1>
            <form className="space-y-2">
                <div>
                    <label className="block text-sm font-bold">Full Name</label>
                    <input type="text" className="input-box" />
                </div>
                <div>
                    <label className="block text-sm font-bold">Position</label>
                    <input type="text" className="input-box" />
                </div>
                <div>
                    <label className="block text-sm font-bold">Contact Number</label>
                    <input type="text" className="input-box" />
                </div>
                <div>
                    <label className="block text-sm font-bold">Email Address</label>
                    <input type="email" className="input-box" />
                </div>
                <div>
                    <label className="block text-sm font-bold">City and Province</label>
                    <input type="text" className="input-box" />
                </div>
                <div>
                    <label className="block text-sm font-bold">Description</label>
                    <textarea className="input-box"></textarea>
                </div>
            </form>
        </div>
    );
}

export default PersonalDetailsForm;
