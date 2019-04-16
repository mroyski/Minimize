import React, { Component } from 'react';
import ReactFilestack from 'filestack-react';
import Category from './Category';
import './CategoryDetailsPage.css';

class CatDetails extends Component {
  constructor() {
    super();
    this.state = {
      category: { posts: [{}] },
      totalItems: 0,
      removedItems: 0,
      postDescription: '',
      postImgPath: '',
      goals: [],
      tracker: []
    };
  }
  componentDidMount() {
    const { params } = this.props.match;
    fetch(`https://localhost:44387/api/category/${params.categoryId}`)
      .then(res => res.json())
      .then(json => this.setState({ category: json }));
    this.getGoalById(params.categoryId);
  }
  getGoalById = catId => {
    fetch(`https://localhost:44387/api/tracker/${catId}`)
      .then(res => res.json())
      .then(data => {
        const obj = data.filter(function(cat) {
          return cat.categoryId == catId;
        });
        this.setState({ goals: obj });
        obj.map(item => this.getTracker(item.goalId));
      });
  };
  getTracker = goalId => {
    fetch(`https://localhost:44387/api/tracker/${goalId}`)
      .then(res => res.json())
      .then(data => {
        const assignTracker = Object.assign([], data);
        this.setState({ tracker: assignTracker });
        const track = this.state.tracker;
        console.log(track);
        // assignTracker.map(item => {});
        // const goalTotalItemsActuallyRemoved = null;
        // const goalTotalItemsToRemov = null;
        // const percentageComplet = 0;
      });
  };

  addPost = post => {
    fetch('https://localhost:44387/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => {
      if (res.ok) {
        const currentPosts = [...this.state.category.posts, post];
        const withNewPost = Object.assign({}, this.state.category, {
          posts: currentPosts
        });
        this.setState({ category: withNewPost });
      }
    });
  };
  deletePost = postId => {
    fetch(`https://localhost:44387/api/post/${postId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          const currentPosts = this.state.category.posts;
          const updatedPosts = currentPosts.filter(
            item => item.postId !== postId
          );
          const updatedCategory = Object.assign({}, this.state.category, {
            posts: updatedPosts
          });
          this.setState({ category: updatedCategory }); //all the old stuff, but replace the posts with updatePosts.
          console.log(updatedCategory);
        }
      })
      .catch(console.error);
  };

  onSuccess = result => {
    this.setState({
      postImgPath: result.filesUploaded[0].url
    });
  };

  onError = error => {
    console.error('error', error);
  };

  formModal = () => {
    document.querySelector('.create-post').classList.add('form-active');
  };

  closeModal = () => {
    document.querySelector('.create-post').classList.remove('form-active');
  };

  render() {
    return (
      <Category
        categoryId={this.props.match.params.categoryId}
        categoryName={this.state.category.categoryName}
        categoryDescription={this.state.category.categoryDescription}
        posts={this.state.category.posts}
        postTime={this.state.postTime}
        postImgPath={this.state.postImgPath}
        addPost={this.addPost}
        deletePost={this.deletePost}
        editPost={this.updatePost}
        onSuccess={this.onSuccess}
        onError={this.onError}
        formModal={this.formModal}
        closeModal={this.closeModal}
        goals={this.state.goals}
      />
    );
  }
}

export default CatDetails;
