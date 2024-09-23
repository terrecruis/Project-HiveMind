import { Component, HostListener, Input, inject } from '@angular/core';
import { IdeaContainerComponent } from '../idea-container/idea-container.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RestBackendService, SortingCriteria } from '../../_services/rest-backend/rest-backend.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { IdeaItem } from '../../_services/rest-backend/IdeaItem';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [IdeaContainerComponent, NgFor, MatIconModule, MatButtonModule, NgClass, NgIf, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  restService = inject(RestBackendService);
  toastr = inject(ToastrService);
  router = inject(Router);
  ideas: IdeaItem[] = [];
  private orderSubscription: Subscription | undefined;
  activeFilter: string = 'all'; 

  actualPage: number = 1;
  throttle = 0;
  distance = 2;

  ngOnInit() {
    this.orderSubscription = this.restService.orderChanged.subscribe((order) => {
      this.reloadIdeas();
    });
  }

  ngAfterViewInit() {
    this.actualPage = 1;
    this.fetchIdeas();
  }

  fetchIdeas(pageNumber: number = 1) {
    this.restService.getIdeaPage(pageNumber).subscribe({
      next: (data) => {
        console.log(data);
        this.ideas = [...this.ideas, ...data];
        this.actualPage++;
        if (data.length === 0) {
          this.toastr.info("No more ideas available", "End of Ideas");
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.toastr.error("Your access token appears to be invalid. Login again", "Token expired");
          this.router.navigateByUrl("/login");
        } else {
          this.toastr.error(err.message, err.statusText);
        }
      },
      complete: () => { }
    });
  }

  loadMore() {
    this.fetchIdeas(this.actualPage);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (this.throttle > Date.now()) {
      return;
    }
    const pos = document.documentElement.scrollTop + document.documentElement.clientHeight;
    const max = document.documentElement.scrollHeight;
    if (pos + this.distance >= max) {
      this.throttle = Date.now() + 1000;
      this.loadMore();
    }
  }

  goToCreateIdea() {
    this.router.navigateByUrl("/post");
  }

  ordinaPer(order: SortingCriteria) {
    this.restService.changeOrder(order);
    this.activeFilter = order;
  }

  reloadIdeas() {
    this.ideas = [];
    this.actualPage = 1;
    this.fetchIdeas();
  }
}
