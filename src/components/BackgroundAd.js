import React from 'react';

const BackgroundAd = (props) => {
  return (
    <div className="fill">
      <img src={props.ad[0].node.frontmatter.image} />
    </div>
  )
}

export default BackgroundAd