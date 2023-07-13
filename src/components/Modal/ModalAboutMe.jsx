import myPicture from '../../assets/my_picture.jpg';
import './Modal.css';

function ModalAboutMe() {
  return (
    <div className='modal'>
      <h2 className='modalTitle'>A PROPOS DE MOI</h2>
        <img src={myPicture} alt="cassandra laffargue" className="modalPicture" />
        <ul className="modalDescription">
          <li>
            Passionnée par les métiers de la tech et du numérique, j’ai entrepris une reconversion professionnelle vers le développement web. Je suis particulièrement intéressée par le développement front-end et l'expérience utilisateur.
          </li>
          <li>
            J’ai également entrepris des projets centrés sur le design et la communication, ajoutant une touche artistique à mon arsenal de compétences.
          </li>
          <li>
            Ensemble, nous transformerons vos idées en réalité. Ne laissez pas votre vision se perdre dans l'ombre de l'anonymat. Faites briller votre présence en ligne. Contactez-moi dès maintenant.
          </li>
        </ul>
      </div>
)};
      
  export default ModalAboutMe;
