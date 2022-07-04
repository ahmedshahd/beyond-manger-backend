
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class BeyondManager {
    id: string;
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
    created_at: string;
    updated_at?: Nullable<string>;
}

export abstract class IQuery {
    abstract GetBeyondManagers(): BeyondManager[] | Promise<BeyondManager[]>;

    abstract GetBeyondManager(id: string): Nullable<BeyondManager> | Promise<Nullable<BeyondManager>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
