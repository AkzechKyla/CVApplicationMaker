import { useState } from 'react';
import CVPreview from './pages/CVPreview'
import Title from './components/Title'
import Sidebar from './components/Sidebar'
import PersonalDetailsForm from './components/CVForm/PersonalDetailsForm'
import EducationForm from './components/CVForm/EducationForm'
import ExperienceForm from './components/CVForm/ExperienceForm'
import SkillsForm from './components/CVForm/SkillsForm'
import SoftwareForm from './components/CVForm/SoftwareForm'
import UserInfo from './models/UserInfo';

export default function App() {
    const [userInfo, setUserInfo] = useState(new UserInfo(
      'John Smith',
      'Software Engineer',
      '774-987-4009',
      'john.smith@gmail.com',
      'New York, NY',
      'IT Professional with over 10 years of experience specializing in IT department management for international logistics companies. I can implement effective IT strategies at local and global levels. My greatest strength is business awareness, which enables me to permanently streamline infrastructure and applications. Seeking to leverage my IT management skills at Sancorp Inc.',
        [
            {
                positionName: 'IT Manager',
                companyName: 'Logistics International',
                yearStarted: '2015',
                yearEnded: '2020',
                isPresent: false,
                descriptions: [
                    'Managed a team of 10 IT professionals.',
                    'Implemented new IT strategies that reduced costs by 20%.',
                    'Oversaw the migration to a new ERP system.'
                ]
            },
            {
                positionName: 'Senior IT Specialist',
                companyName: 'Tech Solutions',
                yearStarted: '2010',
                yearEnded: '2014',
                isPresent: false,
                descriptions: [
                    'Provided IT support to over 200 employees.',
                    'Developed and maintained company’s internal software.',
                    'Trained new IT staff.'
                ]
            }
        ]
    ));

    return (
      <div className="flex gap-6 p-8 bg-zinc-100 overflow-auto font-helvetica">
        <div className="flex-1">
          <Title/>
          <div className="flex gap-6">
            <div>
              <Sidebar/>
            </div>
            <div className="flex w-full flex-col gap-5">
              <PersonalDetailsForm userInfo={userInfo} setUserInfo={setUserInfo}/>
              <ExperienceForm userInfo={userInfo} setUserInfo={setUserInfo}/>
              <EducationForm/>
              <SkillsForm/>
              <SoftwareForm/>
            </div>
          </div>
        </div>
        <CVPreview userInfo={userInfo}/>
      </div>
    )
}
