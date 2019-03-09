import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {

  // NOTE: React 有自己的data center
  // state = {
  //   post: null
  // }
  // async componentDidMount() {
  //   let id = this.props.match.params.post_id // 存取url的param
  //   let res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  //   this.setState({
  //     post: res.data
  //   })
  // }


  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }
  render() {
    console.log(this.props)
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
        </div>
      </div>
    ) : (
        <div className="center">Loading post...</div>
      )
    return (
      <div className="container">
        <h4>{post}</h4>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id

  return {
    post: state.posts.find((post) => {
      return post.id === id
    })
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: 'DELETE_POST', id: id })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)