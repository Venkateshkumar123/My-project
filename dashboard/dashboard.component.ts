import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dsimages:any=["assets/images/cb.jpg","assets/images/tc.png","assets/images/lou.jpg","assets/images/di2.jpg","assets/images/srp.jpg"

// categories images

,"assets/images/fortnite.jpg","assets/images/gtav.jpg","assets/images/game2.jpg","assets/images/gta4.jpg","assets/images/cp.jpg","assets/images/coldwar.png","assets/images/bs.jpg","assets/images/cs.png","assets/images/fs.png","assets/images/ss.png","assets/images/rws.png","assets/images/ts.png","assets/images/gowr.jpg","assets/images/pti.jpg","assets/images/ptr.png","assets/images/bts.jpg","assets/images/game2.jpg","assets/images/skrx.jpg","assets/images/nfsp.png","assets/images/mgp.jpg",

  "assets/images/c2.png","assets/images/dr.jpg","assets/images/fh5.png","assets/images/fh4.jpg",





]

  constructor(private auth:AuthService) { }
  user = {displayName:"somename"};
  ngOnInit(): void {
    this.auth.canAccess();
    if (this.auth.isAuthenticated()) {

        //call user details service
        this.auth.detail().subscribe({
          next:data=>{
              // this.user.localId = data.users[0].localId;
              this.user.displayName = data.users[0].displayName;
          }
        })
    }
  }





}
