export function EducationInfo() {
    return <div>
        <div className="flex items-center">
            <span className="material-icons text-3xl">school</span>
            <h1 className="font-bold ml-2">Education</h1>
        </div>
        <hr className="border-gray-400 mb-2"/>
        <div className="flex w-full">
            <div className="w-2/6">1996-09 - 2001-05</div>
            <div className="w-full">
                <p>BS/MS in Computer Science, University of Maryland</p>
                <ul className="list-disc pl-8 text-base">
                    <li>Graduated Summa Cum Laude</li>
                    <li>Member of Student Association of Project Management</li>
                    <li>Managed a student project to develop weekly IT News podcast.</li>
                </ul>
            </div>
        </div>
    </div>
}
