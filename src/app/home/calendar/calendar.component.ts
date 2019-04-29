import { ApiService } from './../../../shared/common/api-service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpBaseService } from 'src/shared/common/http-service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(
    private titleService: Title,
    private _httpService: HttpBaseService,
    private _apiService: ApiService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('开发日历');
    this.developercalendar();
  }

  /** 获取开发日历 */
  developercalendar() {
    this._httpService.getData(this._apiService.developercalendar).subscribe(res => {
      console.log('开发日历',res)
    })
  }

}
