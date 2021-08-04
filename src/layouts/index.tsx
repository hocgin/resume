import React from 'react';
import styles from './index.less';
import {Footer as GinFooter, Eggs as GinEggs} from '@hocgin/ui';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.container}>
      <GinEggs/>
      {props.children}
      <GinFooter/>
    </div>
  );
};

export default BasicLayout;
