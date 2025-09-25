import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

// Interfaces
import { Category } from "../interfaces/category.interface";

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    private readonly prefix = `/api/category`;
    private http = inject(HttpClient);

    getAll(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.prefix}`)
    }
}