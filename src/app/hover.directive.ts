import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  @Input() appHover!: string;

  constructor() // private element: ElementRef,
  // @Inject(DOCUMENT) private document: Document,
  // private renderer: Renderer2
  {
    // console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
    //// WAY -1
    // this.element.nativeElement.style.backgroundColor = this.color;
    //// WAY -2
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'backgroundColor',
    //   'red'
    // );
    ////
    // ERR: object may be possibly null
    // this.document.querySelector('.input-email').style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'backgroundColor',
    //   this.appHover
    // );
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'backgroundColor',
    //   'white'
    // );
  }
}
