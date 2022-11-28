import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  possibleColors = [
    'Thistle',
    'Tomato',
    'IndianRed',
    'DarkKhaki',
    'PaleVioletRed',
    'DarkSeaGreen',
    'RosyBrown',
    'PaleTurquoise',
    'LightSteelBlue'
  ];

  @HostBinding('style.background-color')
  private bgColors!: string;

  @HostBinding('class.border-danger')
  private borders!: boolean;

  constructor(private element: ElementRef, private renderer: Renderer2) {}


  @HostListener('mouseover') onMouseOver() {
    let part = this.element.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'block');
    this.borders = false;

    const color = Math.floor(Math.random() * this.possibleColors.length);
    this.bgColors = this.possibleColors[color];
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.element.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'none');

    this.borders = true;
    this.bgColors = "transparent";
  }

}
