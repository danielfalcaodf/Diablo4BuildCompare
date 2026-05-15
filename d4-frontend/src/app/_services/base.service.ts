import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class BaseService {
  public urlBase = environment.apiUrl;
  public headers: HttpHeaders = new HttpHeaders();
  public params: HttpParams = new HttpParams();

  constructor(
    private http: HttpClient,
    baseEndpoint: string,
    // private notificaService: NotificaService,
    // private spinnerService: NgxSpinnerService
  ) {
    this.urlBase += "/" + baseEndpoint;
    this.headers = this.headers.set(
      'Content-Type',
      'application/json;charset=UTF-8'
    );
  }

  getById<T>(id: number | string): Observable<T> {
    return this.getResult<T>(
      this.http.get<T>(`${this.urlBase}/${id}`)
    );
  }

  // getAllGridView<T>(filter: any = null): Observable<KlazzResponseType<GridViewData<T[]>>> {
  //   return this.getResult<GridViewData<T[]>>(this.http.post<KlazzResponseType<GridViewData<T[]>>>(`${this.urlBase}/get-all`, JSON.stringify(filter), { headers: this.headers }));
  // }

  getAll<T>(filter: any = null): Observable<T> {
    return this.getResult<T>(
      this.http.get<T>(`${this.urlBase}/All`, {
        headers: this.headers,
        params: filter,
      })
    );
  }

  getByFilter<T>(
    url: string = '',
    filter: any = null
  ): Observable<T> {
    return this.getResult<T>(
      this.http.get<T>(`${this.urlBase + url}`, {
        headers: this.headers,
        params: { ...filter },
      })
    );
  }

  getByParams<T>(
    url: string = '',
    filter: any = null
  ): Observable<T> {
    return this.http.get<T>(`${this.urlBase + url}`, {
      headers: this.headers,
      params: { ...filter },
    })
  }

  getForSelectData<T>(): Observable<T[]> {
    return this.getResult<T[]>(
      this.http.get<T[]>(
        `${this.urlBase}/get-for-select-data`,
        {
          headers: this.headers,
        }
      )
    );
  }

  get<T>(url: string = ''): Observable<T> {
    return this.getResult<T>(
      this.http.get<T>(`${this.urlBase + url}`, {
        headers: this.headers,
      })
    );
  }

  post<TRequest, TResponse>(
    obj: TRequest,
    url: string = ''
  ): Observable<TResponse> {
    return this.getResult<TResponse>(
      this.http.post<TResponse>(
        `${this.urlBase + url}`,
        JSON.stringify(obj),
        { headers: this.headers }
      )
    );
  }

  put<TRequest, TResponse>(
    obj: TRequest,
    url: string = ''
  ): Observable<TResponse> {
    return this.getResult<TResponse>(
      this.http.put<TResponse>(
        `${this.urlBase + url}`,
        JSON.stringify(obj),
        { headers: this.headers }
      )
    );
  }
  patch<TRequest, TResponse>(
    obj: TRequest,
    url: string = ''
  ): Observable<TResponse> {
    return this.getResult<TResponse>(
      this.http.patch<TResponse>(
        `${this.urlBase + url}`,
        JSON.stringify(obj),
        { headers: this.headers }
      )
    );
  }

  delete(id: string, url: string = '') {
    return this.http.delete(`${this.urlBase + url}/${id}`);
  }

  deleteS3File(url: string = '', object: any) {
    return this.http.delete(`${this.urlBase + url}`, { body: object });
  }

  changeStatus(id: number): Observable<boolean> {
    return this.getResult<boolean>(
      this.http.post<boolean>(
        `${this.urlBase}/change-status`,
        JSON.stringify(id),
        { headers: this.headers }
      )
    );
  }

  sendFile<TResponse>(
    formData: FormData,
    url: string = ''
  ): Observable<TResponse> {
    return this.getResult<TResponse>(
      this.http.post<TResponse>(
        `${this.urlBase + url}`,
        formData
      )
    );
  }

  uploadFileFromSignedUrl(
    url: string = '',
    file: File,
    reportProgress: boolean = true,
  ): any {
    const headers = new HttpHeaders({
      'Content-Type': file.type,
    });

    return this.http.put(
      url,
      file,
      {
        headers,
        reportProgress,
        observe: 'events'
      }
    );
  }


  protected serviceError(result: HttpErrorResponse) {
    return throwError(() => {
      // this.spinnerService.hide();

      if (result?.error?.errors) {
        result?.error?.errors.forEach((messageError: any) => {
          // this.notificaService.notificarErro(messageError);
        });

      } else {
        switch (result?.error?.type) {
          case 'warning':
            // this.notificaService.notificarInformacao(result?.error?.message);
            break;
          case 'alert':
            // this.notificaService.notificarAlerta(result?.error?.message);
            break;
          default:
          // this.notificaService.notificarErro(result?.error?.message);
        }
      }
      return result
    });
  }

  getResult<TResponse>(
    httpMethodRequest: any
  ): Observable<TResponse> {
    // this.spinnerService.show();
    return httpMethodRequest.pipe(
      map((result) => {
        // this.spinnerService.hide();
        return result;
      }),
      catchError((errors) => this.serviceError(errors))
    );
  }

  getHeaderFormData() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      }),
    };
  }

  getHeaderJsonBlob() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const httpOptions: Object = {
      headers: headers,
      observe: 'response',
      responseType: 'blob',
    };
    return httpOptions;
  }

  getHeaderZipBlob() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/octa',
    });

    const httpOptions: Object = {
      headers: headers,
      observe: 'response',
      responseType: 'blob',
    };
    return httpOptions;
  }

  getUserToken(): string {
    let userToken = JSON.parse(localStorage.getItem('userToken') || '{}');

    if (userToken) return userToken?.token;

    return '';
  }
}