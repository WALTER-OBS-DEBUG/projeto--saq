import BoladeFutebol from 'assets/img/Bola-de-Futebol.png';
import BoladeBasquete from 'assets/img/BolaDeBasquete.jpg';
import BolaDeVolei from 'assets/img/BolaDeVolei.jpg';

const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                   <h2 className="text-primary">Sistema de Aluguel de Quadras Esportivas
                    <img  src={BoladeFutebol} alt="SAQ" width ="50" /> 
                    <img  src={BoladeBasquete} alt="SAQ" width ="50" />
                    <img  src={BolaDeVolei} alt="SAQ" width ="60" />
                   </h2>
                </nav>
            </div>
      </div>
    );
  }
  
  export default NavBar;