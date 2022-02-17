import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-colorpickermaterial',
  templateUrl: './colorpickermaterial.component.html',
  styleUrls: ['./colorpickermaterial.component.css']
})
export class ColorpickermaterialComponent implements OnInit {


  formControl: FormControl | undefined;
  
  public disabled = false;
  public color: ThemePalette = 'primary';
  public touchUi = false;
  
  colorCtr: FormControl = new FormControl(null);

  public options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' }
  ];

  public listColors = ['primary', 'accent', 'warn'];

  public codeColorPicker = `
  <mat-form-field>
    <input matInput [ngxMatColorPicker]="picker" [formControl]="colorCtr">
    <ngx-mat-color-toggle matSuffix [for]="picker"></ngx-mat-color-toggle>
    <ngx-mat-color-picker #picker></ngx-mat-color-picker>
  </mat-form-field>`;


  constructor() { }

  ngOnInit(): void {
  }
}
