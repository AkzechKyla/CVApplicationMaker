import { useState, useRef } from 'react';
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
    const contentRef = useRef<HTMLDivElement>(null);
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
                startDate: '2015-03',
                endDate: '2020-11',
                isPresent: false,
                descriptions: [
                    'Managed a team of 10 IT professionals.',
                    'Implemented new IT strategies that reduced costs by 20%.',
                    'Oversaw the migration to a new ERP system.'
                ]
            }
        ],
        [
          {
            schoolName: 'University of New York',
            degree: 'Bachelor of Science in Computer Science',
            startDate: '2005-11',
            endDate: '2009-11',
            isPresent: false,
            descriptions: [
              'Graduated with honors.',
              'Member of Student Association of Project Management.'
            ]
          }
        ],
        [
          {
            skillName: 'Business Process Improvement',
            descriptions: [
              'history of successful innovations leading to cost savings.',
            ]
          },
          {
            skillName: 'Vendor Management',
            descriptions: [
              'proven track record of managing vendors in projects with budgets of over $1,000,000.'
            ]
          },
          {
            skillName: 'Project Scheduling',
            descriptions: [
              'over 90% of projects led were finished in due time.'
            ],
          },
        ],
        [
          'Microsoft Office',
          'Adobe Photoshop',
          'AutoCAD',
          'Visual Studio Code',
          'JIRA',
          'GitHub'
        ]
    ));

    return (
      <div className="flex gap-6 p-8 bg-zinc-100 h-screen overflow-auto font-helvetica">
        <div className="flex-1">
          <Title/>
          <div className="flex gap-6">
            <div>
              <Sidebar setUserInfo={setUserInfo} contentRef={contentRef}/>
            </div>
            <div className="flex w-full flex-col gap-5 pb-8">
              <PersonalDetailsForm userInfo={userInfo} setUserInfo={setUserInfo}/>
              <ExperienceForm userInfo={userInfo} setUserInfo={setUserInfo}/>
              <EducationForm userInfo={userInfo} setUserInfo={setUserInfo}/>
              <SkillsForm userInfo={userInfo} setUserInfo={setUserInfo}/>
              <SoftwareForm userInfo={userInfo} setUserInfo={setUserInfo}/>
            </div>
          </div>
        </div>
        <CVPreview userInfo={userInfo} contentRef={contentRef}/>
      </div>
    )
}
