import App from "next/app";
import { getMember } from "@/store/actions/layoutActions";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import "../styles/global.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    const {
      req: {
        cookies: { BSAUTHTIX },
      },
      store: { dispatch },
    } = ctx;
    if (BSAUTHTIX) {
      await dispatch(getMember(BSAUTHTIX));
    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
