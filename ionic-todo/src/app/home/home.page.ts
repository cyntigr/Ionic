import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService,
    private alertController:AlertController,
    private navController : NavController){
  }
  ngOnInit(){ }

  ionViewWillEnter(){

    this.todoService.getTodos().then(
      data => this.todos = data
    );
  }
  async deleteDialog(title: string, id: number){
      const alert = await this.alertController.create({
        header: 'Borrar tarea',
        message: 'Estas seguro de borrar la tarea <strong>' + title + ' ?</strong>',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Cancelar');
            }
          }, {
            text: 'Aceptar',
            handler: () => {
              this.todoService.deleteTodo(id).then( 
                () => this.todoService.getTodos().then(
                data => this.todos = data)
              );
              console.log('Confirmar');
            }
          }
        ]
      });
      await alert.present();
  }
  editTodo(id: number){
    this.navController.navigateForward('/edit/' + id);
  }
}
