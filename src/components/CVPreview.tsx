import { PersonalDetailsInfo } from './CVPreview/PersonalDetailsInfo';

function ExperienceInfo() {
    return <div>
        <p>Experience</p>
        <div>
            <div>2006-12 - present</div>
            <div>
                <p>Senior Project Manager</p>
                <p>Seton Hospital, ME</p>
                <ul className="list-disc pl-8">
                    <li>Oversaw all major hospital IT projects for 10+ years, focus on cost reduction.</li>
                    <li>Responsible for creating, improving, and developing IT project strategies.</li>
                    <li>Implemented the highly successful Lean Training and Six Sigma projects for all employees. Cut costs by 32%.</li>
                    <li>I reduced the costs of IT infrastructure maintenance by 5% in 2015 by successfully rebuilding the infrastructure.</li>
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
        </div>
    );
}

export default CVPreview;
