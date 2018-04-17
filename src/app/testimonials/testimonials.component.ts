import { Component, OnInit } from '@angular/core';

import { testimonials } from './testimonials';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials = testimonials;

  constructor() { }

  ngOnInit() {
  }

}
