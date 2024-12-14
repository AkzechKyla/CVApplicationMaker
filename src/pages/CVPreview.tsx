import { PersonalDetailsInfo } from '../components/CVPreview/PersonalDetailsInfo';
import { ExperienceInfo } from '../components/CVPreview/ExperienceInfo';
import { EducationInfo } from '../components/CVPreview/EducationInfo';

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
