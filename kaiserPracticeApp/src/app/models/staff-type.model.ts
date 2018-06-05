export class StaffType {
  public Code: string;
  public Description: string;
  public Role: string;
  public Active: string;
  public Last_Modified_By: string;
  public Last_Modified_Date_Time: string;

  constructor(code: string, description: string, role: string, active: string, lastModifiedBy: string, lastModifiedDateTime: string) {
    this.Code = code;
    this.Description = description;
    this.Role = role;
    this.Active = active;
    this.Last_Modified_By = lastModifiedBy;
    this.Last_Modified_Date_Time = lastModifiedDateTime;
  }
}
