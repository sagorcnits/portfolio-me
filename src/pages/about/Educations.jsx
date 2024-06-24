import { IoSchoolSharp } from "react-icons/io5";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionIntro from "../../components/SectionIntro";
const Educations = () => {
  return (
    <div>
      <SectionIntro
        titles={{
          title: "Education",
          header: `My educational`,
          span: `status`,
        }}
      ></SectionIntro>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0E161E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#0E161E", color: "#fff" }}
          icon={<IoSchoolSharp className="text-sonali" />}
        >
          <h3 className="russo-one gr-sonali">Bachelor Degree</h3>
          <h4 className="font-outfit text-green-500">2020 - Present</h4>
          <p>National University in Pabna</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0E161E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#0E161E", color: "#fff" }}
          icon={<IoSchoolSharp className="text-sonali" />}
        >
          <h3 className="russo-one gr-sonali">Higher Secondary Certificate</h3>
          <h4 className="font-outfit text-green-500">2018 - 2020</h4>
          <p>Pabna Govt. College, Pabna</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0E161E", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#0E161E", color: "#fff" }}
          icon={<IoSchoolSharp className="text-sonali" />}
        >
          <h3 className="russo-one gr-sonali">Secondary School Certificate</h3>
          <h4 className="font-outfit text-green-500">2008 - 2018</h4>
          <p>Komorpur High School</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Educations;
