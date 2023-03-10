import React, { useState } from "react";
//Module level styling
import styles from "./stylesheet/BoxCard.module.css";

export const BoxCard = ({ result, children }) => {
  const [show, setShow] = useState(true);

  /*
  const styledChildren = React.Children.map(children, child => {
    if (child.props.className) {
      return React.cloneElement(child, {
        className: `${child.props.className} ${styles[child.props.className]}`
      });
    } else {
      return child;
    }
  });
  */

  /*
  const styledChildren = React.Children.map(children, child => (
    child.props.className 
      ? React.cloneElement(child, { className: `${child.props.className} ${styles[child.props.className]}` }) 
      : child
  ));
  */

  const styledChildren = React.Children.map(children, child => {
    if (child.props.className) {
      return <child.type {...child.props} className={`${child.props.className} ${styles[child.props.className]}`} />;
    } else {
      return child;
    }
  });
  
  return (
    <div className={show ? "" : "hidden"}>
      {/* .box.alert, .box.warning, .box.success */}
      <div className={`${styles.box} ${styles[result]} `}>
        {styledChildren}

        {/* .box button.trigger */}
        <button
          onClick={() => setShow(!show)}
          className={`${styles.box__button} ${styles.trigger}`}
        >
          Hide
        </button>
      </div>
    </div>
  );
};
