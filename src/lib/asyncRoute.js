import React from 'react';

/*
  asyncComponent 이 함수는 HOC인데 index.async.js에서 즉시 호출을 하더라도
  이 함수에 getComponent라는 함수를 전달했어도 이 함수는 곧장 실행되지 않는다.
  왜냐하면 반환되는 함수가 리액트 컴포넌트인데 getComponent가 실행되는 시점은 이 컴포넌트가
  어딘가에서 마운트가 되기 직전(componentWillMount)이기 때문이다.
  그래서 index.async.js에서 모든 container들을 asyncComponent함수로 즉시 불러오더라도
  반환되는 리액트 컴포넌트가 마운트되지 않는다면(해당 페이지로 이동하지 않는다면) 비동기 호출은
  이루어지지 않을 것이다.
*/
export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(({default: Component}) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        })
      }
    }

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />
      }
      return null;
    }
  }
}
