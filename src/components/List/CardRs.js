import React from "react";
import PropTypes from "prop-types";
import { Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const CardRs = ({ details }) => {
  //For rendering tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {details.review}
    </Tooltip>
  );

  return (
    <Fragment>
      <Col lg={4} md={4} sm={4} xs={4} style={{ marginBottom: "20px" }}>
        <Card>
          <Card.Img variant="top" src={details.logo} />

          <Card.Body>
            <Card.Title>{details.name}</Card.Title>
            <Card.Text>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <div className="skoverlay">
                  <p> {details.review}</p>
                </div>
              </OverlayTrigger>
            </Card.Text>

            {/*Navigate to Details of Restaurant */}
            <div style={{ textAlign: "right" }}>
              <Link
                to={{
                  pathname: `/list/${details.id}`,
                  myCustomProps: details,
                }}
              >
                Read More
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

//Checking the PropTypes in the Component CardRs
CardRs.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    review: PropTypes.string,
    id: PropTypes.number,
    logo: PropTypes.string,
  }),
};

export default CardRs;
