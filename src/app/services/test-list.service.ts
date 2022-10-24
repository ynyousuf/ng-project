import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestListService {

  constructor() { }

  getList(){
    return [
      {"slNo": 1, "name": "test1"},
      {"slNo": 2, "name": "test2"},
      {"slNo": 3, "name": "test3"},
      {"slNo": 4, "name": "test4"},
    ];
  }
}
