import React from "react";

const Mentors = (props) => {
  return (
    <React.Fragment>
      <div>
        {props.mentors &&
          props.mentors.map((mentor) => {
            return (
              <li key={mentor.subjectId} id={mentor.subjectId}>
                {mentor.username}
              </li>
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default Mentors;
