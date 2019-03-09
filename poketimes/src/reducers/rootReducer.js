// 建立初始資料
const initState = {
  posts: [
    { id: '1', title: 'buy the eggs', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, quo sunt exercitationem placeat ut enim magni? Unde veniam blanditiis itaque, culpa cumque doloribus quibusdam voluptas placeat consequatur sapiente exercitationem eius.' },
    { id: '2', title: 'walk the dogs', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, quo sunt exercitationem placeat ut enim magni? Unde veniam blanditiis itaque, culpa cumque doloribus quibusdam voluptas placeat consequatur sapiente exercitationem eius.' },
    { id: '3', title: 'bring the books', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, quo sunt exercitationem placeat ut enim magni? Unde veniam blanditiis itaque, culpa cumque doloribus quibusdam voluptas placeat consequatur sapiente exercitationem eius.' }
  ]
}

// 定義reducer, 用來CRUD之類的事情
const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter((post) => {
      return post.id !== action.id
    })
    return {
      ...state,
      posts: newPosts
    }
  }
  return state
}


export default rootReducer