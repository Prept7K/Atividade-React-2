import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background: #e0f2fe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const ProfileCard = styled.div`
  background: #ffffff;
  border-radius: 2rem;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  text-align: center;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const ProfileName = styled.h2`
  font-size: 2rem;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;

export const ProfileBio = styled.p`
  font-style: italic;
  color: #475569;
  margin-bottom: 0.5rem;
`;

export const ProfileRepos = styled.p`
  color: #334155;
  font-weight: bold;
`;

export const ProfileLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  color: #0ea5e9;
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    color: #0284c7;
  }
`;

export const Label = styled.label`
  display: block;
  margin-top: 2rem;
  font-weight: 600;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;
  border: 1px solid #94a3b8;
  border-radius: 0.75rem;
`;

export const SearchButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  font-weight: 700;
  background: #0ea5e9;
  color: white;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0284c7;
  }
`;
