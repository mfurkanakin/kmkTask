import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/app.service';
import { PaginationModel } from '../../models/pagination-model';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  currentIndex = 0;
  pageCount = 0;




  public apiService = inject(ApiService);
  public paginationModel: PaginationModel = new PaginationModel();

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.apiService.getDataService(this.paginationModel).subscribe((resp)=>{
      console.log(resp);
      this.paginationModel = resp;
      this.pageCount = this.paginationModel.total / 10;
      
    })
  }
  nextImage(index: any) {
    this.currentIndex = (this.currentIndex + 1) % this.paginationModel.products[index].images.length;
  }

  prevImage(index: any) {
    this.currentIndex = (this.currentIndex - 1 + this.paginationModel.products[index].images.length) % this.paginationModel.products[this.currentIndex].images.length;
  }

  onChangePage(type: any,index: any){
    if(type == "pr"){
      if(this.paginationModel.skip == 0) return;
      this.paginationModel.skip = this.paginationModel.skip - 10;
    }
    else if(type == "nx"){
      if(this.paginationModel.skip == 90) return;
      this.paginationModel.skip = this.paginationModel.skip + 10;
    }
    else{
      this.paginationModel.skip = (index - 1) * 10;
    }
    this.getData();
  }
}