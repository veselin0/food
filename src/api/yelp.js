import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer GCkav9NsdYoD9V9IBIt8BoPO07aHJ7D--b84wfwZieKbpvznuPU7V6u4q8_Q62FV0IiRyC6zRAjlO6atBPnmKS8WbmQQEJAhKcsilGp9dkSZGfkqWP6p6ntYnLuaX3Yx',
  },
});
