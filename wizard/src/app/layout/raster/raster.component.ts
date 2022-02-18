import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-raster',
  templateUrl: './raster.component.html',
  styleUrls: ['./raster.component.css']
})
export class RasterComponent implements OnInit {
  public rasterX: any;
  public rasterY: any;


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    this.rasterX = e.screenX;
    this.rasterY = e.screenY;
    console.log(e);
  }

  canvas!: HTMLCanvasElement;

  constructor() { }

  ngOnInit(): void {

  }

  over() {
    console.log("Mouseover called");

  }

  out() {
    console.log("Mouseout called");
  }

}
