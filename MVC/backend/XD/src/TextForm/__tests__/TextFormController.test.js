import React from "react";
import TestRenderer from "react-test-renderer";

import { TextFormController } from "../TextFormController";

function PropsTester(props) {
  return null;
}

describe("TextFormController", () => {
  it("should test standard behavior", async () => {
    const component = TestRenderer.create(
      <TextFormController>
        {props => <PropsTester {...props} />}
      </TextFormController>
    );
    let tester = component.root.findByType(PropsTester);

    // Test initial state
    expect(tester.props.textField).toBe("");
    expect(tester.props.isSubmitting).toBe(false);

    // Test filling out the form
    tester.props.onTextChange({ target: { value: "foo" } });
    expect(tester.props.textField).toBe("foo");

    // Test submitting
    tester.props.onClickSubmit();
    expect(tester.props.isSubmitting).toBe(true);
  });
});
