function PersonalDetailsInfo() {
    return(
        <div className="pt-8 pb-8 text-sm">
            <p className="font-bold text-4xl mb-1">John Smith</p>
            <p className="text-lg mb-6">IT Project Manager</p>
            <div className="grid grid-cols-2 grid-rows-2 mb-6 gap-y-2 w-[31.25rem]">
                <p className="inline text-sm">774-987-4009</p>
                <p className="inline text-sm">j.smith@uptowork.com</p>
                <p className="inline text-sm">j.smith@uptowork.com</p>
                <p className="inline text-sm">j.smith@uptowork.com</p>
            </div>
            <p className="text-sm">IT Professional with over 10 years of experience specializing in IT department management for international logistics companies. I can implement effective IT strategies at local and global levels. My greatest strength is business awareness, which enables me to permanently streamline infrastructure and applications. Seeking to leverage my IT management skills at Sancorp Inc.</p>
        </div>
    )
}

function ExperienceInfo() {
    return <div>
        <p>Experience</p>
        <div>
            <div>2006-12 - present</div>
            <div>
                <p>Senior Project Manager</p>
                <p>Seton Hospital, ME</p>
                <ul className="list-disc pl-8">
                    <li>Oversaw all major hospital IT projects for 10+ years, focus on cost reduction.</li>
                    <li>Responsible for creating, improving, and developing IT project strategies.</li>
                    <li>Implemented the highly successful Lean Training and Six Sigma projects for all employees. Cut costs by 32%.</li>
                    <li>I reduced the costs of IT infrastructure maintenance by 5% in 2015 by successfully rebuilding the infrastructure.</li>
                </ul>
            </div>
        </div>
    </div>
}

function CVPreview() {
    return(
        <div className="float-right pl-8 pr-8"
            style={{
                width: '793.7px',
                height: '1122.5px',
                boxShadow: '1px 2px 18px 0px rgba(0,0,0,0.69)'
            }}>
            <PersonalDetailsInfo/>
            <ExperienceInfo/>
        </div>
    );
}

export default CVPreview;
