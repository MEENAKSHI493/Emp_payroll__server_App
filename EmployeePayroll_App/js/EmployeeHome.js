window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
  });
  //Template literal ES6 feature
  const createInnerHtml = () => {
    const headerHtml = `
      <tr>
          <th></th>
          <th>Name</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Start Date</th>
          <th>Actions</th>
      </tr>`;
    let empPayrollList = createEmployeePayrollJSON();
    let innerHtml = `${headerHtml}`;
    for (const empPayrollData of empPayrollList) {
      innerHtml = `${innerHtml} 
          <tr>
              <td><img src="${
                empPayrollData._profilePic
              }" alt="" class="profile"></td>
              <td>${empPayrollData._name}</td>
              <td>${empPayrollData._gender}</td>
              <td>${getDeptHtml(empPayrollData._department)}</td>
              <td>${empPayrollData._salary}</td>
              <td>${empPayrollData._startDate}</td>
              <td>
                  <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="${
                    empPayrollData._id
                  }" onclick="remove(this)">
                  <img src="../assets/icons/create-black-18dp.svg" alt="update" id="${
                    empPayrollData.id
                  }" onclick="update(this)">
              </td>
          </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
  };
  
  const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
      {
        _name: "Meenakshi",
        _gender: "female",
        _department: ["Engineer", "Others"],
        _salary: "400000",
        _startDate: "21  August 2020",
        _note: "Hello All.",
        _id: new Date().getTime(),
        _profilePic: "../assets/profile-images/Ellipse -4.png",
      },
      {
        _name: "sejal",
        _gender: "Female",
        _department: ["Finance"],
        _salary: "400000",
        _startDate: "12 November 2019",
        _note: "Have a nice day.",
        _id: new Date().getTime(),
        _profilePic: "../assets/profile-images/Ellipse -10.png",
      },
    ];
    return empPayrollListLocal;
  };
  
  const getDeptHtml = (deptList) => {
    let depthtml = "";
    for (const dept of deptList) {
      depthtml = `${depthtml} <div class="dept-label">${dept}</div>`;
    }
    return depthtml;
  };