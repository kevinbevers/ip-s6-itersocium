import Constants from 'expo-constants';
import { createClient } from 'urql';

export const client = createClient({
    url: Constants.manifest.extra.apiUrl ||`http://${Constants.manifest.debuggerHost.split(':').shift()}:8080/v1/graphql`,
  });


// export const client = createClient({
//     url: 'http://localhost:3000/graphql',
//     fetchOptions: () => {
//       const token = getToken();
//       return {
//         headers: { authorization: token ? `Bearer ${token}` : '' },
//       };
//     },
//   });