import Student from './student';

function App() {
  return (
    <div>
      <h1>Student Information</h1>

      <Student
        name="Prachi"
        course="Computer Science"
        marks={85}
      />

      <Student
        name="Sakshi"
        course="Information Technology"
        marks={92}
      />

      <Student
        name="Priya"
        course="Electronics"
        marks={78}
      />
    </div>
  );
}

export default App;