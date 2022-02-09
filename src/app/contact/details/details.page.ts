import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ContactoserviceService } from '../../services/contactoservice.service';
import { ContactoModule } from '../../models/contacto/contacto.module';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public contacto:ContactoModule=new ContactoModule;

  private id:number=0;

  constructor(private activate:ActivatedRoute,private ContactoserviceService:ContactoserviceService,private router:Router) { 

  }

  ngOnInit() {
    this.activate.paramMap.subscribe(params => {
      this.id = +params.get('placeId');
    });
    this.contacto=this.ContactoserviceService.getContact(this.id, Number(localStorage.getItem('iduser')));
  }
  onSubmit(){
    this.router.navigate(['./dashboard']);
  }


}
