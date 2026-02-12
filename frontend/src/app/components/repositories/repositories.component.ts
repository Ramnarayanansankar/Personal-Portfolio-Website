import { Component, OnInit } from '@angular/core';
import { GithubService, GitHubRepo } from '../../services/github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  repos: GitHubRepo[] = [];
  loading = true;
  error: string | null = null;

  constructor(private github: GithubService) {}

  ngOnInit(): void {
    this.github.getRepositories().subscribe({
      next: (repos) => {
        this.repos = repos.filter((r) => !r.name.startsWith('.'));
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Could not load repositories. Try again later.';
        this.loading = false;
      },
    });
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  formatRepoName(name: string): string {
    if (!name) return '';
    return name
      .split(/[-_.]+/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(' ');
  }
}
