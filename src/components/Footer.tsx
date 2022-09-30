import React from "react";

export function Footer() {
  return (
    <div className="footer">
      <div>
        Check out my&nbsp;
        <a href="https://github.com/thinkty" target="_blank">Github</a>
        &nbsp;or&nbsp;
        <a href="https://thinkty.net/categories/projects/" target="_blank">Blog</a>
        &nbsp;for more!
      </div>
      <div>
        © { new Date().getFullYear() } Tae Yoon Kim.
      </div>
    </div>
  );
}