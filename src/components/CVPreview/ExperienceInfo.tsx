export function ExperienceInfo() {
    return <div>
        <div className="flex items-center">
            <span className="material-icons text-3xl">work</span>
            <h1 className="font-bold ml-2">Experience</h1>
        </div>
        <hr className="border-gray-400 mb-2"/>
        <div className="flex w-full">
            <div className="w-2/6 font-bold text-sm">2012 - present</div>
            <div className="w-full space-y-1">
                <p className="font-bold">Senior Project Manager</p>
                <p className="text-sm italic">Seton Hospital, ME</p>
                <ul className="list-disc pl-8 text-sm space-y-2">
                    <li>Oversaw all major hospital IT projects for 10+ years, focus on cost reduction.</li>
                    <li>Responsible for creating, improving, and developing IT project strategies.</li>
                    <li>Implemented the highly successful Lean Training and Six Sigma projects for all employees. Cut costs by 32%.</li>
                    <li>I reduced the costs of IT infrastructure maintenance by 5% in 2015 by successfully rebuilding the infrastructure.</li>
                </ul>
            </div>
        </div>
    </div>
}
