import './App.css'
import HelloWorld from './assets/components/HelloWorld.jsx'

function App() {

  const name = 'Yes'
  const url = 'https://supermariorun.com/assets/img/hero/hero_chara_mario_update_pc.png'
  

  
  function Soma(a, b){
    return a + b
  }
  

  return (
  
      <div className="App">
        
        <HelloWorld/>
        
        <img src={url} alt='Minha imagem'/>
      </div>

  )
}

export default App
