import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface OTPEntry {
    otp: string;
    classSection: string;
    createdAt: bigint;
    registrationNumber: string;
}
export interface UserProfile {
    classSection?: string;
    name: string;
    registrationNumber?: string;
}
export interface Document {
    id: bigint;
    title: string;
    createdAt: bigint;
    section: string;
    description: string;
    fileUrl: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addDocument(title: string, description: string, fileUrl: string, section: string): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteDocument(documentId: bigint): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getDocumentsBySection(section: string): Promise<Array<Document>>;
    getPendingOTPs(): Promise<Array<OTPEntry>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    requestOTP(registrationNumber: string, classSection: string): Promise<OTPEntry>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    verifyOTP(registrationNumber: string, inputOTP: string): Promise<boolean>;
}
