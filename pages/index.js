import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import React from "react";
import TodoList from "../components/TodoList";

import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig)

export default function Home() {
  return (
    <Authenticator>
    {({ signOut, user }) => (
      <div className="App">
        <h2>
          Welcome {user.attributes.email}
        </h2>
        <button onClick={signOut}>Sign out</button>
        <TodoList />
      </div>
    )}
    </Authenticator>
  )
}
