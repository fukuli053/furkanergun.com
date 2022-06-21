import React from "react";
import A from "components/a";

function Footer() {
  return (
    <footer className="mt-40 pb-14">
      <div className="c-small">
        <p>
          You can reach the website's codes on {" "}
          <A href="https://github.com/fukuli053/furkanergun.com">Github Repo</A>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
