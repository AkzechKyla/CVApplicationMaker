export function SkillsInfo() {
    return(
        <div>
            <div className="flex items-center">
                <span className="material-icons text-3xl">lightbulb</span>
                <h1 className="font-bold ml-2">Skills</h1>
            </div>
            <hr className="border-gray-400 mb-2"/>
            <div className="flex w-full">
                <div className="w-2/6"></div>
                <div className="w-full text-base">
                    <p><b>Business Process Improvement</b> - history of successful innovations leading to cost savings.</p>
                    <p><b>Vendor Management</b> - proven track record of managing vendors in projects with budgets of over $1,000,000.</p>
                    <p><b>Project Scheduling</b> - over 90% of projects led were finished in due time.</p>
                    <p><b>Sales Analysis</b> - background in IT Sales with deep understanding of negotiating contracts.</p>
                </div>
            </div>
        </div>
    );
}
