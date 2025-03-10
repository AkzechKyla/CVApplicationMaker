import { PersonalDetailsInfo } from '../components/CVPreview/PersonalDetailsInfo';
import { ExperienceInfo } from '../components/CVPreview/ExperienceInfo';
import { EducationInfo } from '../components/CVPreview/EducationInfo';
import { SkillsInfo } from '../components/CVPreview/SkillsInfo';
import { SoftwareInfo } from '../components/CVPreview/SoftwareInfo';
import UserInfo from '../models/UserInfo';

interface Props {
    userInfo: UserInfo;
    contentRef: React.RefObject<HTMLDivElement>;
}

function CVPreview({ userInfo, contentRef }: Props) {
    return(
        <div className="sticky top-0 w-[49.606rem] h-[70.156rem] drop-shadow-md bg-white">
            <div ref={contentRef} className="p-8">
                <PersonalDetailsInfo userInfo={userInfo}/>
                <ExperienceInfo userInfo={userInfo}/>
                <EducationInfo userInfo={userInfo}/>
                <SkillsInfo userInfo={userInfo}/>
                <SoftwareInfo userInfo={userInfo}/>
            </div>
        </div>
    );
}

export default CVPreview;
