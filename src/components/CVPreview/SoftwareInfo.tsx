export function SoftwareInfo() {
    return(
        <div>
            <div className="flex items-center">
                <span className="material-icons text-3xl">computer</span>
                <h1 className="font-bold ml-2">Software</h1>
            </div>
            <hr className="border-gray-400 mb-2"/>
            <div className="flex w-full">
                <div className="w-2/6"></div>
                <div className="w-full flex-row space-y-2 text-sm">
                    <p className="w-full">Microsoft Project, MS Windows Server, Linux/Unix</p>
                    <p className="w-full">MS Window Server</p>
                    <p className="w-full">Linux/Unix</p>
                </div>
            </div>
        </div>
    );
}
