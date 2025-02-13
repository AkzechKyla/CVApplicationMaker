import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

export default class UserInfo {
  fullName: string;
  position: string;
  contactNumber: string;
  email: string;
  cityProvince: string;
  description: string;
  experiences: Experience[];
  educations: Education[];
  skills: Skills[];

  constructor(fullName: string, position: string, contactNumber: string, email: string, cityProvince: string, description: string, experiences: Experience[] = [], educations: Education[] = [], skills: Skills[]) {
    this.fullName = fullName;
    this.position = position;
    this.contactNumber = contactNumber;
    this.email = email;
    this.cityProvince = cityProvince;
    this.description = description;
    this.experiences = experiences;
    this.educations = educations;
    this.skills = skills;
  }
}
