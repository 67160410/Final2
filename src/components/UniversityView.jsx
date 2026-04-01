import DepartmentView from "./DepartmentView";

function UniversityView({ university }) {
    console.log("University:", university.name);

    return (
        <div>
            <h1>{university.name}</h1>

            {
                university.departments.map((dept) => (
                    <DepartmentView
                    key={dept.deptId}
                    deptId={dept.deptId}
                    deptName={dept.deptName}
                    courses={dept.courses}
                    />
                ))
            }
        </div>
    );
}

export default UniversityView;