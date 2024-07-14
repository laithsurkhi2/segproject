import React, { useState } from 'react';

const FamilyRecords = () => {
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({
    name: '',
    dateOfBirth: '',
    healthInfo: ''
  });

  const handleInputChange = (e) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const handleAddRecord = () => {
    setRecords([...records, newRecord]);
    setNewRecord({ name: '', dateOfBirth: '', healthInfo: '' });
  };

  return (
    <div className="bg-orange-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Family Health Records</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={newRecord.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dateOfBirth"
              type="date"
              name="dateOfBirth"
              value={newRecord.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="healthInfo">
              Health Information
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="healthInfo"
              name="healthInfo"
              value={newRecord.healthInfo}
              onChange={handleInputChange}
              placeholder="Health Information"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handleAddRecord}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Record
          </button>
        </form>
        <div>
          <h3 className="text-xl font-bold mb-4">Family Members</h3>
          <ul>
            {records.map((record, index) => (
              <li key={index} className="mb-4">
                <p className="text-gray-700"><span className="font-bold">Name:</span> {record.name}</p>
                <p className="text-gray-700"><span className="font-bold">Date of Birth:</span> {record.dateOfBirth}</p>
                <p className="text-gray-700"><span className="font-bold">Health Information:</span> {record.healthInfo}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FamilyRecords;
