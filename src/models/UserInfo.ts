interface Experience {
  positionName: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  isPresent: boolean;
  descriptions: string[];
}

export default class UserInfo {
  fullName: string;
  position: string;
  contactNumber: string;
  email: string;
  cityProvince: string;
  description: string;
  experiences: Experience[];

  constructor(fullName: string, position: string, contactNumber: string, email: string, cityProvince: string, description: string, experiences: Experience[] = []) {
    this.fullName = fullName;
    this.position = position;
    this.contactNumber = contactNumber;
    this.email = email;
    this.cityProvince = cityProvince;
    this.description = description;
    this.experiences = experiences;
  }
}
