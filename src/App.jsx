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
        <h1>Welcome to Narnia</h1>  
        <HelloWorld/>
        <p>This World is Fantastic: {name}</p>
        <input className="valor" type='number'/>
        <p>Soma: {Soma(24,12)}</p>

        <img src={url} alt='Minha imagem'/>
      </div>

  )
}

export default App
