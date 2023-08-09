export function TextFormView({
  onTextChange,
  onClickSubmit,
  textField,
  isSubmitting,
  responseMessage
}) {
  return (
    <div>
      <p> Create a user_name </p>
      <input
        type="text"
        value={textField}
        disabled={isSubmitting}
        onChange={onTextChange}
      />
      <button disabled={isSubmitting} onClick={onClickSubmit}>
        Submit text
      </button>
      <div>
        {responseMessage && <p style={{ color: "bold" }}>{responseMessage}</p>}
      </div>
    </div>
  );
}
