import CVPreview from './pages/CVPreview'
import Title from './components/Title'
import Sidebar from './components/Sidebar'
import PersonalDetailsForm from './components/CVForm/PersonalDetailsForm'
import EducationForm from './components/CVForm/EducationForm'
import ExperienceForm from './components/CVForm/ExperienceForm'
import SkillsForm from './components/CVForm/SkillsForm'
import SoftwareForm from './components/CVForm/SoftwareForm'

export default function App() {
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
        <CVPreview/>
      </div>
    )
}
