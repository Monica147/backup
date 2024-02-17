import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Page1 from './page1';
import Page3 from './page3';
import Page2 from './page2';

const Dropdown = () => {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDomain, setSelectedDomain] = useState(''); 
  const [showTable, setShowTable] = useState(false);

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const handleModeChange = (event) => {
    setSelectedMode(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleShowTable = () => {
    if (selectedBatch === '20' && selectedMode === 'mode1' && selectedCategory === 'Aptitude' && selectedSubCategory === 'page2') {
      setShowTable(true);
    } else if (selectedBatch === '20' && selectedMode === 'mode1' && selectedCategory === 'Domain' && selectedSubCategory === 'page3') {
      setShowTable(true);
    } 
    else if (selectedBatch === '20' && selectedMode === 'mode1' && selectedCategory === 'Communication' && selectedSubCategory === 'page1') {
      setShowTable(true);
    }
    else {
      setShowTable(false);
    }
  };

  return (
    <div style={{ background: '#c3efec', color: 'black', height: '100vh', overflow: 'hidden' }}>
      <div className='mb-5'>
        <h1 className='feedback_h1 text-dark'>Student's Feedback</h1>
      </div>
      <div className="row">
        <div className="col-md-3 mb-2">
          <label className='text-dark' htmlFor="batchInput">Enter the batch:</label>
          <input
            id="batchInput"
            className='text-dark form-control form-control-sm'
            type="text"
            value={selectedBatch}
            onChange={handleBatchChange}
          />
        </div>
        <div className="col-md-3 mb-2">
          <label className='text-dark' htmlFor="modeDropdown">Select the Mode:</label>
          <select
            className='mode_dropdown form-control form-control-sm'
            id="modeDropdown"
            value={selectedMode}
            onChange={handleModeChange}
          >
            <option value="" disabled selected hidden>
              Mode
            </option>
            <option value="mode1">CareerEd</option>
            <option value="mode2">AltEd</option>
            <option value="mode3">Weekend</option>
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <label className='text-dark' htmlFor="categoryDropdown">Select the Category:</label>
          <select
            className='category_dropdown form-control form-control-sm'
            id="categoryDropdown"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="" disabled selected hidden>
              Category
            </option>
            <option value="Domain">Domain</option>
            <option value="Communication">Communication</option>
            <option value="Aptitude">Aptitude</option>
            <option value="Counselling">Counselling</option>
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <label className='text-dark' htmlFor="domainDropdown">Select the SubCategory:</label>
          <select
            className='subdomain_page1 form-control form-control-sm'
            id="subCategoryDropdown"
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
          >
            <option value="" disabled selected hidden>
              Sub SubCategory
            </option>
            <option value="page1">SP-FS</option>
            <option value="page2">SP-WD</option>
            <option value="page3">SP-DA</option>
            <option value="page4">SP-DS</option>
            <option value="page5">SP-ST</option>
            <option value="page6">IMS-DevOps</option>
            <option value="page7">IMS-Cyber Security</option>
            <option value="page8">SAP-ABAP, HANA</option>
            <option value="page9">FICCO</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary btn-sm" onClick={handleShowTable}>Show Table</button>
        </div>
      </div>
      {showTable &&
        <div className="row">
          <div className="col-12" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            {selectedCategory === 'Aptitude' && selectedSubCategory === 'page1' && <Page1 selectedBatch={selectedBatch} selectedSubCategory={selectedSubCategory} selectedMode={selectedMode} selectedCategory={selectedCategory} />}
            {selectedCategory === 'Domain' && selectedSubCategory === 'page2' && <Page3 selectedBatch={selectedBatch} selectedDomain={selectedDomain} selectedMode={selectedMode} />} 
            {selectedCategory === 'Communication' && selectedSubCategory === 'page' && <Page2 selectedBatch={selectedBatch} selectedDomain={selectedDomain} selectedMode={selectedMode} />} 
          </div>
        </div>
      }
    </div>
  );
};

export default Dropdown;
