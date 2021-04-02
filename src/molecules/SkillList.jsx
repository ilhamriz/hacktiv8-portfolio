import React, { Component } from "react";   

export default class SkillList extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { skills } = this.props;

    return (
      <section>
        <h3>{skills.title}</h3>
        {skills.title === "Tools" ? (
          skills.items.map((item, idx) => <p key={idx}>{item}</p>)
        ) : (
            <>
              <section>
                  {skills.items.slice(0, 5).map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </section>
              <section>
                  {skills.items.slice(5, 9).map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </section>
            </>
        )}
      </section>
    );
  }
}
