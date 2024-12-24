import { PersonalDetailsInfo } from '../components/CVPreview/PersonalDetailsInfo';
import { ExperienceInfo } from '../components/CVPreview/ExperienceInfo';
import { EducationInfo } from '../components/CVPreview/EducationInfo';
import { SkillsInfo } from '../components/CVPreview/SkillsInfo';

function SoftwareInfo() {
    return(
        <div>
            <h1 className="font-bold">Software</h1>
            <div className="flex w-full">
                <div className="w-2/6"></div>
                <div className="w-full text-base">
                    <p>Microsoft Project, MS Windows Server, Linux/Unix</p>
                </div>
                <div className="w-2/6">Excellent</div>
            </div>
        </div>
    );
}

function CVPreview() {
    return(
        <div className="float-right pl-8 pr-8 w-[49.606rem] h-[70.156rem] shadow-2xl"
            style={{
                boxShadow: '1px 2px 18px 0px rgba(0,0,0,0.69)'
            }}>
            <PersonalDetailsInfo />
            <ExperienceInfo />
            <EducationInfo />
            <SkillsInfo />
            <SoftwareInfo />
        </div>
    );
}

export default CVPreview;
