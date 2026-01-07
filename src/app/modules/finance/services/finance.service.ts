import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FinanceService {
  constructor(private http: HttpClient) {}

  // Obtención de ingresos y egresos por Ciudad/Tienda
  getStoreBalance(storeId: number): Observable<any> {
    return this.http.get<any[]>(`/api/finance/balance/${storeId}`).pipe(
      map(data => {
        // Cálculo de balance en tiempo real usando RxJS
        const totalIncome = data.filter(t => t.type === 'INCOME').reduce((acc, curr) => acc + curr.amount, 0);
        const totalExpense = data.filter(t => t.type === 'EXPENSE').reduce((acc, curr) => acc + curr.amount, 0);
        return { totalIncome, totalExpense, netBalance: totalIncome - totalExpense };
      })
    );
  }
}
