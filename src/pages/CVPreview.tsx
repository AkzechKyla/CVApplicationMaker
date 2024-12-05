import { PersonalDetailsInfo } from '../components/CVPreview/PersonalDetailsInfo';
import { ExperienceInfo } from '../components/CVPreview/ExperienceInfo';

// function EducationInfo() {
//     return <div>
//         <h1 className="font-bold">Education</h1>
//     </div>
// }

export function EducationInfo() {
    return <div>
        <h1 className="font-bold">Education</h1>
        <div className="flex">
            <div>1996-09 - 2001-05</div>
            <div>
                <p>BS/MS in Computer Science, University of Maryland</p>
                <ul className="list-disc pl-8">
                    <li>Graduated Summa Cum Laude</li>
                    <li>Member of Student Association of Project Management</li>
                    <li>Managed a student project to develop weekly IT News podcast.</li>
                </ul>
            </div>
        </div>
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
