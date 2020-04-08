import React, { Component } from "react";
import { Button, Layout, Icon } from "antd";
import { Map } from "immutable";
import TelescopicLayout from "../../components/telescopic-layout";
import "../../components/telescopic-layout/style"
import "./telescopicLayout.less"

const { Header, Content, Footer } = Layout;

class TelescopicLayoutPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let theme = {
      background: 'green'
    }
    return <TelescopicLayout theme={theme} />;
    }
}

  export default TelescopicLayoutPage;
