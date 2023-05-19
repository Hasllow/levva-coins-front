import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 77em 1fr;
`;

export const TransactionsContainer = styled.main`
  grid-column: 3/2;
  width: 100%;
  max-width: 1120px;
  margin-top: 1rem;
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme['gray-500']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighlightProps {
  variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props =>
    props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};
`;
