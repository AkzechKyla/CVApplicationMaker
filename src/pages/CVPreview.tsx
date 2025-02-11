import { PersonalDetailsInfo } from '../components/CVPreview/PersonalDetailsInfo';
import { ExperienceInfo } from '../components/CVPreview/ExperienceInfo';
import { EducationInfo } from '../components/CVPreview/EducationInfo';
import { SkillsInfo } from '../components/CVPreview/SkillsInfo';
import { SoftwareInfo } from '../components/CVPreview/SoftwareInfo';
import UserInfo from '../models/UserInfo';

interface Props {
    userInfo: UserInfo;
}

function CVPreview({ userInfo }: Props) {
    return(
        <div className="float-right p-8 w-[49.606rem] h-[70.156rem] drop-shadow-md bg-white">
            <PersonalDetailsInfo userInfo={userInfo}/>
            <ExperienceInfo userInfo={userInfo}/>
            <EducationInfo userInfo={userInfo}/>
            <SkillsInfo />
            <SoftwareInfo />
        </div>
    );
}

export default CVPreview;
