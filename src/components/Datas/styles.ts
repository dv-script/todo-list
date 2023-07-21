import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CreatedTasksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const CreatedTasksTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--blue);
`;
export const CreatedTasksNumber = styled.span`
  font-size: 0.75rem;
  color: var(--gray-200);
  border-radius: 0.5rem;
  background-color: var(--gray-400);
  padding: 0.125rem 0.5rem;
`;

export const FinishedTasksContainer = styled(CreatedTasksContainer)``;

export const FinishedTasksTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--purple);
`;

export const FinishedTasksNumber = styled(CreatedTasksNumber)``;
