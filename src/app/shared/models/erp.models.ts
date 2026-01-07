export interface ERPUser {
  id: number;
  name: string;
  role: 'ADMIN' | 'MANAGER' | 'CASHIER';
  storeId: number;
  city: string;
}

export interface Transaction {
  id: string;
  type: 'INCOME' | 'EXPENSE';
  amount: number;
  category: string;
  date: Date;
}
