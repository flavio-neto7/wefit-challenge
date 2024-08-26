interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <button className="inline-flex items-center justify-center bg-primary font-bold text-xs py-3 px-6 gap-3 rounded">
      {props.children}
    </button>
  )
}
