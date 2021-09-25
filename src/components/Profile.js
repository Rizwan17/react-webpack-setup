import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";

const Profile = (props) => {

    const match = useRouteMatch();

    console.log({ match })

    return (
        <div>
            <h1>Profile</h1>
            <Link to={`${match.url}/122`}>View Profile</Link>

            <div>
                <Switch>
                    <Route path={`${match.path}/:profileId`}>
                        <ProfileDetails />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Profile;