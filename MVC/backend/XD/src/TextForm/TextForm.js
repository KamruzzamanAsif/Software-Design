import React from "react";
import { TextFormController } from "./TextFormController";
import { TextFormView } from "./TextFormView";

export function TextForm() {
  return (
    <TextFormController>
      {({ onTextChange, onClickSubmit, textField, isSubmitting, responseMessage }) => (
        <TextFormView
          onTextChange={onTextChange}
          onClickSubmit={onClickSubmit}
          textField={textField}
          isSubmitting={isSubmitting}
          responseMessage={responseMessage}
        />
      )}
    </TextFormController>
  );
}
