import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TrainerPage1 from './trainerpage1';
import TrainerPage3 from './trainerpage3';
import TrainerPage from './trainerpage';

const TrainerDropdown = () => {
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
    if (selectedBatch === '20' && selectedMode === 'mode1' && selectedCategory === 'Aptitude' && selectedSubCategory === 'page1') {
      setShowTable(true);
    } else if (selectedBatch === '20' && selectedMode === 'mode1' && selectedCategory === 'Domain' && selectedSubCategory === 'page2') {
      setShowTable(true);
    } 
    else if (selectedBatch === '20' && selectedMode === 'mode1' && selectedCategory === 'Communication' && selectedSubCategory === 'page') {
      setShowTable(true);
    }
    else {
      setShowTable(false);
    }
  };

  return (
    <div style={{ background: '#c3efec', color: 'black', height: '100vh', overflow: "hidden"}}>
      <div className='mb-3'>
        <h3 className='feedback_h1 text-dark'>Student's Feedback</h3>
      </div>
      <div className="row">
        <div className="col-md-3 mb-2">
          <label className='text-dark' htmlFor="batchInput">Enter the batch:</label>
          <input
            id="batchInput"
            className='text-dark form-control form-control-sm'
            type="text"
            value={selectedBatch}
            onChange={handleBatchChange} style={{width:'80%'}}
          />
        </div>
        <div className="col-md-3 mb-2">
          <label className='text-dark' htmlFor="modeDropdown">Select the Mode:</label>
          <select
            className='mode_dropdown form-control form-control-sm'
            id="modeDropdown"
            value={selectedMode}
            onChange={handleModeChange} style={{width:'80%'}}
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
            onChange={handleCategoryChange} style={{width:'80%'}}
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
            onChange={handleSubCategoryChange} style={{width:'80%'}}
          >
            <option value="" disabled selected hidden>
              Sub SubCategory
            </option>
            <option value="page">SP-FS</option>
            <option value="page1">SP-WD</option>
            <option value="page2">SP-DA</option>
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
            {selectedCategory === 'Aptitude' && selectedSubCategory === 'page1' && <TrainerPage1 selectedBatch={selectedBatch} selectedSubCategory={selectedSubCategory} selectedMode={selectedMode} selectedCategory={selectedCategory} />}
            {selectedCategory === 'Domain' && selectedSubCategory === 'page2' && <TrainerPage3 selectedBatch={selectedBatch} selectedDomain={selectedDomain} selectedMode={selectedMode} />} 
            {selectedCategory === 'Communication' && selectedSubCategory === 'page' && <TrainerPage selectedBatch={selectedBatch} selectedDomain={selectedDomain} selectedMode={selectedMode} />} 
          </div>
        </div>
      }
    </div>
  );
};

export default TrainerDropdown;
