import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
}

@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly api = 'https://api.github.com';
  private readonly username = 'Ramnarayanansankar';

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<GitHubRepo[]> {
    return this.http.get<GitHubRepo[]>(
      `${this.api}/users/${this.username}/repos`,
      {
        params: {
          sort: 'updated',
          per_page: '100',
          type: 'owner',
        },
      }
    );
  }
}
