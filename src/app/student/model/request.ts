export class StudentRequest {

  constructor(public id: any, public firstName: string, public lastName: string, public studentDetails:StudentDetailsRequest) {
  }

}

export class StudentDetailsRequest {
  constructor(public id:number,public age:number,public dateOfBirth:string,public contactNumber:string) {
  }
}

