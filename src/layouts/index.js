import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './style.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="CryptoPapers.info"
      meta={[
        { name: 'description', content: 'Your source for cryptocurrency research.' },
        { name: 'keywords', content: 'cryptocurrency, ico, bitcoin, ethereum' },
      ]}
    />
    <div className='page_wrap'>
      <Header />
      <Navigation />
      <div className='site_body'>
        {children()}
      </div>
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
