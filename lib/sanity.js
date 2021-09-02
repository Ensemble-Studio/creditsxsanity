
import sanityClient from '@sanity/client';


const client = sanityClient({
     projectId: 'jwbdnwhq',
     dataset: 'production',
     apiVersion: '2021-08-31',
     token: '', // or leave blank to be anonymous user
     useCdn: false,
     ignoreBrowserTokenWarning: true,
});

export default client;