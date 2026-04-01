function CourseCard({courseId, courseName, credits}) {
    console.log("Course:", courseName, "Credits:", credits);

    return (
        <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>

        <p>Course ID: {courseId}</p>
        <p>Course Name: {courseName}</p>
        <p>Credits: {credits}</p>

        </div>
    );
}

export default CourseCard;