import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { IdeaItem } from './IdeaItem';
import { AuthRequest } from './auth-request.type';


export type SortingCriteria = "mainstream" | "controversial" | "newest" | "unpopular";

@Injectable({
  providedIn: 'root'
})
export class RestBackendService {

  
  
  orderChanged: EventEmitter<SortingCriteria> = new EventEmitter<SortingCriteria>();
  order: SortingCriteria = "mainstream";


  url = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  login(loginRequest: AuthRequest){
    const url = `${this.url}/auth`; 
    return this.http.post<string>(url, loginRequest, this.httpOptions);
  }

  signup(signupRequest: AuthRequest){
    const url = `${this.url}/signup`; 
    console.log(signupRequest);
    return this.http.post(url, signupRequest, this.httpOptions);
  }

  getIdeaPage(pageNumber: number) {
    const url = `${this.url}/page/${this.order}/${pageNumber}`; 
    return this.http.get<IdeaItem[]>(url, this.httpOptions);
  }

  getIdeaDetails(id: number) {
    const url = `${this.url}/ideas/${id}`; 
    return this.http.get<IdeaItem>(url, this.httpOptions);
  }

  postComment(id: number, comment: string){
    const url = `${this.url}/comment/${id}`;
    return this.http.post(url, {text: comment}, this.httpOptions);
  }

  postIdea(idea: IdeaItem){
    const url = `${this.url}/ideas`;
    return this.http.post<IdeaItem>(url, idea, this.httpOptions);
  }
  voteIdea(id: number, value: boolean){
    const url = `${this.url}/vote/${id}`;
    return this.http.post(url, {value: value}, this.httpOptions);
  }

  changeOrder(order: SortingCriteria){
    this.order = order;
    this.orderChanged.emit(order);
  }

}
