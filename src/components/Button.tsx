"use client"

import styled, { css } from "styled-components"

const buttonVariants = {
  default: css`
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  `,
  success: css`
    background-color: hsl(var(--success));
    color: hsl(var(--success-foreground));
  `,
}

const StyledButton = styled.button<{ variant: "default" | "success" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.75rem;
  padding: 0.75rem 1.5rem;
  gap: 0.75rem;
  border-radius: 0.375rem;
  white-space: nowrap;
  transition: background-color 0.2s, color 0.2s;
  outline: none;
  &:focus-visible {
    ring: 2px solid var(--ring);
    ring-offset: 2px;
  }
  ${({ variant }) => buttonVariants[variant]}
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "success"
  children: React.ReactNode
}

export function Button({ variant = "default", ...props }: ButtonProps) {
  return (
    <StyledButton variant={variant} {...props}>
      {props.children}
    </StyledButton>
  )
}
