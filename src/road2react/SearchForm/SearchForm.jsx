import { memo, useEffect, useRef } from "react";
import "../road2react.css";

const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  isFocused,
  children,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id} className="label">
        {children}
      </label>
      &nbsp;
      <input
        id={id}
        ref={inputRef}
        type={type}
        value={value}
        onChange={onInputChange}
        className="input"
      />
    </>
  );
};

const Labelinput = () => <strong>search1:</strong>;

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) =>
  console.log("B:Search") || (
    <form onSubmit={onSearchSubmit} className="search-form">
      <InputWithLabel
        id="search2"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        <Labelinput />
      </InputWithLabel>
      <button
        type="submit"
        disabled={!searchTerm}
        className="button button_large"
      >
        submit
      </button>
    </form>
  );

export default memo(SearchForm);
