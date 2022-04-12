import React from "react";

import { InputTags } from "react-bootstrap-tagsinput";
import "react-bootstrap-tagsinput/dist/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }
  render() {
    return (
      <div style={{ margin: 10 }}>
        <div className="input-group">
          <InputTags
            values={this.state.tags}
            onTags={(value) => this.setState({ tags: value.values })}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            data-testid="button-clearAll"
            onClick={() => {
              this.setState({ tags: [] });
            }}
          >
            Delete all
          </button>
        </div>
        <hr />
        <ol>
          {this.state.tags.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
