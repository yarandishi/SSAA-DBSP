export interface LoginInput {
  FUserName: string
  FPassword: string
}

export interface DutyInCity {
  FID: number
  FDutyID: number
  FCityID: number
  afDutyName: string
  afCityName: string
}

export interface LoginResponse {
  resultCode: number
  resultMessage: string
  resultOutData: {
    dutyInCity: DutyInCity[]
  }
}

export interface User {
  FID: number
  FFullName: string
  FNationalCode: string
  FMobile: string
  FUserName: string
  FStatus: number
  dutyInCity: DutyInCity[]
}
// Add this interface to your existing types.ts file
export interface NewsItem {
  id: string
  title: string
  date: string
  summary: string
  content: string
}


