interface ButtonProps {
    variant: 'primary' | 'secondary',
    type: 'button' | 'submit',
    onClick: () => void;
    children: string
}

export const Button = ({ type, onClick, variant, children }: ButtonProps) => {
    return (
        <button
         type={type} 
         onClick={onClick} 
         className={`py-2.5 px-6 rounded text-[#FFFFFF] font-pop text-base font-medium ${variant === 'primary' ? 'bg-[#284F8A]' : 'bg-[#6E83A480]'}`}>
            {children}
        </button>
    )
}

export const paragraph = "font-pop font-normal text-base tracking-[0.15px] text-[#A4A4A4]"