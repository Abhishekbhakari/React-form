// Main application component
import React, { useState } from 'react';
import FormComponent from './components/FormComponent/FormComponent';
import TableComponent from './components/TableCoomponent/TableComponent';
import EditModalComponent from './components/EditComponent/EditComponent';

const App = () => {
  // State for managing form data and table rows
  const [formData, setFormData] = useState([]);
  // State for managing modal visibility and selected row data
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  // Function to handle form submission
  const handleFormSubmit = (data) => {
    // Add new form data to the existing array
    setFormData([...formData, data]);
  };

  // Function to handle edit button click
  const handleEdit = (index) => {
    // Open modal and set selected row data for editing
    setModalOpen(true);
    setSelectedRowData(formData[index]);
  };

  // Function to handle delete button click
  const handleDelete = (index) => {
    // Create a copy of the form data array without the selected row
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    // Update the form data state
    setFormData(updatedFormData);
  };

  // Function to handle modal save
  const handleModalSave = (updatedData) => {
    // Find the index of the selected row in the form data array
    const index = formData.indexOf(selectedRowData);
    // Create a copy of the form data array with updated row data
    const updatedFormData = [...formData];
    updatedFormData[index] = updatedData;
    // Update the form data state
    setFormData(updatedFormData);
    // Close the modal
    setModalOpen(false);
    // Clear the selected row data
    setSelectedRowData(null);
  };

  // Function to handle modal close
  const handleModalClose = () => {
    // Close the modal
    setModalOpen(false);
    // Clear the selected row data
    setSelectedRowData(null);
  };

  return (
    <div>
      {/* Form component */}
      <FormComponent onSubmit={handleFormSubmit} />
      <br />

      {/* Table component */}
      <TableComponent data={formData} onEdit={handleEdit} onDelete={handleDelete} />

      {/* Edit modal component */}
      {isModalOpen && (
        <EditModalComponent rowData={selectedRowData} onSave={handleModalSave} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default App;

