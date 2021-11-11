
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import useAuth from './../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    const override = css`
            display: flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            margin: 0 auto;
            border-color: red;
            margin-top:20%;
            `;


    if (isLoading) { return <RingLoader color="#FF4676" css={override} size={70} /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;