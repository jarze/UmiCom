import { useState, useEffect } from 'react';
import styles from './index.less';

const AF = ({ target, children, change }) => {
  const [st, setST] = useState(0);
  const [sef, setSef] = useState();

  useEffect(
    () => {
      if (target === undefined) return;
      console.log('listen scroll ===================');
      if (window.attachEvent) {
        //ie浏览器下。
        target.attachEvent('onscroll', checkPosition);
      }
      if (window.addEventListener) {
        //非ie浏览器下
        target.addEventListener('scroll', checkPosition);
        return () => {
          target.removeEventListener('scroll', checkPosition);
        };
      }
    },
    [target],
  );

  useEffect(
    () => {
      target && checkPosition();
    },
    [change],
  );

  const checkPosition = () => {
    let ss = target.scrollTop + target.clientHeight - target.scrollHeight;
    setST(ss);
    console.log(change, st);
  };

  return <div style={st < 0 ? { position: 'relative', top: st } : {}}>{children}</div>;
};

export default AF;
