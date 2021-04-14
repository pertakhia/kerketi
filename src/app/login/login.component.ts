import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  

  result: String = ''
  languageId = 1;
  domainId = 1;

  constructor(private http: HttpClient  ) {}


  onSubmit( postData: { username: number, password: string , domainId: 1, languageId: 1 }) {
     
    
    let url = "https://api-staging.kerketi.ge:8443/k-web-bridge/users/login"
    const element = document.querySelector('.avtive-module')
  

  
    this.http.post(url,postData)
        .subscribe((data : any) => {
        this.result = JSON.stringify(data.errorMessage);
        if(this.result) {
          element?.classList.add('module')
        }else {
          return
        }
      })
  }
  

  closeBtn() {
    var btn = document.querySelector('.avtive-module')
    btn?.classList.remove('module')
  }

  
  
  ngOnInit(): void { }

}
