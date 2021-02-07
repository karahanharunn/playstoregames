import React, { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return <div style={{ paddingTop: 40, width: "100%" }}>{children}</div>;
}
