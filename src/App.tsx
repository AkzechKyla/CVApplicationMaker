import CVPreview from './pages/CVPreview'
import Title from './components/Title'
import Sidebar from './components/Sidebar'
import PersonalDetails from './components/CVForm/PersonalDetails'

export default function App() {
    return (
      <div className="flex gap-6 p-8 bg-zinc-100 overflow-auto font-helvetica">
        <div className="flex-1">
          <Title/>
          <div className="flex gap-6">
            <Sidebar/>
            <PersonalDetails/>
          </div>
        </div>
        <CVPreview/>
      </div>
    )
}
