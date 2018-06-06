export class StaffType {
  public Description: string;
  public Code: string;
  public Role: string;
  public Active: string;
  public Last_Modified_By: string;
  public Last_Modified_Date_Time: string;

  constructor(description: string, code: string, role: string, active: string, lastModifiedBy: string, lastModifiedDateTime: string) {
    this.Description = description;
    this.Code = code;
    this.Role = role;
    this.Active = active;
    this.Last_Modified_By = lastModifiedBy;
    this.Last_Modified_Date_Time = lastModifiedDateTime;
  }
}
