import { useState } from 'react';

function ExperienceForm() {
    const [toggleForm, setToggleForm] = useState(false);

    return(
        <div className="bg-white max-w-full flex-1 p-3 drop-shadow-md rounded-lg space-y-3">
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
                        <label className="block text-sm font-bold">Start Date</label>
                        <input type="date" className="input-box" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold">End Date</label>

                        <div className="flex items-center gap-4">
                            <input type="date" className="input-box" />

                            <div className="flex gap-1">
                                <input type="checkbox" id="present" />
                                <label htmlFor="present" className="text-sm font-bold">Present</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold">Description</label>
                    <textarea className="input-box"></textarea>
                </div>
            </form>

            <p className="block text-sm font-bold text-blue-600 hover:underline cursor-pointer">
                <span>+ </span>
                Add Description
            </p>

            <div className="flex justify-center">
                <button className="add-button">
                    <span className="text-lg">+</span> Experience
                </button>
            </div>

        </div>
    );
}

export default ExperienceForm;
