import React from 'react';
import Affix from '../components/common/Affix/index';
import { Tree } from 'antd';
import styles from './user.css';
import { useState } from 'react';
const { TreeNode } = Tree;

export default function() {
  const [container, setContainer] = useState();
  const [change, setChange] = useState(0);

  return (
    <div className={styles.normal}>
      <h1>Page user</h1>

      <div
        className={styles.left_content}
        ref={node => {
          setContainer(node);
        }}
      >
        <Tree
          showLine
          defaultExpandAll={true}
          onExpand={va => {
            container.scrollTo();
            //setChange(change + 1);
          }}
        >
          <TreeNode title="parent 1" key="0-0" icon={false}>
            <TreeNode title="parent 1-0" key="0-0-0">
              <TreeNode title="leaf" key="0-0-0-0" />
              <TreeNode title="leaf" key="0-0-0-1" />
              <TreeNode title="leaf" key="0-0-0-2" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title="leaf" key="0-0-1-0" />
            </TreeNode>
            <TreeNode title="parent 1-2" key="0-0-2">
              <TreeNode title="leaf" key="0-0-2-0" />
              <TreeNode title="leaf" key="0-0-2-1" />
            </TreeNode>
            <TreeNode title="parent 1-0" key="0-0-3">
              <TreeNode title="leaf" key="0-0-3-0" />
              <TreeNode title="leaf" key="0-0-3-1" />
              <TreeNode title="leaf" key="0-0-3-2" />
            </TreeNode>
          </TreeNode>
        </Tree>
        <Affix target={container} change={change}>
          lala
        </Affix>
      </div>
    </div>
  );
}
