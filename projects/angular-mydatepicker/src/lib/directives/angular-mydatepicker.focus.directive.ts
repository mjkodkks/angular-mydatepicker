import {Directive, ElementRef, AfterViewInit, Input} from "@angular/core";
import {ZERO_STR} from "../constants/constants";

@Directive({
  selector: "[angular-mydatepicker-focus]"
})
export class AngularMyDatePickerFocusDirective implements AfterViewInit {
  @Input("angular-mydatepicker-focus") value: string;

  constructor(private el: ElementRef) {
  }

  // Focus to element: if value 0 = don't set focus, 1 = set focus
  ngAfterViewInit() {
    if (this.value === ZERO_STR) {
      return;
    }
    this.el.nativeElement.focus();
  }
}
