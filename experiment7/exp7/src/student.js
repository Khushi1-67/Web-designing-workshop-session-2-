import Student from "./coponents/Student";
import courses from "./data /courses.json";

function App() {
    return (
        <div>
            <h1>Student Information</h1>
            <Student name="khushi" rollno="12345" course="CSE" />
            <Student name="rahul" rollno="67890" course="ECE" />
            <Student name="sneha" rollno="54321" course="MECH" />
        </div>
};

export default Student;