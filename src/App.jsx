import './App.css'
import Card from './components/card'
import img2 from './assets/img/john.png'
import img1 from './assets/img/jane.png'
import img from './assets/img/mike.png'



function App() {


  return (
<div className='app' >

<Card
myname="kenys"

img={img2}
btnName="contact"
/>
<Card

 
 myname="elvis"
 

 img={img1}
 btnName="message"
/>
<Card
myname="kelly"
img={img}
btnName="message"
/>
    </div>
  )
}

export default App
