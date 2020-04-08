import React, {Component} from "react";
import {Button, Layout, Icon} from "antd";
import {Map} from "immutable";
import TelescopicPanel from "../../components/telescopic-panel";
import "../../components/telescopic-panel/style"
import "./telescopicPanel.less"

const {Header, Content, Footer} = Layout;

class TelescopicPanelPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="hello">
      <TelescopicPanel/>
    </div>;
  }
}

export default TelescopicPanelPage;
