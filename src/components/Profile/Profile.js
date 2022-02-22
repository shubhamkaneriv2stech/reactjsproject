import React from "react";
import Style from "../../stylesheet/Profile.module.css";
import Moment from "moment";
import details from "../../data/profile_data.json";
// Profile Component R
const Profile = () => {
  return (
    <div className="container-fluid">
      <div style={{ textAlign: "left", paddingLeft: "12px" }}>
        <h5>Profile information</h5>
      </div>
      {details.results.length &&
        details.results.map((items, i) => {
          return (
            <div className={Style.main__body} key={i}>
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={items.picture.large}
                          alt="Admin"
                          className="rounded-circle"
                          width="150"
                        />
                        <div className="mt-3">
                          <h4>
                            {items.name.title}.{items.name.first}
                            {items.name.last}
                          </h4>
                          <p className="text-secondary mb-1">
                            Full Stack Java Developer
                          </p>
                          <span className="text-secondary">
                            {items.login.username}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div
                          className="col-sm-9 text-secondary"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {items.name.first}
                          {items.name.last}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0 mr-4">Email</h6>
                        </div>
                        <div
                          className="col-sm-9 text-secondary"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {items.email}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0 mr-4">Gender</h6>
                        </div>
                        <div
                          className="col-sm-9 text-secondary"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {items.gender}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0  mr-4">DOB</h6>
                        </div>
                        <div
                          className="col-sm-9 text-secondary"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {Moment(new Date(items.dob.date)).format(
                            "DD/MM/YYYY"
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0  mr-4">Address</h6>
                        </div>
                        <div
                          className="col-sm-9 text-secondary "
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {items.location.street},{items.location.city}
                          {items.location.state},{items.location.postcode}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row gutters-sm">
                    <div className="col-sm-12 mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h6>Registered Details</h6>
                          <hr />

                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Registered Date</h6>
                            </div>
                            <div
                              className="col-sm-9 text-secondary"
                              style={{
                                textAlign: "left",
                              }}
                            >
                              {Moment(new Date(items.registered.date)).format(
                                "MM/DD/YYYY"
                              )}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Registered Age</h6>
                            </div>
                            <div
                              className="col-sm-9 text-secondary"
                              style={{
                                textAlign: "left",
                              }}
                            >
                              {items.registered.age}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Profile;
