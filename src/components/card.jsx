import '../css/Card.css'
import Button from './Button'


function card(props) {


  return (
    <>
 <div className='card'>
{/* 
    //   <img src={props.source}alt={props.img}/>
    //   <p>{props.name}</p>
    //   <p>{props.text}</p>
    //   <p>{email.text}</p> */}
    {/* // you cant change property for one item  */}
       <img src={props.img}alt={props.imgn}/>
       <h3>{props.myname}</h3>
      <p>CEO & DOE</p>
      <p>phasellus eget enim eu lectus vestibulum</p>
      <p>example@example.com</p>
       <Button btnName={props.btnName}/>
    </div>
    </>
  )
}

export default card