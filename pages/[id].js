import React from 'react'
import LayoutApp from '../src/components/layout/app/'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'

class Redirect extends React.Component {
  async componentDidMount() {
    const { params } = this.props
    console.log(params)
    this.redirectPage('https://google.com')
  }

  redirectPage = (url) => {
    window.location.href = url
  }

  render() {
    const { params } = this.props
    console.log(params)
    return (
      <div>
        <Head>
          <title>Redirect to {params.id}</title>
        </Head>
        <p>Hello </p>
      </div>
    )
  }
}

export default Redirect