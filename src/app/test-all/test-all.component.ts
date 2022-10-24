import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestListService } from '../services/test-list.service';

@Component({
  selector: 'app-test-all',
  templateUrl: './test-all.component.html',
  styleUrls: ['./test-all.component.css']
})
export class TestAllComponent implements OnInit {

  testList: any = [];
  constructor(private _testService : TestListService, private router: Router) { }

  ngOnInit(): void {
    this.testList = this._testService.getList();
  }

}
