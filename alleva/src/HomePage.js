import React, { useEffect, useState} from 'react';
import './HomePage.css';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt';
import imageSrc from './BodyReference.jpeg';
import allevamedicallogo from './allevamedicallogo.png';

function TableComponent() {
  useEffect(() => {
    $(document).ready(function() {
      $('#myTable').DataTable();
    });
  }, []);

  const [tableData, setTableData] = useState([
    { id: 1, name: 'Thigh Below Crotch Reference', userInput1: '', userInput2: ''},
    { id: 2, name: 'Mid Thigh Circumference', userInput1: '', userInput2: ''},
    { id: 3, name: 'Kneecap Circumference', userInput1: '', userInputer2: ''},
    { id: 4, name: 'Mid Calf Circumference', userInput1: '', userInputer2: ''},
    { id: 5, name: 'Ankle Circumference', userInput1: '', userInputer2: ''},
    { id: 6, name: 'Arch (instep)', userInput1: '', userInputer2: ''},
    { id: 7, name: 'Length of Foot', userInput1: '', userInputer2: ''},
    { id: 8, name: 'Length of Leg from Heel to Crotch', userInput1: '', userInputer2: ''},
    { id: 9, name: 'Length from Center of Kneecap to Heel', userInput1: '', userInputer2: ''},
  ]);

  const handleInputChange = (e, index, field) => {
    const updatedData = [...tableData];
    updatedData[index][field] = e.target.value;
    setTableData(updatedData);
  };



  return (
    <div>
      <header className = "login-header" style={{ backgroundColor: 'lightblue' }}>
          <img src={allevamedicallogo} alt="Logo" className="logo-image" />
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '10px', backgroundColor: 'light grey'}}>
        <div id="tableContainer" style={{ marginTop: '200px', marginRight: '70px', paddingRight: '50px'}}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Body Number</th>
                <th>Body Part</th>
                <th>Left Measurement</th>
                <th>Right Measurement</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>
                    <input
                      type="text"
                      value={row.userInput1}
                      onChange={(e) => handleInputChange(e, index, 'userInput1')}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.userInput2}
                      onChange={(e) => handleInputChange(e, index, 'userInput2')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        <div style={{ marginBottom: '250px' }}>
          <img src={imageSrc} alt="bodypic" style={{ width: '130%', height: 'auto', paddingTop: '40px', marginRight: '75px'}} />
        </div>
      </div>
    </div>
  );
}

export default TableComponent;

