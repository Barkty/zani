import { render, fireEvent } from '@testing-library/react'
import { Button, ButtonProps } from 'components/button';

describe('Button component', () => {
    let buttonProps: ButtonProps;
    let buttonElement: ReturnType<typeof render>;

    beforeEach(() => {
        buttonProps = {
            variant: 'primary',
            onClick: jest.fn(),
            type: 'button',
            children: 'Learn More'
        }
        buttonElement = render(<Button {...buttonProps} />)
    })

    it ('renders with children', () => {
        const { getByTestId } = buttonElement
        const button = getByTestId('button')
        expect(button).toBeTruthy()
    })

    it('calls onClick when clicked', () => {
        const { getByTestId } = buttonElement
        const button = getByTestId('button')
        fireEvent.click(button)
        expect(buttonProps.onClick).toHaveBeenCalledTimes(1)
    })

    it ('renders with primary styles when variant prop is primary', () => {
        const { getByTestId } = buttonElement
        const button = getByTestId('button')
        expect(button.classList.contains('bg-[#284F8A]')).toBe(true)
    })

    it ('renders with secondary styles when variant prop is secondary', () => {
        buttonProps.variant = 'secondary'
        buttonElement.rerender(<Button {...buttonProps} />)
        const { getByTestId } = buttonElement
        const button = getByTestId('button')
        expect(button.classList.contains('bg-[#6E83A480]')).toBe(true)
    })
})