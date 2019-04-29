import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AppConsts } from 'src/assets/appconfig';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Toast } from 'ng-zorro-antd-mobile';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      '.AspNetCore.Culture': 'zh-CN',
      "Accept": "application/json"
    }
  )
};

@Injectable()
export class HttpBaseService {
  tenantId: string = '';
  constructor(
    private http: HttpClient,
    private _toast:Toast
  ) {
    let tenantId = localStorage.getItem('tenantId');
    if (tenantId != null)
      this.tenantId = tenantId;
  }

  /**
   * get 方法
   * @param url 路径
   * @param options 参数
   */
  getData(url, options?): Observable<any> {

    return this.http.get<any>(url,
      {
        'headers': new HttpHeaders(
          {
            'Abp.TenantId': this.tenantId,
            'X-TenantId': this.tenantId,
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
            '.AspNetCore.Culture': 'zh-CN',
            "Content-Type": "application/json",
            "Accept": "application/json"
          }),
        params: options
      })
      .pipe(catchError(this.handleError('get', [])))


  }
  getDefaultHead(url, options?) {
    const param = new HttpParams().append('city', options.city);
    return this.http.get<any>(url,
      {
        params: param
      })
      .pipe(catchError(this.handleError('get', [])))
  }
  /**
   * post 方法
   * @param url 路径 
   * @param options 参数
   */
  postData(url, options?, header?): any {
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Abp.TenantId': this.tenantId,
          'X-TenantId': this.tenantId,
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
          '.AspNetCore.Culture': 'zh-CN',
          "Accept": "application/json"
        }
      )
    };
    let hoption;


    hoption = httpOption;

    return this.http.post<any>(url, options, hoption)
      .pipe(catchError(this.handleError('post', [])))
  }

  putData(url, options?, header?): any {
    let httpOption = {
      headers: new HttpHeaders(
        {
          'Abp.TenantId': this.tenantId,
          'X-TenantId': this.tenantId,
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
          '.AspNetCore.Culture': 'zh-CN',
          "Accept": "application/json"
        }
      )
    };
    let hoption;
    if (header) {
      hoption = header;
    } else {
      hoption = httpOption;
    }
    return this.http.put<any>(url, options, hoption)
      .pipe(catchError(this.handleError('put', [])))
  }
  /**
   * delete 方法
   * @param url 路径
   * @param options 参数
   */
  deleteData(url, options): any {
    return this.http.delete<any>(url, {
      'headers': new HttpHeaders(
        {
          'Abp.TenantId': this.tenantId,
          'X-TenantId': this.tenantId,
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
          '.AspNetCore.Culture': 'zh-CN',
          "Content-Type": "application/json",
          "Accept": "application/json"
        }),
      params: options
    })

  }
  /**
* 处理失败的Http操作.
* 让应用程序继续.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status == 401) {
        var first = localStorage.getItem('accessToken') == null;
        localStorage.removeItem('accessToken');
      }
      // TODO: 将误差发送到远程日志基础设施
      console.error(error.error.error.message); // log to console instead
      // TODO: 更好地为用户消费转换错误
      //this.log(`${operation} failed: ${error.message}`);
      this.log(`${operation} failed: ${error.error.error.message}`);
      Toast.fail(error.error.error.message,2000);
      // 让应用程序继续运行，返回一个空的结果
      return throwError(error.error);
    };

  }
  /** 输出错误消息 */
  private log(message: string) {
    console.log('错误消息: ' + message);
    //alert(message);
  }
}