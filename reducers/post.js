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
          src: 'https://vuejs.org/images/logo.png',
        },
        {
          src: 'https://vuejs.org/images/logo.png',
        },
        {
          src: 'https://vuejs.org/images/logo.png',
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
