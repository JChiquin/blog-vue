import { Http } from 'vue-resource';

export default {
  getPosts() {
    return Http.get('http://localhost:3000/posts', { headers: { authentication: '1234' } });
  },
};
