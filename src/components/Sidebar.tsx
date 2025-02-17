import '../index.css';
import { useReactToPrint } from 'react-to-print';

import UserInfo from '../models/UserInfo';

interface Props {
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
    contentRef: React.RefObject<HTMLDivElement>;
}

function Sidebar({ setUserInfo, contentRef }: Props) {
    const reactToPrintFn = useReactToPrint({ contentRef });

    function refresh() {
        window.location.reload();
    }

    function clearAll() {
        setUserInfo(new UserInfo('', '', '', '', '', '', [], [], [], []));
    }

    return(
        <div className="bg-white p-3 drop-shadow-md rounded-lg text-center space-y-3">
            <div className="sidebar-item sidebar-item:active" onClick={refresh}>
                <span className="material-icons">refresh</span>
                <div className="text-base">Sample</div>
            </div>
            <div className="sidebar-item sidebar-item:active" onClick={() => reactToPrintFn()}>
                <span className="material-icons">file_download</span>
                <div className="text-base">Download</div>
            </div>
            <div className="sidebar-item sidebar-item:active" onClick={clearAll}>
                <span className="material-icons text-red-600">delete</span>
                <div className="text-base text-red-600">Clear All</div>
            </div>
        </div>
    );
}

export default Sidebar;
