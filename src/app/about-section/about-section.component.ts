import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})

export class AboutSectionComponent implements OnInit {
  aboutString: string = "";

  constructor() { }

  ngOnInit(): void {
    this.aboutString = "My name is Zachary Clay. I am a software engineer from Savannah, GA and currently a senior at Clemson University College of Engineering, Computing, and Applied Sciences. I am working towards a Bachelor of Science in Computer Information Systems with a projected graduation date of May 2023. To tell you a little bit about myself, I am passionate about software engineering and developing my skills in computer science. I love to challenge myself with projects and new technologies. Some of my hobbies and interests outside of software engineering are playing guitar, hanging out with friends, snowboarding, and playing/watching sports.";
  }

}
