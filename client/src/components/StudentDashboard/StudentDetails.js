// let studentDetails = {
//   name: "Shagun Mishra",
//   age: 14,
//   location: "In the middle of nowhere",
// };

const StudentDetails = ({ student }) => {
  return (
    <div className="card" style={{ height: "100%", alignItems: "center", padding: "25px"}}>
      <div class="card-body">
        <h5 class="card-title">
          <strong>Name:</strong> {student.name}
        </h5>
        <p class="card-text">
          <strong>Location:</strong> {student.region}
        </p>
      </div>
    </div>
  );
};

export default StudentDetails;
