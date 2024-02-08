import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineContent, {
  timelineContentClasses,
} from "@mui/lab/TimelineContent";

// Work
export const WorkTimeline = ({ Date, Place, Status, Role, Description }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        {/* List */}
        <TimelineSeparator>
          <TimelineDot className="experiences__dot" style={{ backgroundColor: "var(--black-color)" }} />
          <TimelineConnector />
        </TimelineSeparator>

        {/* Content */}
        <TimelineContent>
          <div className="experiences__title">{Date} | {Place}</div>
          <div className="experiences__subtitle">{Status} - {Role}</div>
          <p className="experiences__description">{Description}</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

// Education
export const EducationTimeline = ({ School, Date, Major, Description }) => {
  return (
    <>
      <div className="experiences__education-left"></div>
      <Timeline
        sx={{
          [`& .${timelineContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineItem>
          {/* Content */}
          <TimelineOppositeContent color="textSecondary">
            <div className="experiences__title">{School} | {Date}</div>
            <div className="experiences__subtitle">{Major}</div>
            <p className="experiences__description">{Description}</p>
          </TimelineOppositeContent>

          {/* List */}
          <TimelineSeparator>
            <TimelineDot className="experiences__dot" style={{ backgroundColor: "var(--black-color)" }} />
            <TimelineConnector />
          </TimelineSeparator>
        </TimelineItem>
      </Timeline>
    </>
  );
};
