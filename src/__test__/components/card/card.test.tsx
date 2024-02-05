import { render } from "@testing-library/react";
import { CardFlex, CardProps } from "components/card";
import protect from 'assets/protect.svg'

describe('Card component', () => {
    let cardProps: CardProps
    let cardElement: ReturnType<typeof render>;

    beforeEach(() => {
        cardProps = {
            flex: 'column',
            icon: protect,
            title: 'All-round Protection'
        }
        cardElement = render(<CardFlex {...cardProps} />)
    })

    it ('renders with title prop', () => {
        const { getByTestId } = cardElement
        const card = getByTestId('card-flex')
        expect(card).toBeTruthy()
    })

    it ('renders with column styles when flex prop is column', () => {
        const { getByTestId } = cardElement
        const card = getByTestId('card-flex')
        expect(card.classList.contains('flex-col')).toBe(true)
    })

    it ('renders with row styles when flex prop is row', () => {
        cardProps.flex = 'row'
        cardElement.rerender(<CardFlex {...cardProps} />)
        const { getByTestId } = cardElement
        const card = getByTestId('card-flex')
        expect(card.classList.contains('flex-col')).toBe(false);
    })
})