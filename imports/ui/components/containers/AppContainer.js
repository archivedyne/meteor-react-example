import AppLayout from '../layouts/AppLayout';
import { Memos } from '../../api/memos/memos';
import { createContainer } from 'meteor/react-meteor-data';

const createMemo = content => {
  Memos.insert({content});
};

const removeMemo = memoId => {
  Memos.remove({_id: memoId});
};

const updateMemoContent = (memoId, content) => {
  Memos.update({_id: memoId}, {$set: {content}});
};

export default createContainer(() => {
  return {
    memos: Memos.find({}, {sort: {createdAt: -1}}).fetch(),
    createMemo,
    removeMemo,
    updateMemoContent,
  };
}, AppLayout);
