import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/data').reply(200, {
  pages: {
    main_page: {
      tabs: [],
    },
  },
  contact_us: {},
  follow_us: {},
  navigation: [],
})
// forwards the matched request over network
  .onAny().passThrough();
