import React, { useState } from "react";
import "./App.css";

const studentsData = [
  "Aarav",
  "Arjun",
  "Diya",
  "Harini",
  "Ishaan",
  "Kavin",
  "Keerthi",
  "Lokesh",
  "Meena",
  "Nandhini",
  "Pranav",
  "Rahul",
  "Sneha",
  "Varun",
  "Yamini",
];

function App() {
  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(today);

  const [attendance, setAttendance] = useState(
    studentsData.map((student) => ({
      name: student,
      status: "Present",
    }))
  );

  const handleStatusChange = (index, status) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[index].status = status;
    setAttendance(updatedAttendance);
  };

  const presentCount = attendance.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = attendance.filter(
    (student) => student.status === "Absent"
  ).length;

  const attendancePercentage = (
    (presentCount / attendance.length) *
    100
  ).toFixed(2);

  return (
    <div className="container">
      <h1>Trainer Session Attendance Dashboard</h1>

      <div className="top-section">
        <div className="date-box">
          <label>Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className="summary">
          <h3>Total Students: {attendance.length}</h3>
          <h3>Present: {presentCount}</h3>
          <h3>Absent: {absentCount}</h3>
          <h3>Attendance: {attendancePercentage}%</h3>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Student Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>

              <td>{student.name}</td>

              <td>
                <button
                  className={
                    student.status === "Present"
                      ? "present active"
                      : "present"
                  }
                  onClick={() => handleStatusChange(index, "Present")}
                >
                  Present
                </button>

                <button
                  className={
                    student.status === "Absent"
                      ? "absent active"
                      : "absent"
                  }
                  onClick={() => handleStatusChange(index, "Absent")}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
