import React from 'react'
import PropTypes from 'prop-types'
import { BackgroundAdTemplate } from '../../templates/backgroundAd'

const BackgroundAdPreview = ({ entry, getAsset }) => (
  <BackgroundAdTemplate
  title={entry.getIn(['data', 'title'])}
  image={entry.getIn(['data', 'image'])}
  link={entry.getIn(['data', 'link'])}
  /> 
)

BackgroundAdPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BackgroundAdPreview
