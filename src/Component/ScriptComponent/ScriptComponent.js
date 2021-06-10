import React from 'react' ;
import './ScriptComponent.css'
const ScriptComponent =(props) =>{
   const {AlertType} =props ;
    return (
        <div className="col-lg-6 third">
        <h1 id="Alert-heading" className="Alert-heading">{AlertType}</h1>
        <form>
          <div className="form-group">
          <label>Script 1</label> 
            <input
              type="text"
              className="form-control"
              placeholder="script"
            />
          </div>
          <div className="form-group">
            <label >Script 2</label>
            <input
              type="text"
              className="form-control"
              placeholder="script"
            />
          </div>
          <div className="form-group">
            <label >Script 3</label>
            <input
              type="text"
              className="form-control"
              placeholder="script"
            />
          </div>
          <div className="form-group">
            <label >Script 4</label>
            <input
              type="text"
              className="form-control"
              placeholder="script"
            />
          </div>
          <button className=" btn script-btn btn-primary" type="submit">
            Add
          </button>
        </form>
      </div>
    ) ;
}
export default ScriptComponent ;