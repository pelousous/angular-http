import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    },
    {
      name: 'Preprodserver',
      capacity: 300,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerService) {}
  ngOnInit() {
      this.serverService.getServers()
                      .subscribe(
                        (response: Response) => {
                          console.log(response);
                        });
  }
  onAddServer(name: string, capacity: number) {
    this.servers.push({
      name: name,
      capacity: capacity,
      id: this.generateId()
    });
    this.serverService.storeServers(this.servers)
                      .subscribe((response) => console.log(response));
  }
  onAddServers() {
    this.serverService.storeServers(this.servers)
                      .subscribe((response) => console.log(response));
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
