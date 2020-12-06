import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from '../App';

describe('Book list of Dante', () => {
    it('should add new book', () => {
        const { getByText, getByTestId } = render(<App />);

        fireEvent.click(getByText('Adicionar Livro'));
        
        expect(getByTestId('book-list')).toContainElement(getByText('O inferno de Dante'));
    });

    it('should remove book', () => {
        const { getByText, getByTestId } = render(<App />);

        fireEvent.click(getByText('Remover Livro'));
        
        expect(getByTestId('book-list')).toContainElement(getByText('Nenhum resultado.'));
    });
});
