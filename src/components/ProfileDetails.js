import React from "react";
import { useParams } from "react-router";

const ProfileDetails = (props) => {

    const params = useParams();

    return (
        <div>
            <h1>Profile Details</h1>
            <div>
                {JSON.stringify(params)}
            </div>
        </div>
    );
}

export default ProfileDetails;