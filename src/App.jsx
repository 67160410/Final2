import UniversityView from "./components/UniversityView";

function App() {
  const university = {
    name: "Burapha University",
    departments: [
      {
        deptId: "ITDI",
        deptName: "Information Technology for Digital Industry",
        courses: [
          { courseId: "IT101", courseName: "React Basics", credits: 3 },
          { courseId: "IT102", courseName: "JavaScript", credits: 3 },
        ],
      },
      {
        deptId: "CS",
        deptName: "Computer Science",
        courses: [
          { courseId: "CS201", courseName: "Data Structures", credits: 3 },
          { courseId: "CS202", courseName: "Algorithms", credits: 3 },
        ],
      },
    ],
  };

  return (
    <div>
      <UniversityView university={university}/>
    </div>
  );

}

export default App;