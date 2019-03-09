import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// React data center用
import { connect } from 'react-redux'

class Home extends Component {

  // NOTE: React 有自己的data center
  // state = {
  //   posts: []
  // }
  // async componentDidMount() {
  //   // 這會回傳promise
  //   // axios.get('https://jsonplaceholder.typicode.com/posts')
  //   //   .then((res) => {
  //   //     console.log(res)
  //   //   })
  //   let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  //   this.setState({
  //     posts: res.data.slice(0, 10) // 取前10個,然後更新於posts中
  //   })
  // }


  render() {
    console.log(this.props)
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map((post) => {
        return <div className="post card" key={post.id}>
          <div className="card-content">
            <Link to={'/' + post.id}>
              <span className="card-title">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      })
    ) : (
        <div className="center">No post yet</div>
      )
    return (
      <div className="container" >
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}


// connect回傳high order component
export default connect(mapStateToProps)(Home)