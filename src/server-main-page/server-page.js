import MainContent from "../MainContent/MainContent";
import "./server-page.css";
import  logo from './logo (1).png' ;

const ServerPage = (props) => {
  return (
    <div className="row outer-div">
      <div className="col-xxl-2">
        {/* <h1 className="samsung-logo">SAMSUNG</h1> */}
        <img src={logo} className="logo-png" alt="logo" />
      </div>
      <MainContent token={props.token}/>
    </div>
  );
};

export default ServerPage;
