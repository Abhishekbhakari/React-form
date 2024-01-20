import React from 'react';
import styled from 'styled-components';

 const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  padding: 20px;
  background-color:#fadadd;
`;

 const StyledThTd = styled.th`
  border: 1px solid #fff;
  padding: 8px;
  text-align: left;
`;

 const StyledTh = styled(StyledThTd)`
  background-color: #4caf50;
  color: #fff;
`;

 const StyledTr = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

 const StyledButtonEdit = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

 const StyledButtonDelete = styled.button`
  background-color: #f44336;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


const TableComponent = ({ data, onEdit, onDelete }) => {
  return (
    <StyledTable>
      {/* Table header */}
      <thead>
        <StyledTr>
          <StyledThTd>S.No</StyledThTd>
          <StyledThTd>Name</StyledThTd>
          <StyledThTd>Contact</StyledThTd>
          <StyledThTd>Email</StyledThTd>
          <StyledThTd>Weekday</StyledThTd>
          <StyledThTd>Gender</StyledThTd>
          <StyledThTd>DOB</StyledThTd>
          <StyledThTd>Action</StyledThTd>
        </StyledTr>
      </thead>
      {/* Table body */}
      <tbody>
        {data.map((row, index) => (
          <StyledTr key={index}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.contact}</td>
            <td>{row.email}</td>
            <td>{row.weekday ? 'Yes' : 'No'}</td>
            <td>{row.gender}</td>
            <td>{row.dob}</td>
            <td>
              {/* Edit and Delete buttons */}
              <StyledButtonEdit onClick={() => onEdit(index)}>Edit</StyledButtonEdit>
              <StyledButtonDelete onClick={() => onDelete(index)}>Delete</StyledButtonDelete>
            </td>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default TableComponent;
