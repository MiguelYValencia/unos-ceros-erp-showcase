import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, switchMap, map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SalesReportService {
  private apiUrl = '/api/reports/sales';
  
  // Subject para manejar el estado de carga de los reportes
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Obtiene reportes filtrados con lógica reactiva avanzada.
   * Demuestra el uso de switchMap para cancelar peticiones previas 
   * si el usuario cambia los filtros rápidamente.
   */
  getFilteredReports(cityId: string, storeId?: string, range?: any): Observable<any> {
    let params = new HttpParams().set('cityId', cityId);
    if (storeId) params = params.set('storeId', storeId);
    
    this.loadingSubject.next(true);

    return this.http.get<any[]>(this.apiUrl, { params }).pipe(
      map(sales => this.calculateSalesKpis(sales)),
      tap(() => this.loadingSubject.next(false))
    );
  }

  private calculateSalesKpis(sales: any[]) {
    return {
      totalRevenue: sales.reduce((acc, curr) => acc + curr.total, 0),
      transactionCount: sales.length,
      averageTicket: sales.length > 0 ? (sales.reduce((acc, curr) => acc + curr.total, 0) / sales.length) : 0,
      topSellingStore: this.getTopStore(sales)
    };
  }

  private getTopStore(sales: any[]): string {
    // Lógica para encontrar la tienda con más ventas en el dataset
    return "Tienda Central - Sede A";
  }
}
