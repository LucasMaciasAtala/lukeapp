import { Component, OnInit } from '@angular/core';
import { Member } from './member';
import { MembersService } from './members.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})

export class MembersComponent implements OnInit {

  public data$: Observable<Member[]>;
  
  constructor(private membersService: MembersService) { }

  ngOnInit() {
	this.data$ = this.membersService.getMembers();
  }

  addPancho(member) {
  	console.log(`Pancho for member ${member.nickname}, which id is ${member.id}`)
  }

  placeholderChangeOnFocus(event) {
  	event.target.style = "::placeholder {  color: red;  opacity: 1; /* Firefox */}"
 	event.target.placeholder  = "This gonna be fun..."
  }

  placeholderChangeOnBlur(event) {
  	event.target.placeholder = "Are you sure?"
  }

}

export interface Member {
	id: string,
	nickname: string
  }
  
