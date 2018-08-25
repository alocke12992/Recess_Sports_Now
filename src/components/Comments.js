import React from "react";
import PropTypes from "prop-types";
import FacebookProvider, {Comments as FBComments} from "react-facebook";

import config from "../../config";

const Comments = props => {
  const {facebook, slug} = props;

  return (
    <React.Fragment>
      <div id="post-comments" className="comments">
        <FacebookProvider appId={facebook}>
          <FBComments href={`${config.siteUrl}${slug}`} width="100%" colorscheme="light" />
        </FacebookProvider>
      </div>
    </React.Fragment>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
};

export default Comments;