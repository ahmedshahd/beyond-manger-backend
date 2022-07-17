
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
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
}

export type DateTime = any;
export type Void = any;
type Nullable<T> = T | null;
