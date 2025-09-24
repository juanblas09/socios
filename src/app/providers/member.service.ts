import {inject, Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

// Interfaces
import { Member } from "../interfaces/member.interface";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

    private readonly prefix = `/api/member`;

    private http = inject(HttpClient);

    getByMemberId(memberId: number): Observable<Member[]> {
        return this.http.get<Member[]>(`${this.prefix}/member/${memberId}`);
    }

    getByMemberNumber(memberNumber: number): Observable<Member[]> {
        return this.http.get<Member[]>(`${this.prefix}/number/${memberNumber}`);
    }

    getAll(): Observable<Member[]> {
        return this.http.get<Member[]>(`${this.prefix}`);
    }

}

