import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFolder, faImage, faTextSlash, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import Form from './components/Form';
import Text from './components/Text';
import Image from './components/Image';
import Video from './components/Video';


const App = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [Button1, setButton1] = useState(false);
  const [Button2, setButton2] = useState(false);

// Navigations

  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleNavigateToForm = () => {
    setShowForm(true); // Show the form
    navigate('/form');
    setShowText(false); 
    setShowImage(false); 
    setShowVideo(false); 
  };
  const handleNavigateToText = () => {
    navigate('/text'); // Navigate to the "/text" route
    setShowText(true); // Show the text
    setShowForm(false); 
    setShowImage(false); 
    setShowVideo(false); 
  };
  const handleNavigateToImage = () => {
    navigate('/image'); 
    setShowImage(true); 
    setShowForm(false); 
    setShowText(false); 
    setShowVideo(false); 
  };
  const handleNavigateToVideo = () => {
    navigate('/video'); 
    setShowImage(false); 
    setShowForm(false); 
    setShowText(false); 
    setShowVideo(true); 
  };


  // Modals

  const handleBox1Click = () => {
    setShowModal1(true);
  };

  const handleBox2Click = () => {
    setShowModal2(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };
const handleButton1Click=()=>{
  setButton1(true)
}
const closeButton1Click=()=>{
  setButton1(false)
}
const handleButton2Click=()=>{
  setButton2(true)
}
const closeButton2Click=()=>{
  setButton2(false)
}
const [showterms, setterms] = useState(false);
const handleterms = () => {
  setterms(true);
};

const handletermsclose=()=>{
  setterms(false);
}
const [showpolicy, setpolicy] = useState(false);
const handlepolicy = () => {
  setpolicy(true);
};

const handlepolicyclose=()=>{
  setpolicy(false);
}
  return (
    <>
       {/* UPPER SECTION */}


        <div className='box'>
          <div className='box1' onClick={handleBox1Click}>
            <FontAwesomeIcon icon={faBars} size='2x' color='white' />
          </div>

          <div className='box3'> <span>Hello World!</span></div>
          <div className='box2' onClick={handleBox2Click}>
            <FontAwesomeIcon icon={faBars} size='2x' color='white' />
          </div>
        </div>
    
      <Modal show={showModal1} onHide={handleCloseModal1}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Name:-
          <input type='text' className='form-control'/> 
           
          Password:-
          <input type='password' className='form-control'/>
          Email:-
          <input type='email' className='form-control'/>
          Phone Number:-
          <input type='number' className='form-control'/>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary'>SIGN IN</Button>
          <Button variant='secondary' onClick={handleCloseModal1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal2} onHide={handleCloseModal2}>
        <Modal.Header closeButton>
          <Modal.Title>Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15126.733728275181!2d73.7374697!3d18.5883055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbe7f4d41193%3A0xf38da8f70026fe67!2sCoders%20Marathon%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1691145421083!5m2!1sen!2sin" style={{width:'467px',height:'300px', allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

{/* MIDDLE SECTION */}



      <div className='middle'>
        <div className='middle1'><iframe width="210" height="210" src="https://www.youtube.com/embed/Y2YO-2Vwxd8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div className='middle2'><iframe width="210" height="210" src="https://www.youtube.com/embed/sFFwvr6l2mM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      </div>
      <div className='button'>
      <button className='button1' onClick={handleButton1Click}>CLICK ME</button>
      <Modal show={Button1} onHide={closeButton1Click}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        </Modal>
      <button className='button2' onClick={handleButton2Click}>CLICK ME</button>
      <Modal show={Button2} onHide={closeButton2Click}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        </Modal>
        </div>  


{/* WIZARD DESIGN */}

<div className='main'>
  <div className='mainn'>
<button className='btn btn-info' onClick={handleNavigateToForm}>Navigate to Form  <FontAwesomeIcon icon={faFolder} size='1x' color='black' /></button>
<button className='btn btn-info'  onClick={handleNavigateToText}>Text  <FontAwesomeIcon icon={faTextSlash} size='1x' color='black' /></button>
<button className='btn btn-info' onClick={handleNavigateToImage}>Image  <FontAwesomeIcon icon={faImage} size='1x' color='black' /></button>
<button className='btn btn-info' onClick={handleNavigateToVideo}>Video  <FontAwesomeIcon icon={faVideo} size='1x' color='black' /></button>
</div>
<div className='main1'>
  
  {showForm && <Form />}
{showText && <Text />}
{showImage && <Image />}
{showVideo && <Video />}
</div>

</div>


{/* FOOTER SECTION */}

<div className='footer'>
<div className="d-grid gap-2"><Button variant='dark' onClick={handleterms}>Terms</Button>
<Modal show={showterms} onHide={handletermsclose}>
        <Modal.Header closeButton>
          <Modal.Title> Terms</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        By accessing and using our website, you agree to comply with these Terms of Use.

Acceptable Use: Specify the rules and guidelines users must follow when using your website.
Intellectual Property: Clarify ownership of content on your website and how users can use it.
User-Generated Content: Explain how user-generated content is moderated and used.
Limitation of Liability: Disclaim liability for the accuracy, completeness, or reliability of information on your website.
Termination: Outline the circumstances under which you can terminate a user's access to your website.
Governing Law: State which laws govern these terms and any potential disputes.
        </Modal.Body>
        <Button variant='warning'>Accept</Button>
        </Modal>
<Button variant='dark' onClick={handlepolicy}>Policy</Button>
<Modal show={showpolicy} onHide={handlepolicyclose}>
        <Modal.Header closeButton>
          <Modal.Title>Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information. By using our website, you consent to the data practices described in this policy.

Information We Collect: Describe the types of information you collect (e.g., personal, non-personal) and how it's collected (e.g., cookies, user input).
How We Use Your Information: Explain the purposes for which you use the collected information (e.g., improving user experience, marketing).
Data Sharing and Disclosure: Describe how and when you might share user information with third parties.
Data Security: Explain the measures you take to protect user data.
User Rights: Outline the rights users have regarding their data (e.g., access, correction, deletion).
Contact Information: Provide details on how users can contact you regarding their privacy concerns.
        </Modal.Body>
        <Button variant='warning'>Accept</Button>
        </Modal>
</div>
</div>
    </>
  );
};

export default App;
