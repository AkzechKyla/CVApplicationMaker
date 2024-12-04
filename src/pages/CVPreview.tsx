import { PersonalDetailsInfo } from '../components/CVPreview/PersonalDetailsInfo';
import { ExperienceInfo } from '../components/CVPreview/ExperienceInfo';

function EducationInfo() {
    return <div>
        <h1 className="font-bold">Education</h1>
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
            <EducationInfo/>
        </div>
    );
}

export default CVPreview;
