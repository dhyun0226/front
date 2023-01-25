const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '이동현',
      },
      content: '첫 번째 게시글 #Vue3 #node',
      Images: [
        {
          src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff1%2FVue.png&imgrefurl=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2FVue.js&tbnid=C3RxwPDjQH7LKM&vet=12ahUKEwjs38eZ2OH8AhXiKKYKHZbpBvwQMygAegUIARC-AQ..i&docid=EHtDKZrjGSHRkM&w=400&h=400&q=vue&ved=2ahUKEwjs38eZ2OH8AhXiKKYKHZbpBvwQMygAegUIARC-AQ',
        },
        {
          src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff1%2FVue.png&imgrefurl=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2FVue.js&tbnid=C3RxwPDjQH7LKM&vet=12ahUKEwjs38eZ2OH8AhXiKKYKHZbpBvwQMygAegUIARC-AQ..i&docid=EHtDKZrjGSHRkM&w=400&h=400&q=vue&ved=2ahUKEwjs38eZ2OH8AhXiKKYKHZbpBvwQMygAegUIARC-AQ',
        },
        {
          src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff1%2FVue.png&imgrefurl=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2FVue.js&tbnid=C3RxwPDjQH7LKM&vet=12ahUKEwjs38eZ2OH8AhXiKKYKHZbpBvwQMygAegUIARC-AQ..i&docid=EHtDKZrjGSHRkM&w=400&h=400&q=vue&ved=2ahUKEwjs38eZ2OH8AhXiKKYKHZbpBvwQMygAegUIARC-AQ',
        },
      ],
      Comments: [
        {
          User: {
            nickname: '이동현',
          },
          content: '행복',
        },
        {
          User: {
            nickname: '이동현',
          },
          content: '짜증',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '이동현',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
