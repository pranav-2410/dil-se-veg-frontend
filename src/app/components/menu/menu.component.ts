import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';
import { item } from '../../model/item.model';
import { AppRoutingModule } from "../../app.routes";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items$!: Observable<item[]>;
  constructor(private menuService : MenuService){}

  ngOnInit(): void {
    this.items$ = this.menuService.getMenu();

    }
}

