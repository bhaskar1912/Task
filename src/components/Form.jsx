import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Form = () => {
  return (
   <>
   <div>
   <form style={{marginRight:'10px',boxShadow:'0 0 5px red'}}>
    <input type="text"  placeholder='NAME' className='form-control'/> <br/>
    <input type="password"  placeholder='PASSWWORD'  className='form-control'/> <br/>
    <input type="email"  placeholder='EMAIL'  className='form-control'/>
    
</form>
<center><button className='btn btn-success mt-2'>Submit</button></center>

   </div>
   </>
  )
}

export default Form