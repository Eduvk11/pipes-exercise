import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-week",
  templateUrl: "./week.component.html",
  styleUrls: ["./week.component.scss"]
})
export class WeekComponent implements OnInit {
  days: Array<string> = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sábado",
    "domingo"
  ];
  date = new Date();
  constructor() {}

  ngOnInit() {}
}
