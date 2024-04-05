import './Button.scss'

type ButtonProps = {
  onClick?: () => void;
  variant: string;
  disabled: boolean;
  label: string;
  hide?: boolean;
}

export const Button = ({onClick, variant, disabled, label, hide}: ButtonProps) => {
  return (
    <div className='button-container'>
      <button style={{display: hide ? 'none' : undefined}} disabled={disabled} className={`button button--${variant}`} onClick={onClick}>{label}</button>
    </div>
  )
}
