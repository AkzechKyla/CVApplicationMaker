import { PersonalDetailsInfo } from '../components/CVPreview/PersonalDetailsInfo';
import { ExperienceInfo } from '../components/CVPreview/ExperienceInfo';
import { EducationInfo } from '../components/CVPreview/EducationInfo';
import { SkillsInfo } from '../components/CVPreview/SkillsInfo';
import { SoftwareInfo } from '../components/CVPreview/SoftwareInfo';

function CVPreview() {
    return(
        <div className="float-right p-8 w-[49.606rem] h-[70.156rem] drop-shadow-md bg-white">
            <PersonalDetailsInfo />
            <ExperienceInfo />
            <EducationInfo />
            <SkillsInfo />
            <SoftwareInfo />
        </div>
    );
}

export default CVPreview;
