import './App.css'
import Card from './components/Card/Card';

const App = () => {

  return (
    <div className='playingCards faceImages'>
      <Card rank={'K'} suit={'diams'}/>
      <Card rank={'A'} suit={'hearts'}/>
    </div>
  )
};

export default App
