import styled from "styled-components";

export const TaskCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--gray-400);
  border-radius: 8px;
  background-color: var(--gray-500);
`;

export const TaskCardCheckBox = styled.input`
  display: none;
`;

export const TaskCardCheckBoxChecked = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid var(--purple);
  outline: none;
  background-color: transparent;
  overflow: hidden;
  transition: 0.2s;
  background-color: var(--purple);
`;

export const TaskCardCheckBoxUnchecked = styled(TaskCardCheckBoxChecked)`
  background-color: transparent;
  border: 2px solid var(--blue);
`;

export const TaskCardText = styled.p`
  width: 100%;
  color: var(--gray-100);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.225rem;
`;

export const TaskCardDeleteButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
