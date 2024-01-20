import React, { useState } from 'react';
import FormComponent from './components/FormComponent/FormComponent';
import TableComponent from './components/TableCoomponent/TableComponent';
import EditModalComponent from './components/EditComponent/EditComponent';

const App = () => {
  // form data and table rows
  const [formData, setFormData] = useState([]);
  // modal visibility and selected row data
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  //handle submission
  const handleFormSubmit = (data) => {
    // Add new data to the existing array
    setFormData([...formData, data]);
  };

  // Function to handle edit button click
  const handleEdit = (index) => {
    setModalOpen(true);
    setSelectedRowData(formData[index]);
  };

  // handle delete button 
  const handleDelete = (index) => {
    // Create a copy of data
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    // Update form 
    setFormData(updatedFormData);
  };

  // modal save
  const handleModalSave = (updatedData) => {
    // Find index 
    const index = formData.indexOf(selectedRowData);
    //  copy of the form updated data
    const updatedFormData = [...formData];
    updatedFormData[index] = updatedData;
    // Update form 
    setFormData(updatedFormData);
    // Close the modal
    setModalOpen(false);
    // Clear selected row data
    setSelectedRowData(null);
  };

  //  modal close
  const handleModalClose = () => {
    // Close the modal
    setModalOpen(false);
    // Clear the selected row data
    setSelectedRowData(null);
  };

  return (
    <div>
      <FormComponent onSubmit={handleFormSubmit} />
      <br />

      <TableComponent data={formData} onEdit={handleEdit} onDelete={handleDelete} />

      {isModalOpen && (
        <EditModalComponent rowData={selectedRowData} onSave={handleModalSave} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default App;

