import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

const PostList = (props) => {
  return <div>PostList</div>;
};

export default connect(null, { fetchPost })(PostList);
