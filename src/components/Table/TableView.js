import moment from "moment";
import React from "react";
import { Image } from "react-bootstrap";

import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PropTypes from "prop-types";
const TableView = ({ details, color, id }) => {
    console.log();

    return (
        <tr key={id}>
            {/* <td className="text-left">{id}</td> */}
            <td className="text-left">
                {details.first_name}
                {details.last_name}
            </td>
            {/* <td className="text-left">
                {details.first_name}
                {details.last_name}
            </td>
            <td className="text-left">
                {details.first_name}
                {details.last_name}
            </td> */}

            <td
                className="text-left"
                style={{ display: "flex", height: "73px" }}
            >
                <Image
                    roundedCircle
                    src={details.avatar}
                    alt="mypic"
                    height="24px"
                    width="24px"
                    style={{ backgroundColor: "black", marginRight: "3px" }}
                ></Image>
                {details.username}
            </td>
            <td className="text-left">
                {moment(new Date(details.date_of_birth)).format("DD/MM/YYYY")}
            </td>
            <td className="text-left">{details.address.street_name}</td>
            <td className="text-left">{details.address.city} </td>
            <td className="text-left">{details.address.state}</td>
            <td className="text-left">{details.address.country}</td>
            <td className="text-left">{details.subscription.plan}</td>
            <td className={color} style={{ textAlign: "center" }}>
                <strong className="text-center">
                    {details.subscription.status}
                </strong>
            </td>
            <td className="text-center">
                <Link
                    to={{
                        pathname: `/table/${details.id}`,
                        myCustomProps: details,
                    }}
                >
                    <VisibilityIcon color="action" />
                </Link>
            </td>
        </tr>
    );
};

//Checking PropTypes In Login Component
TableView.propTypes = {
    color: PropTypes.string,
    id: PropTypes.string,
    details: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        avatar: PropTypes.string,
        username: PropTypes.string,
        id: PropTypes.number,
        date_of_birth: PropTypes.string,

        address: PropTypes.shape({
            street_name: PropTypes.string,

            city: PropTypes.string,
            country: PropTypes.string,
            state: PropTypes.string,
        }),
        subscription: PropTypes.shape({
            plan: PropTypes.string,
            status: PropTypes.string,
        }),
    }),
};

export default TableView;
