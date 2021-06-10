const ScriptComponent =() =>{
    return (
        <div className="col-lg-6 third">
        <h1 id="Alert-heading">Alert 2</h1>
        <form>
          <div className="form-floating">
            <label>Script 1</label>
            <input
              type="text"
              className="form-control"
              placeholder="script"
            />
          </div>
          <div className="form-floating">
            <label >Script 2</label>
            <input
              type="text"
              className="form-control"
              placeholder="script"
            />
          </div>
          <div className="form-floating">
            <label >Script 3</label>
            <input
              type="text"
              className="form-control"
              placeholder="script"
            />
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    ) ;
}
export default ScriptComponent ;