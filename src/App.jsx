import { useState, useEffect } from 'react';
import StudentForm from './components/Signup';
import StudentList from './components/List';


function App() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const editStudent = (updatedStudent) => {
    setStudents(
      students.map(student =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Student Portal</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
    </div>
  );
}

export default App;