// file path: src/index.js

import fetchUser from './profile/gateway.js';
import { printProfile } from './profile/index.js';

fetchUser('fimaua')
    .then(userData => printProfile({
        name: userData.name,
        company: userData.location,
    }));