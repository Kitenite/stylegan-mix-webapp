import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';

import awsConfig from '../aws-config';
console.log(awsConfig);
console.log(import.meta)
Amplify.configure(awsConfig);

export default function App() {
  return (
    <Authenticator initialState="signUp">
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}