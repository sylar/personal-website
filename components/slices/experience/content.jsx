import React, { PureComponent } from "react";
import uniqBy from "lodash.uniqby";
import Entry from "./entry";

class Content extends PureComponent {
  displayName = "SliceContent";

  constructor(props) {
    super(props);

    const { tasks, techStack } = this.getTasksAndStack({
      tasks: props.tasks
    });

    this.state = { tasks, techStack };
  }

  getTasksAndStack({ tasks }) {
    return tasks.reduce(
      ({ tasks, techStack }, { description, stack }) => ({
        tasks: tasks.concat(description),
        techStack: uniqBy(techStack.concat(stack), details => details)
      }),
      { tasks: [], techStack: [] }
    );
  }

  render() {
    const { type, title, company, startDate, endDate, currentJob } = this.props;

    return (
      <Entry
        type={type}
        title={title}
        company={company}
        startDate={startDate}
        endDate={endDate}
        currentJob={currentJob}
        techStack={this.state.techStack}
        tasks={this.state.tasks}
      />
    );
  }
}

export default Content;
