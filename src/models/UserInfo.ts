import Experience from "./Experience";
import Education from "./Education";
import Skill from "./Skill";

export default class UserInfo {
  fullName: string;
  position: string;
  contactNumber: string;
  email: string;
  cityProvince: string;
  description: string;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  softwareList: string[];

  constructor(fullName: string, position: string, contactNumber: string, email: string, cityProvince: string, description: string, experiences: Experience[] = [], educations: Education[] = [], skills: Skill[], softwareList: string[] = []) {
    this.fullName = fullName;
    this.position = position;
    this.contactNumber = contactNumber;
    this.email = email;
    this.cityProvince = cityProvince;
    this.description = description;
    this.experiences = experiences;
    this.educations = educations;
    this.skills = skills;
    this.softwareList = softwareList;
  }
}
