import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
   var session_token = localStorage.getItem("Token");
   return (
      <Route {...rest} render={props => (
         session_token !== null ? (
            < Component  {...props} />
         ) : (
            <Redirect to={{
               pathname: '/sign-in',
            }}
            />
         )
      )}
      />
   )
}
