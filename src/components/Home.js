import React from "react";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <section id="header-section">
        <div className="header-title">
          <h1>Welcome to Bus Reservation System</h1>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6"></div>

            <div className="col-lg-6 ">
              <div className="card bg-dark shadow home_search_card">
                <div className="m-3 card p-3 shadow border-dark">
                  <div className="card-header">
                    <h2 className="card-title">Search</h2>
                  </div>
                  <form>
                    <div className="mt-2">
                      <label htmlFor="from_input" className="form-label">
                        From
                      </label>
                      <input
                        type="text"
                        name="from"
                        id="from_input"
                        className="form-control"
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="to" className="form-label">
                        To
                      </label>
                      <input
                        type="text"
                        name="to"
                        id="to"
                        className="form-control"
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="date_input" className="form-label">
                        From
                      </label>
                      <input type="date" name="date" id="date_input" className="form-control"/>
                    </div>
                    <div className="mt-2 text-center">
                      <button type="submit" className="btn btn-dark">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
