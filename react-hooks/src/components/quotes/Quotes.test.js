import { render, screen, fireEvent} from '@testing-library/react'; //fireEvent simula interações do usuário
import { Quotes } from './Quotes';

const quote = 'test quote';
const speaker = 'ramdom speaker'

test('renders received quote, speaker and a button', () => {
    render(<Quotes quote={quote} speaker={speaker} />);

    const quotEl = screen.getByText(/quote/);
    const speakerEl = screen.getByText(`- ${speaker}`)
    const buttonEl = screen.getByRole('button')

    expect(quotEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
})

test('calls a callback when button is pressed', () => {
    const callback = jest.fn(); //jest: função espiã pra ver se as funções são criadas corretamentes

    render(<Quotes quote={quote} speaker={speaker} onUpdate={callback} />);

    const buttonEl = screen.getByRole('button');
    fireEvent.click(buttonEl);
    
    expect(callback).toHaveBeenCalledTimes(1);


})