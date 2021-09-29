import React from "react";
import { useLoading, Oval } from "@agney/react-loading";

const Loading = (props) => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval width={props.size} />,
  });
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <section {...containerProps}>
          {indicatorEl} {/* renders only while loading */}
        </section>
        <h2 style={{ marginTop: "10px", fontSize: props.fontSize }}>{props.message}</h2>
      </div>
    </>
  );
};

export default Loading;
