import React from 'react';
import Proptype from 'prop-types';

const Comments = ({ comments }) => {
  return (
    <div>
      { comments[0].content }
    </div>
  );
};

Comments.proptype = {
  comments: Proptype.arrayOf(Proptype.object),
};
export default Comments;
