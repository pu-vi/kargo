const HomeOffice = () => {
  return (
    <div>
      <h3>Enter source address</h3>
      <form>
        <div className="form-group">
          <label htmlFor="from-address">Source address</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="from-address"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeOffice;
