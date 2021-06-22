import MainContent from "../Server-Content/MainContent";
import "./server-page.css";
import  logo from '../img/Samsung_logo .png' ;

const ServerPage = (props) => {
  return (
    <div className="row outer-div">
      <div className="col-xxl-2">
        <img src={logo} className="logo-png" alt="logo" />
      </div>
      <MainContent token={props.token}/>
    </div>
  );
};

export default ServerPage;
