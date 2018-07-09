import React from 'react'
import PropTypes from 'prop-types'
import {AboutPageTemplate} from '../../templates/about-page'

const AboutPagePreview = ({entry, widgetFor}) => (
  <AboutPageTemplate
    link={entry.getIn(['data', 'link'])}
    content={widgetFor('body')}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
