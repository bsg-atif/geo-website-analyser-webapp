export default function WrapperContainer({ children, className = "" }) {
  return <div className={`wrapper ${className}`}>{children}</div>;
}
