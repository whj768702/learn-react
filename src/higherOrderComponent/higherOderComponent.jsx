const reverse =
  (PassedComponent) =>
  ({ children, ...props }) => (
    <PassedComponent {...props}>
      {children.split("").reverse().join("")}
    </PassedComponent>
  );

function name(props) {
  return <span>{props.children}</span>;
}

const ReversedName = reverse(name);

export default ReversedName;
