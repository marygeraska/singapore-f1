import { useTheme } from "../Theme";

export function Button({
  children,
  disabled = false,
  loading = false,
  ...props
}) {
  const { theme } = useTheme();

  return (
    <button
      disabled={disabled || loading}
      className={`
  ${theme.button.base}
  ${theme.button.hover}
  ${theme.button.disabled}
`}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
