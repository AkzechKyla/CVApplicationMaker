import CVPreview from './components/CVPreview'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PersonalDetails from './components/CVForm/PersonalDetails'

export default function App() {
    return (
      <div className="flex gap-6 mt-8 mr-8 ml-8 mb-8 overflow-auto">
        <div className="bg-emerald-500 flex-1">
          <Header/>
          <div className="flex gap-6">
            <Sidebar/>
            <PersonalDetails/>
          </div>
        </div>
        <CVPreview/>
      </div>
    )
}
