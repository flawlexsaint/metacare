import { useState } from "react";
import { InputText } from "primereact/inputtext";

const SearchComponent = ({ props }) => {
  const { content, style, icon } = props;
  const [value3, setValue3] = useState("");
  return (
    content && (
      <span className={`p-float-label ${icon}`}>
        {icon && <i className="pi pi-search me-4" />}
        <InputText
          className={style}
          id="inputtext"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
        <label htmlFor="inputtext">{content}</label>
      </span>
    )
  );
};

export default SearchComponent;
