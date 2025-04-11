export function Search({ className = "", fillColor = "#615D6C", bgColor = "" }) {
  return (
    <div className={bgColor ? `${bgColor} rounded-full p-1` : ""}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={className}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 11.0002C5 7.6912 7.691 5.0002 11 5.0002C14.309 5.0002 17 7.6912 17 11.0002C17 14.3092 14.309 17.0002 11 17.0002C7.691 17.0002 5 14.3092 5 11.0002ZM20.707 19.2932L17.312 15.8972C18.365 14.5432 19 12.8462 19 11.0002C19 6.5892 15.411 3.0002 11 3.0002C6.589 3.0002 3 6.5892 3 11.0002C3 15.4112 6.589 19.0002 11 19.0002C12.846 19.0002 14.543 18.3652 15.897 17.3122L19.293 20.7072C19.488 20.9022 19.744 21.0002 20 21.0002C20.256 21.0002 20.512 20.9022 20.707 20.7072C21.098 20.3162 21.098 19.6842 20.707 19.2932Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
