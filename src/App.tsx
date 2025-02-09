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
      'IT Professional with over 10 years of experience specializing in IT department management for international logistics companies. I can implement effective IT strategies at local and global levels. My greatest strength is business awareness, which enables me to permanently streamline infrastructure and applications. Seeking to leverage my IT management skills at Sancorp Inc.'
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
              <PersonalDetailsForm/>
              <ExperienceForm/>
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
