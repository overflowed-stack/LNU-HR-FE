export interface IPersonBase {
    id: string;
    photo: string;
    lastName: string;
    firstName: string;
    surname: string;
    gender: Gender;
    birthday: Date;
    phone: string;
}

export interface IPerson extends IPersonBase {
    degree: INameAndId;
    experience: number;
    email: string;
    subjects: INameAndId[];
    interests: string[];
    bio: string;
    publications: string[];
}

export interface IPage {
    personnel: IPersonBase[];
    pagesAmount: number;
}

export interface IFilterParams {
    name: string;
    experience: number;
    degreeId: string;
    subjectId: string;
    sortBy: SortParameter;
}

export interface IAuthData {
    login: string;
    password: string;
}

export interface IUser {
    login: string;
    name: string;
    photo: string;
    role: UserRole;
}

export interface INameAndId {
    id: string;
    name: string;
}

export enum Gender {
    Male,
    Female,
}

export enum SortParameter {
    Name,
    Experience,
    Degree,
    Subject,
}

export enum UserRole {
    Guest,
    Personnel,
    Admin,
}
