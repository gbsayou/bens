import React from 'react'
import { connect } from 'react-redux'
import Cookies from 'universal-cookie'
import {checkEmail} from '../../lib/helpers'
import { signin, signup } from '@/store/actions/layoutActions'
import ContentBody from "@/components/ContentBody";
import styles from "./index.module.scss";

export class Login extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
    error: undefined
  }

  handleLogin = async (isSignup) => {
    const { signin, signup } = this.props
    const cookie = new Cookies()
    const { email, password, name } = this.state
    if (!(email && password && (isSignup ? name : true))) {
      this.setState({
        error: `Please input your ${!email ? 'email' : !password ? 'password' : 'name'}`
      })
      return
    }

    if(!checkEmail(email)){
      this.setState({
        error:'Email is not valid'
      })
      return
    }

    let result
    if (isSignup) {
      result = await signup({ email, password, name })
    } else {
      result = await signin({ email, password })
    }
    if (result.error) {
      this.setState({ error: result.error })
      return
    }

    const { token } = result
    const option = { path: '/', domain: 'localhost' }
    const cookieName = 'BSAUTHTIX'
    cookie.set(cookieName, token, option)
    window.location = '/'
  }

  onChange=({ key, value }) => {
    this.setState({
      [key]: value,
      error: undefined
    })
  }

  render () {
    const { isSignup } = this.props
    const { error } = this.state
    return (
      <ContentBody showRightRail={false}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Sign {isSignup?'Up':'In'}</h2>
        <div className={styles.error}>{error}</div>


        <div className={styles.field}>
          <label>Email</label>
          <input placeholder='Enter your email' onChange={(e) => this.onChange({ key: 'email', value: e.target.value })} />
        </div>

        <div className={styles.field}>
          <label>Password</label>
          <input placeholder='Enter your password' onChange={(e) => this.onChange({ key: 'password', value: e.target.value })} />
        </div>

        {isSignup && (
          <div className={styles.field}>
            <label>Name:</label>
            <input placeholder='Enter your name' onChange={(e) => this.onChange({ key: 'name', value: e.target.value })} />
          </div>
        )}

        {!isSignup && (
          <>
            <button className={styles.cta} onClick={() => { this.handleLogin(false) }}>
              Sign in
            </button>
            <div>New to Ben Style?</div>
            <a href='/signup' className={styles.cta}>Sign up</a>
          </>
        )}

        {isSignup &&
          <button className={styles.cta} onClick={() => { this.handleLogin(true) }}>
            Sign up
          </button>}
      </div>
      </ContentBody>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    layout: { isLogin }
  } = state
  return { isLogin }
}
const mapDispatchToProps = (dispatch) => ({
  signin: async (data) => await dispatch(signin(data)),
  signup: async (data) => await dispatch(signup(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
