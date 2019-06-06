import React, { Component } from 'react';
import { Modal } from 'antd';

class InModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { children, content, modalProps } = this.props;
    return (
      <div>
        <div onClick={this.showModelHandler}>{children}</div>
        <Modal
          visible={this.state.visible}
          onCancel={this.hideModelHandler}
          maskClosable={false}
          {...modalProps}
        >
          {content}
        </Modal>
      </div>
    );
  }
}

export default InModal;