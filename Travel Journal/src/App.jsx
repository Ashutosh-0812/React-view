import Header from '../src/component/Header' 
import MainContent from './component/MainContent'
import data from './assets/data'

function App() {
   
     const entryElements = data.map((entry) => {
        return (
            <MainContent
                key={entry.id}
                {...entry}
            />
        )
    })



  return(
    <>
    <Header/>
    <main className='container'>
    {entryElements}
    </main>
    </>
  )
  
  }


export default App
