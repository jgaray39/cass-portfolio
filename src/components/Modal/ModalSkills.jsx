import myPicture from '../../assets/my_picture.jpg';
import htmlLogo from '../../assets/html-5.png';
import cssLogo from '../../assets/css-3.png';
import jsLogo from '../../assets/js.png';
import reactJsLogo from '../../assets/React-icon.png';
import adobeExpressLogo from '../../assets/adobe_express.png';
import canvaLogo from '../../assets/canva_logo.png';
import pixlrLogo from '../../assets/pixlr.png';
import nodeExpressLogo from '../../assets/node_express.png';
import './Modal.css';     

function ModalSkills() {

    return (
    <div className='modal'>
      <h2 className='modalTitle'>MES COMPETENCES</h2>
        <img src={myPicture} alt="cassandra laffargue" className="modalPicture" />
          <p className='modalDescription skillsIcons'>
            <figure className='skillsCard'>
              <figcaption className='skillsTitle'>HTML</figcaption>
                <img src={htmlLogo} alt="logo HTML" />
                  <div className='notation'>
                    <div className='level_1'></div>
                    <div className='level_2'></div>
                    <div className='level_3'></div>
                  </div>
            </figure>
        <figure className='skillsCard'>
          <figcaption className='skillsTitle'>CSS</figcaption>
            <img src={cssLogo} alt="logo css" />
              <div className='notation'>
                <div className='level_1'></div>
                <div className='level_2'></div>
                <div className='level_3'></div>
              </div>
        </figure>
          <figure className='skillsCard'>
            <figcaption className='skillsTitle'>JavaScript</figcaption>
              <img src={jsLogo} alt="logo javascript" />
                <div className='notation'>
                  <div className='level_1'></div>
                  <div className='level_2'></div>
                </div>
          </figure>
        <figure className='skillsCard'>
          <figcaption className='skillsTitle'>React JS</figcaption>
            <img src={reactJsLogo} alt="logo react js" />
              <div className='notation'>
                <div className='level_1'></div>
                <div className='level_2'></div>
              </div>
        </figure>
        <figure className='skillsCard'>
          <figcaption className='skillsTitle'>Express JS</figcaption>
            <img className='skillsImgNode' src={nodeExpressLogo} alt="logo node js" />
              <div className='notation'>
                <div className='level_1'></div>
              </div>
        </figure>
        <figure className='skillsCard'>
          <figcaption className='skillsTitle'>Pixlr</figcaption>
            <img src={pixlrLogo} alt="logo pixlr" />
            <div className='notation'>
                <div className='level_1'></div>
                <div className='level_2'></div>
              </div>
        </figure>
        <figure className='skillsCard'>
          <figcaption className='skillsTitle'>Canva Pro</figcaption>
          <img src={canvaLogo} alt="logo canva" />
            <div className='notation'>
                <div className='level_1'></div>
                <div className='level_2'></div>
                <div className='level_3'></div>
              </div>
        </figure>
        <figure className='skillsCard'>
          <figcaption className='skillsTitle'>Adobe Express</figcaption>
            <img src={adobeExpressLogo} alt="logo adobe express" />
              <div className='notation'>
                <div className='level_1'></div>
                <div className='level_2'></div>
              </div>        </figure>
        </p>
    </div>
   ) };

  export default ModalSkills;
 
