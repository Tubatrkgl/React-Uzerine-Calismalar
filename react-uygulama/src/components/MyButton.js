const MyButton = (props) => {
    return (
      <button
        style={{
          border: "none",
          width: 120,
          height: 40,
          marginLeft: 12,
          marginTop: 12,
          backgroundColor: props.color,
        }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  };
  export default MyButton;
  