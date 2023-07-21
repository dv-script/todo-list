import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
  border-radius: 8px;
  border-top: 1px solid #333;
`;

export const EmptyTasksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const EmptyTasksText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyTasksTitle = styled.h2`
  font-size: 1rem;
  color: var(--gray-300);
  font-weight: 700;
  line-height: 1.4rem;
`;

export const EmptyTasksDescription = styled.p`
  font-size: 1rem;
  color: var(--gray-300);
  font-weight: 400;
  line-height: 1.4rem;
`;
