import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {

            var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(28.67426, 77.31916),
            mapTypeId: google.maps.MapTypeId.ROAD,
            scrollwheel: false
        }
        var map = new google.maps.Map(document.getElementById('googleMap'),
            mapOptions);

        var myLatLng = new google.maps.LatLng(28.67426, 77.31916);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title:"B-23, DSIDC Compound, Jhilmil Industrial Area, Shahdara, Delhi - 110095, India"

        });



  }

}
