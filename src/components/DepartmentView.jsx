import CourseCard from "./CourseCard";

function DepartmentView({ deptId, deptName, courses })  {
    console.log("Department:", deptName, "CourseCard:", courses.length);

    return (
        <div>
            <h2>{deptName}{deptId}</h2>

            {
                courses.map((course) => (

                <CourseCard
                key={course.courseId}
                courseId={course.courseId}
                courseName={course.courseName}
                credits={course.credits}
                />

                ))
            }
        </div>
    );
}

export default DepartmentView;