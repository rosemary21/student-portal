import { useState } from "react";
 
const listOfStudent= ({students,deleteStudent, editStudent})=>{
    const [editingId, setEditingId]=useState(null);
    const [editingData,setEditingData]=useState({name: '',email:''});

    const handleEditClick=(student)=>{
        setEditingId(student.id);
        setEditingData({name:student.name,email:student.email});
    }

    const handleSave=()=>{
        editStudent({id:editStudent,...editingData})
        setEditingId(null);
        setEditingData({name:'',email:''});
    };



  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Student List</h2>
      {students.length === 0 ? (
        <p>No students  Found</p>
      ) : (
        <ul className="space-y-2">
          {students.map((student) => (
            <li key={student.id} className="border p-2 flex justify-between items-center">
              {editingId === student.id ? (
                <div className="flex gap-2">
                  <input
                    value={editedData.name}
                    onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                    className="border px-2"
                  />
                  <input
                    value={editedData.email}
                    onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
                    className="border px-2"
                  />
                </div>
              ) : (
                <div>
                  <p><strong>{student.name}</strong> - {student.email}</p>
                </div>
              )}
              <div className="space-x-2">
                {editingId === student.id ? (
                  <button onClick={handleSave} className="text-green-600">Save</button>
                ) : (
                  <button onClick={() => handleEditClick(student)} className="text-yellow-600">Edit</button>
                )}
                <button onClick={() => deleteStudent(student.id)} className="text-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};



export default listOfStudent;





