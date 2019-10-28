import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-panchos-approve',
  templateUrl: './panchos-approve.component.html',
  styleUrls: ['./panchos-approve.component.scss'],

})
export class PanchosApproveComponent implements OnInit {
  paidoutPanchos: any = [
    {
      id: '1',
      description: 'Trajo Facturas',
      timestamp: new Date(),
      user: {
        firstName: 'Guillermo ',
        lastName: 'Anselmi',
        profileImage: 'assets/imgs/avatar.png'
      }
    },
    {
      id: '1',
      description: 'Trajo Facturas',
      timestamp: new Date(),
      user: {
        firstName: 'Guillermo ',
        lastName: 'Anselmi',
        profileImage: 'assets/imgs/avatar.png'
      }
    },
    {
      id: '1',
      description: 'Trajo Facturas',
      timestamp: new Date(),
      user: {
        firstName: 'Guillermo ',
        lastName: 'Anselmi',
        profileImage: 'assets/imgs/avatar.png'
      }
    },
    {
      id: '1',
      description: 'Trajo Facturas',
      timestamp: new Date(),
      user: {
        firstName: 'Guillermo ',
        lastName: 'Anselmi',
        profileImage: 'assets/imgs/avatar.png'
      }
    },
  ]

  pendingPanchos: any = [
    {
      id: '1',
      value: 1,
      description: 'Hablar en Español',
      timestamp: new Date(),
      user: {
        firstName: 'Guillermo ',
        lastName: 'Anselmi',
        profileImage: 'assets/imgs/avatar.png'
      }
    },
    {
      id: '2',
      value: 1,
      description: 'Dejar Computadora desbloqueada',
      timestamp: new Date(),
      user: {
        firstName: 'Guillermo ',
        lastName: 'Anselmi',
        profileImage: 'assets/imgs/avatar.png'
      }
    },
    {
      id: '3',
      value: 3,
      description: 'Llegar tarde a meeting con cliente',
      timestamp: new Date(),
      user: {
        firstName: 'Guillermo ',
        lastName: 'Anselmi',
        profileImage: 'assets/imgs/avatar.png'
      }
    },
    {
      id: '4',
      value: 3,
      description: 'Empleado nuevo',
      timestamp: new Date(),
      user: {
        firstName: 'Guillermo ',
        lastName: 'Anselmi',
        profileImage: 'assets/imgs/avatar.png'
      }
    },

  ]

  constructor() { }

  ngOnInit() {
  }

  getArray(value: Number) {
    if (value) {
      return Array(value).fill(1)
    }else {
      return []
    }
  }

  pendingPanchosAction(value, item) {
    console.log(value, item);
    item.clicked = true;
    const index = this.pendingPanchos.findIndex(el => el == item);
    setTimeout(() => {
      
      this.pendingPanchos.splice(index, 1);
    }, 500);

  }

  paidoutPanchosAction(value, item) {
    console.log(value, item);
    item.clicked = true;

    const index = this.paidoutPanchos.findIndex(el => el == item );

    setTimeout(() => {
      
      this.paidoutPanchos.splice(index, 1);
    }, 500);
  }
}
