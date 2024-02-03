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
        <TimelineSeparator>
          <TimelineDot
            className="experience__dot"
            style={{ backgroundColor: "var(--black-color)" }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="experience__title">
            {Date} | {Place}
          </div>
          <div className="experience__subtitle">
            {Status} - {Role}
          </div>
          <p className="experience__description">{Description}</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

// Education
export const EducationTimeline = ({ School, Date, Major, Description }) => {
  return (
    <>
      <div className="experience__education-left"></div>
      <Timeline
        sx={{
          [`& .${timelineContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            <div className="experience__title">{School} | {Date}</div>
            <div className="experience__subtitle">{Major}</div>
            <p className="experience__description">{Description}</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              className="experience__dot"
              style={{ backgroundColor: "var(--black-color)" }}
            />
            <TimelineConnector />
          </TimelineSeparator>
        </TimelineItem>
      </Timeline>
    </>
  );
};
