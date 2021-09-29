import React from "react";
import { useLoading, Oval } from "@agney/react-loading";

const Loading = (props) => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval width={props.iconSize} />,
  });
  return (
    <>
      <div
        className="d-flex justify-content-center pt-4"
        style={{ fontSize: props.fontSize }}
      >
        <section {...containerProps}>
          {indicatorEl} {props.message}
        </section>
      </div>
    </>
  );
};

export default Loading;
