import React from 'react';

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBasic extends CoursePartWithDescription {
  kind: "basic";
}

interface CoursePartBackground extends CoursePartWithDescription {
  backgroundMaterial: string;
  kind: "background";
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

interface CoursePartWithDescription extends CoursePartBase {
  description: string;
}

interface PartProps {
  coursePart: CoursePart;
}

const Part: React.FC<PartProps> = ({ coursePart }) => {
  switch (coursePart.kind) {
    case "basic":
      return (
        <div>
          <p>Name: {coursePart.name}</p>
          <p>Exercise Count: {coursePart.exerciseCount}</p>
          <p>Description: {coursePart.description}</p>
        </div>
      );
    case "group":
      return (
        <div>
          <p>Name: {coursePart.name}</p>
          <p>Exercise Count: {coursePart.exerciseCount}</p>
          <p>Group Project Count: {coursePart.groupProjectCount}</p>
        </div>
      );
    case "background":
      return (
        <div>
          <p>Name: {coursePart.name}</p>
          <p>Exercise Count: {coursePart.exerciseCount}</p>
          <p>Description: {coursePart.description}</p>
          <p>Background Material: {coursePart.backgroundMaterial}</p>
        </div>
      );
      
    default:
      return null;
  }
};

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground;
const Header: React.FC<{ name: string }> = ({ name }) => <h1>{name}</h1>;

interface ContentProps {
  courseParts: CoursePart[];
}

const Content: React.FC<ContentProps> = ({ courseParts }) => (
  <div>
    {courseParts.map((part, index) => (
      <div key={index}>
        <Part coursePart={part} />
      </div>
    ))}
  </div>
);


const Total: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => (
  <p>
    Number of exercises {courseParts.reduce((sum, part) => sum + part.exerciseCount, 0)}
  </p>
);

const App: React.FC = () => {
  const courseName = 'Half Stack application development';
  
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
  ];

  return (
    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};

export default App;
