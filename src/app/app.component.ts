import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // progress = 0;

  // signup = new FormGroup({
  //   email: new FormControl(null, Validators.required),
  //   image: new FormControl(null, [Validators.required, requiredFileType('png')])
  // });

  // constructor(private httpClient: HttpClient) { }
  title = 'createEventAdmin-v2';

}
