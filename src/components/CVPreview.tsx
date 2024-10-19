function PersonalDetailsInfo() {
    return(
        <div className="pt-8 pl-8 pr-8 pb-8 text-sm">
            <p className="font-bold text-4xl mb-1">John Smith</p>
            <p className="text-lg mb-6">IT Project Manager</p>
            <div className="grid grid-cols-2 grid-rows-2 mb-6 gap-y-2" style={{ width: '500px' }}>
                <p className="inline">774-987-4009</p>
                <p className="inline">j.smith@uptowork.com</p>
                <p className="inline">j.smith@uptowork.com</p>
                <p className="inline">j.smith@uptowork.com</p>
            </div>
            <p className="">IT Professional with over 10 years of experience specializing in IT department management for international logistics companies. I can implement effective IT strategies at local and global levels. My greatest strength is business awareness, which enables me to permanently streamline infrastructure and applications. Seeking to leverage my IT management skills at Sancorp Inc.</p>
        </div>
    )
}

function CVPreview() {
    return(
        <div className="float-right"
            style={{
                width: '793.7px',
                height: '1122.5px',
                boxShadow: '1px 2px 18px 0px rgba(0,0,0,0.69)'
            }}>
            <PersonalDetailsInfo/>
        </div>
    );
}

export default CVPreview;
