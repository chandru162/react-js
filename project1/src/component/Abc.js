import React from "react";

const Abc = ({ name, age, children }) => {
  return (
    <>
      <h1 className={`${isadmin ? "nn" : "bgn"} grthrth eheth ethet`}>
        welcome{name} age is {age}
      </h1>
      {children}
    </>
  );
};

export default Abc;
