import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  height: 3.375rem;
  margin: -1.6875rem 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const Input = styled.input`
  width: 39.875rem;
  height: 3.375rem;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--gray-500);
  color: var(--gray-300);
  border-radius: 8px;
  border: 1px solid var(--gray-600);
  outline: none;

  &::placeholder {
    font-size: 1rem;
    font-weight: regular;
    color: var(--gray-300);
  }
`;

export const Button = styled.button`
  width: 5.625rem;
  height: 3.25rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: var(--blue-dark);
  color: var(--white);
  font-weight: 600;
  font-size: 0.875rem;

  &:active {
    background-color: var(--blue);
  }
`;
