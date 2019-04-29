import { Injectable } from '@angular/core';
import { AppConsts } from 'src/assets/appconfig';


@Injectable()
export class ApiService {

  apiRootUrl = AppConsts.serviceBaseUrl;
  apiWechatUrl = 'http://ch.gaobukeji.com:8073'
  constructor(

  ) {
  }

  /** 获取开发日历 */
  developercalendar = this.apiRootUrl + '/cabbeen/wxplmapp.do?developercalendar'

}