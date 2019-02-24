import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProjectService } from './project.services'

@Component({
    selector: 'project-home',
    templateUrl: './project.component.html',
    providers:[ ProjectService ],
    styleUrls:['./project.component.css']
})

export class Project implements OnInit{

    projects: any;

    constructor(private projecService:ProjectService ){

    }

    ngOnInit(){
        this.getProjects();
    }

    getProjects(): void{
        this.projecService.getProjects().subscribe(data=> this.projects = data)
        
        console.log('project service ');
    }

}