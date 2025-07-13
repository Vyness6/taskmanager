export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) {
  let base =
    "px-4 py-2 rounded text-white font-semibold transition-colors duration-200 ";
  let variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
