import * as React from "react";

function ChevronBottom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 612.004 612.004"
      width="16px"
      height="16px"
      style={{ marginLeft: 6 }}
      {...props}
    >
      <path d="M499.147 160.094L330.222 329.019c-6.472 6.472-15.075 10.035-24.223 10.035-9.146 0-17.749-3.561-24.218-10.035L112.854 160.094c-25.822-25.817-67.674-25.817-93.491 0-25.817 25.819-25.817 67.674 0 93.491L188.29 422.508c31.443 31.445 73.245 48.764 117.712 48.764s86.269-17.319 117.714-48.761l168.925-168.925c25.817-25.817 25.817-67.674 0-93.491-25.819-25.818-67.679-25.818-93.494-.001z" />
    </svg>
  );
}

export default ChevronBottom;
