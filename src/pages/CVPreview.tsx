import { PersonalDetailsInfo } from '../components/CVPreview/PersonalDetailsInfo';
import { ExperienceInfo } from '../components/CVPreview/ExperienceInfo';
import { EducationInfo } from '../components/CVPreview/EducationInfo';

function SkillsInfo() {
    return(
        <div>
            <h1 className="font-bold">Skills</h1>
            <div className="flex w-full">
                <div className="w-2/6"></div>
                <div className="w-full">
                    <p>Business Process Improvement - history of successful innovations leading to cost savings.</p>
                    <p>Vendor Management - proven track record of managing vendors in projects with budgets of over $1,000,000.</p>
                    <p>Project Scheduling - over 90% of projects led were finished in due time.</p>
                    <p>Sales Analysis - background in IT Sales with deep understanding of negotiating contracts.</p>
                </div>
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
        </div>
    );
}

export default CVPreview;
