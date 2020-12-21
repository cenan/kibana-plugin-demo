import React from 'react';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
    const { httpClient } = this.props;
    httpClient.get('../api/demo/example').then(resp => {
      this.setState({ time: resp.data.time });
    });
  }
  render() {
    return <iframe title="demo" src="http://localhost:3000" />;
  }
}
