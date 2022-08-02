
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Relation {
    PRINCIPLE = "PRINCIPLE",
    CHILD = "CHILD",
    SPOUSE = "SPOUSE",
    PARENT = "PARENT"
}

export enum Gender {
    FEMALE = "FEMALE",
    MALE = "MALE"
}

export enum MaritalStatus {
    SINGLE = "SINGLE",
    MARRIED = "MARRIED",
    WIDOWED = "WIDOWED",
    DIVORCED = "DIVORCED"
}

export enum PaymentMethod {
    CASH = "CASH",
    CHEQUE = "CHEQUE",
    BANK_TRANSFER = "BANK_TRANSFER",
    BANK_DEPOSIT = "BANK_DEPOSIT",
    CREDIT_CARD = "CREDIT_CARD"
}

export enum Currency {
    USD = "USD",
    GBP = "GBP",
    EGP = "EGP"
}

export enum PaymentPlan {
    ANNUAL = "ANNUAL",
    SEMI_ANNUAL = "SEMI_ANNUAL",
    QUARTERLY = "QUARTERLY",
    MONTHLY = "MONTHLY"
}

export enum Source {
    SALES_PERSON = "SALES_PERSON",
    MARKETING_LEAD = "MARKETING_LEAD",
    EXTERNAL_BROKER = "EXTERNAL_BROKER"
}

export enum PolicyType {
    INDIVIDUAL = "INDIVIDUAL",
    CORPORATE = "CORPORATE"
}

export enum IssuingType {
    NEW_BUSINESS = "NEW_BUSINESS",
    RENEWAL = "RENEWAL"
}

export enum InsurancePlanType {
    READYMADE = "READYMADE",
    TAILORED = "TAILORED"
}

export class BeyondManager {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    invitation_status: string;
    company_id: number;
    invited_by_id: number;
    invitation_date?: Nullable<DateTime>;
    activation_date?: Nullable<DateTime>;
    deactivation_date?: Nullable<DateTime>;
    deactivated_by?: Nullable<number>;
    deleted_date?: Nullable<DateTime>;
    deleted_by_id?: Nullable<number>;
    password: string;
    temporary_password: string;
    created_at: DateTime;
    updated_at?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract beyondManagerLogin(email?: Nullable<string>, password?: Nullable<string>): BeyondManager | Promise<BeyondManager>;

    abstract beyondManagers(limit?: Nullable<number>, offset?: Nullable<number>): BeyondManager[] | Promise<BeyondManager[]>;

    abstract beyondManager(id: number): Nullable<BeyondManager> | Promise<Nullable<BeyondManager>>;

    abstract beyondManagerChangePassword(old_password?: Nullable<string>, new_password?: Nullable<string>, confirm_password?: Nullable<string>, isFirstReset?: Nullable<boolean>): Nullable<Void> | Promise<Nullable<Void>>;

    abstract beyondManagerRequestForgetPassword(email?: Nullable<string>): Nullable<Void> | Promise<Nullable<Void>>;

    abstract beyondManagerVerifyForgetPassword(email?: Nullable<string>, temporary_password?: Nullable<string>, new_password?: Nullable<string>, confirm_password?: Nullable<string>): Nullable<Void> | Promise<Nullable<Void>>;

    abstract getCompanies(): Nullable<Company>[] | Promise<Nullable<Company>[]>;

    abstract getIndustry(): Nullable<Industry>[] | Promise<Nullable<Industry>[]>;

    abstract getInsuranceCompany(): Nullable<InsuranceCompany>[] | Promise<Nullable<InsuranceCompany>[]>;

    abstract getIssuedPlan(): Nullable<IssuedPlan>[] | Promise<Nullable<IssuedPlan>[]>;

    abstract getLineOfBusiness(): Nullable<Company>[] | Promise<Nullable<Company>[]>;

    abstract getMembers(): Nullable<Member>[] | Promise<Nullable<Member>[]>;

    abstract getPayment(): Nullable<Payment>[] | Promise<Nullable<Payment>[]>;

    abstract getPolicyPlan(): Nullable<PolicyPlan>[] | Promise<Nullable<PolicyPlan>[]>;

    abstract getPolicyUtilization(): Nullable<PolicyUtilization>[] | Promise<Nullable<PolicyUtilization>[]>;

    abstract getPolicies(): Nullable<Policy>[] | Promise<Nullable<Policy>[]>;

    abstract getTPA(): Nullable<TPA>[] | Promise<Nullable<TPA>[]>;
}

export class Company {
    id: number;
    name?: Nullable<string>;
    logoURL?: Nullable<string>;
    taxCardURL?: Nullable<string>;
    commercialRegistrationURL?: Nullable<string>;
    industryId: number;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class Industry {
    id: number;
    name: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class InsuranceCompany {
    id: number;
    name: string;
    taxCardURL?: Nullable<string>;
    commercialRegistrationURL?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class IssuedPlan {
    id: number;
    memberId: number;
    staffId?: Nullable<number>;
    subCompany?: Nullable<string>;
    relation: Relation;
    principleInsuranceId?: Nullable<number>;
    nameOnInsuranceCard?: Nullable<string>;
    insurance_id: number;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    policyId: number;
    policyPlanId: number;
    category: string[];
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class LineOfBusiness {
    id: number;
    name: string;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class Member {
    id: number;
    firstName: string;
    lastName: string;
    fullName?: Nullable<string>;
    dob: DateTime;
    mobileNumber?: Nullable<string>;
    gender: Gender;
    martialStatus?: Nullable<MaritalStatus>;
    profilePictureURL?: Nullable<string>;
    address?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class Payment {
    id: number;
    policyId: number;
    amount: number;
    currency: Currency;
    dueDate: DateTime;
    isInvioced?: Nullable<boolean>;
    isPaid: boolean;
    invoicedFileURL: string;
    paymentMethod?: Nullable<PaymentMethod>;
    paymentDate?: Nullable<DateTime>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class PolicyPlan {
    id: number;
    name: string;
    ceiling: string;
    policyId: number;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class PolicyUtilization {
    id: number;
    insuranceId: number;
    diagnosisCode?: Nullable<string>;
    diagnosis?: Nullable<string>;
    service?: Nullable<string>;
    providerName?: Nullable<string>;
    providerType?: Nullable<string>;
    byReimbursement?: Nullable<boolean>;
    amount: number;
    isRejected?: Nullable<boolean>;
    isValidated?: Nullable<boolean>;
    isChronic?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class Policy {
    id: number;
    insuranceCompanyId: number;
    type: PolicyType;
    issuingType: IssuingType;
    lineOfBusinessId: number;
    tpaId?: Nullable<number>;
    endCustomerId: number;
    policyNumber?: Nullable<number>;
    source: Source;
    paymentPlan: PaymentPlan;
    startDate: DateTime;
    endDate: DateTime;
    insurancePlanType: InsurancePlanType;
    policyFileURL?: Nullable<string>;
    tobFileURL?: Nullable<string>;
    policyTotalValue?: Nullable<number>;
    accountManagerId: number;
    transactionLastUpdatedDate?: Nullable<DateTime>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class TPA {
    id: number;
    name: string;
    logoURL?: Nullable<string>;
    taxCardURL?: Nullable<string>;
    commercialRegistrationURL?: Nullable<string>;
    categories?: Nullable<Nullable<string>[]>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export type DateTime = any;
export type Void = any;
type Nullable<T> = T | null;
