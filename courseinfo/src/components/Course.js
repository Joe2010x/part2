import React from "react"


const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  );
};

const Total = (props) => {
  const total = props.parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <div>
      <strong>{"Total of " + total + " exercises"}</strong>
    </div>
  );
};

const Part = (props) => {
  //console.log("this is props.name: ",props)
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((e) => (
        <Part key={e.id} part={e} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  //console.log(course)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;