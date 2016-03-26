import React from 'react';
import Header from '../components/Header';
import MemoList from '../components/MemoList';

export default class AppLayout extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { memos, createMemo } = this.props;
    createMemo(`New memo ${memos.length + 1}`);
  }

  render() {
    const { memos, removeMemo, updateMemoContent } = this.props;
    return (
      <div className="container">
        <Header />
        <button className="add-button" onClick={this.onClick}>Add</button>
        <MemoList
          memos={memos}
          removeMemo={removeMemo}
          updateMemoContent={updateMemoContent}
        />
      </div>
    );
  }
}

AppLayout.propTypes = {
  memos: React.PropTypes.array.isRequired,
  createMemo: React.PropTypes.func.isRequired,
  removeMemo: React.PropTypes.func.isRequired,
  updateMemoContent: React.PropTypes.func.isRequired,
};

