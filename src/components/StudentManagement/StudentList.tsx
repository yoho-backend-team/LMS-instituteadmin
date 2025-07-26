import type React from "react"
import StudentCard from "../StudentManagement/StudentCard"
import type { Note } from "../StudentManagement/Student"

interface StudentListProps {
  students: Note[]
  onEdit: (student: Note) => void
  onDelete: (id: number) => void
}

const StudentList: React.FC<StudentListProps> = ({ students, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-4">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default StudentList
