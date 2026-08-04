export interface Customer {
  id?: string;
  customerCode: string;
  name: string;
  mobile: string;
  email: string;
  address: string;
  branchId: string;
  active: boolean;
  createdAt: Date;
}