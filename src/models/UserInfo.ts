import Experience from "./Experience";
import Education from "./Education";

export default class UserInfo {
  fullName: string;
  position: string;
  contactNumber: string;
  email: string;
  cityProvince: string;
  description: string;
  experiences: Experience[];
  educations: Education[];

  constructor(fullName: string, position: string, contactNumber: string, email: string, cityProvince: string, description: string, experiences: Experience[] = [], educations: Education[] = []) {
    this.fullName = fullName;
    this.position = position;
    this.contactNumber = contactNumber;
    this.email = email;
    this.cityProvince = cityProvince;
    this.description = description;
    this.experiences = experiences;
    this.educations = educations;
  }
}
