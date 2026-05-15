import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,

  ) // private customHelper: CustomHelper
  { }

  get(url: string, params = {}) {
    return this.parseRequest(
      this.httpClient.get(
        `${environment.apiUrl}/${url}`,
        this.getOptions(params)
      )
    );
  }

  getFile(url: string, params = {}) {
    return this.parseRequest(
      this.httpClient.get(`${environment.apiUrl}/${url}`, {
        ...this.getOptions(params),
        observe: 'response',
        responseType: 'blob',
        reportProgress: true,
      })
    );
  }

  post(url: string, params = {}, addContentType = true) {
    return this.parseRequest(
      this.httpClient.post(
        `${environment.apiUrl}/${url}`,
        params,
        this.getOptions({}, {}, addContentType)
      )
    );
  }

  put(url: string, params = {}) {
    return this.parseRequest(
      this.httpClient.put(
        `${environment.apiUrl}/${url}`,
        params,
        this.getOptions()
      )
    );
  }

  patch(url: string, params = {}) {
    return this.parseRequest(
      this.httpClient.patch(
        `${environment.apiUrl}/${url}`,
        params,
        this.getOptions()
      )
    );
  }

  delete(url: string, params = {}) {
    return this.parseRequest(
      this.httpClient.delete(
        `${environment.apiUrl}/${url}`,
        this.getOptions({}, params)
      )
    );
  }

  private async parseRequest(request: any) {
    try {
      const response = await request.toPromise();
      return response;
    } catch (error) {
      throw this.errorResponse(error);
    }
  }

  private getOptions(params = {}, body = {}, addContentType = true) {
    let headers = new HttpHeaders();

    if (addContentType) {
      headers = headers.set('Content-Type', 'application/json');
      headers = headers.set('Access-Control-Allow-Origin', '*');
      headers = headers.set(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
      );
      headers = headers.set(
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      );
    }

    // if (this.authService.token) {
    //   headers = headers.set(
    //     'Authorization',
    //     `Bearer ${this.authService.token}`
    //   );
    // }

    return {
      headers,
      params,
      body,
    };
  }

  private errorResponse(response: any) {
    let resultError;
    switch (response.status) {
      case 401:
        resultError = response.error;
        break;

      default:
        resultError = { message: 'Falha ao realizar requisição' };
        break;
    }
    throw resultError;
  }
}
